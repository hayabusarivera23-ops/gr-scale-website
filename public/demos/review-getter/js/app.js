/* GR Scale — Review Getter (v1: opens the phone's own SMS app, no paid service). */

// ---- Shop config: edit these defaults per client, or change them on the Settings screen. ----
const DEFAULT_CONFIG = {
  shopName: 'Sample Cuts',
  reviewLink: 'https://g.page/r/YOUR-CODE/review',
  message: 'Hi [FIRST NAME], thanks for coming to [SHOP] today. Would you leave us a quick Google review? [LINK] — Reply STOP to opt out.'
};
// ---------------------------------------------------------------------------------------------

(function () {
  'use strict';

  const KEYS = { config: 'rg.config.v1', log: 'rg.log.v1' };
  const STOP_TEXT = 'Reply STOP to opt out';

  // Words that turn a review ask into an incentive or a "happy?" filter (Google + FTC rules).
  const BANNED = [
    /(?<!feel )\bfree\b/i, /\bdiscount/i, /%\s*off\b/i, /\$\s*\d+\s*off\b/i, /\bcoupon/i, /\breward/i, /\bgift/i,
    /\bgiveaway\b/i, /\bprize\b/i, /\braffle\b/i, /\bentry\b/i, /\bin exchange\b/i, /\bpromo/i,
    /\b5[ -]?stars?\b/i, /\bfive[ -]?stars?\b/i, /\bwere you happy\b/i, /\bif you (were|are) (happy|satisfied)\b/i,
    /\benjoy(ed)? your (visit|cut)\?/i, /\bunhappy\b/i, /\blet us know privately\b/i
  ];

  // ---------- storage (falls back to memory if localStorage is blocked) ----------
  const mem = {};
  const store = {
    get(k) { try { return window.localStorage.getItem(k); } catch (e) { return mem[k] ?? null; } },
    set(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { mem[k] = v; } },
    del(k) { try { window.localStorage.removeItem(k); } catch (e) { delete mem[k]; } }
  };
  function readJSON(k, fallback) {
    try { const v = store.get(k); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }

  function getConfig() {
    const saved = readJSON(KEYS.config, null) || {};
    return Object.assign({}, DEFAULT_CONFIG, saved);
  }
  function getLog() { const l = readJSON(KEYS.log, []); return Array.isArray(l) ? l : []; }
  function saveLog(l) { store.set(KEYS.log, JSON.stringify(l)); }

  // ---------- pure helpers (exposed on window.ReviewGetter for tests) ----------
  function cleanName(s) {
    return String(s || '').replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim().split(' ')[0].slice(0, 40);
  }
  function normalizePhone(raw) {
    const d = String(raw || '').replace(/\D/g, '');
    if (d.length === 10 && /^[2-9]/.test(d)) return '+1' + d;
    if (d.length === 11 && d[0] === '1' && /^[2-9]/.test(d[1])) return '+' + d;
    return null;
  }
  function buildMessage(cfg, firstName) {
    return cfg.message
      .split('[FIRST NAME]').join(firstName)
      .split('[SHOP]').join(cfg.shopName)
      .split('[LINK]').join(cfg.reviewLink);
  }
  // Works on iOS (8+) and Android: "?&body=" is the cross-platform form.
  function buildSmsHref(e164, body) {
    return 'sms:' + e164 + '?&body=' + encodeURIComponent(body);
  }
  function validateMessage(text) {
    const t = String(text || '');
    if (!t.trim()) return 'Message cannot be empty.';
    if (!t.includes('[LINK]')) return 'Keep [LINK] in the message so the customer gets the review link.';
    if (!t.toLowerCase().includes(STOP_TEXT.toLowerCase())) return 'Keep "' + STOP_TEXT + '" in the message.';
    const hit = BANNED.find(r => r.test(t));
    if (hit) return 'Remove "' + t.match(hit)[0] + '". Google bans rewards for reviews and asking only happy customers.';
    return '';
  }
  function validateLink(url) {
    try {
      const u = new URL(String(url || '').trim());
      if (u.protocol !== 'https:') return 'Link must start with https://';
      return '';
    } catch (e) { return 'Paste the full link, starting with https://'; }
  }
  function startOfWeek(d) { // Monday 00:00 local time
    const x = new Date(d); x.setHours(0, 0, 0, 0);
    const day = (x.getDay() + 6) % 7; x.setDate(x.getDate() - day); return x;
  }
  function weekCounts(log, now) {
    const s = startOfWeek(now || new Date()).getTime();
    const prev = s - 7 * 864e5;
    let week = 0, last = 0;
    log.forEach(e => { const t = Date.parse(e.date); if (t >= s) week++; else if (t >= prev) last++; });
    return { week, last, total: log.length };
  }
  function csvCell(v) {
    let s = String(v ?? '');
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; // stop spreadsheet formula injection
    return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }
  function toCSV(log) {
    const rows = [['date', 'first_name', 'phone_last4']];
    log.slice().sort((a, b) => a.date.localeCompare(b.date)).forEach(e => rows.push([e.date, e.firstName, e.last4]));
    return rows.map(r => r.map(csvCell).join(',')).join('\r\n') + '\r\n';
  }

  // Tests can replace this; on a phone it hands the link to the SMS app.
  function openSms(href) {
    if (typeof window.RG_openSms === 'function') return window.RG_openSms(href);
    window.location.href = href;
  }

  window.ReviewGetter = { DEFAULT_CONFIG, normalizePhone, buildMessage, buildSmsHref, validateMessage, validateLink, weekCounts, toCSV, cleanName };

  // ---------- UI ----------
  const $ = id => document.getElementById(id);
  function setErr(input, errEl, msg) {
    if (msg) { errEl.textContent = msg; errEl.hidden = false; input.setAttribute('aria-invalid', 'true'); }
    else { errEl.textContent = ''; errEl.hidden = true; input.removeAttribute('aria-invalid'); }
  }
  function flash(el, html, ms) {
    el.innerHTML = html; el.hidden = false;
    clearTimeout(el._t); el._t = setTimeout(() => { el.hidden = true; }, ms || 6000);
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  function renderHeader() {
    const cfg = getConfig();
    $('shop-title').textContent = cfg.shopName;
    $('msg-preview').textContent = buildMessage(cfg, 'Marcus');
    document.title = 'SAMPLE · Review Getter · ' + cfg.shopName;
  }

  function show(view) {
    document.querySelectorAll('.view').forEach(v => { v.hidden = v.id !== 'view-' + view; });
    document.querySelectorAll('.tab').forEach(t => {
      if (t.dataset.view === view) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current');
    });
    if (view === 'log') renderLog();
    if (view === 'settings') fillSettings();
    if (location.hash !== '#' + view) history.replaceState(null, '', '#' + view);
  }

  function renderLog() {
    const log = getLog();
    const c = weekCounts(log);
    $('week-count').textContent = c.week;
    $('last-week-count').textContent = c.last;
    $('total-count').textContent = c.total;
    $('log-empty').hidden = log.length > 0;
    $('export-btn').disabled = $('clear-btn').disabled = log.length === 0;
    const fmt = new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
    $('log-list').innerHTML = log.slice().reverse().slice(0, 200).map(e =>
      '<li><span class="who">' + esc(e.firstName) + ' <span class="when">···' + esc(e.last4) + '</span></span>' +
      '<span class="when">' + esc(fmt.format(new Date(e.date))) + '</span></li>').join('');
  }

  function checkRepeat() {
    const first = cleanName($('first').value);
    const e164 = normalizePhone($('phone').value);
    const box = $('repeat');
    if (!first || !e164) { box.hidden = true; return; }
    const last4 = e164.slice(-4);
    const cutoff = Date.now() - 30 * 864e5;
    const hit = getLog().slice().reverse().find(e => e.last4 === last4 && e.firstName.toLowerCase() === first.toLowerCase() && Date.parse(e.date) >= cutoff);
    if (hit) {
      box.textContent = first + ' (···' + last4 + ') was already asked on ' + new Date(hit.date).toLocaleDateString() + '. One ask a month is plenty.';
      box.hidden = false;
    } else box.hidden = true;
  }

  function onSend(ev) {
    ev.preventDefault();
    const first = cleanName($('first').value);
    const e164 = normalizePhone($('phone').value);
    const consent = $('consent').checked;
    setErr($('first'), $('first-err'), first ? '' : 'Enter the customer\'s first name.');
    setErr($('phone'), $('phone-err'), e164 ? '' : 'Enter a 10-digit US mobile number.');
    setErr($('consent'), $('consent-err'), consent ? '' : 'Ask the customer first. Only text people who said OK.');
    const bad = !first ? $('first') : !e164 ? $('phone') : !consent ? $('consent') : null;
    if (bad) { bad.focus(); return; }

    const cfg = getConfig();
    const href = buildSmsHref(e164, buildMessage(cfg, first));
    const log = getLog();
    log.push({ date: new Date().toISOString(), firstName: first, last4: e164.slice(-4) }); // never the full number
    saveLog(log);

    $('send-form').reset();
    $('repeat').hidden = true;
    flash($('sent'), '<strong>Ready.</strong> Your Messages app is opening for ' + esc(first) + '. Tap send there.');
    openSms(href);
  }

  function fillSettings() {
    const cfg = getConfig();
    $('s-shop').value = cfg.shopName; $('s-link').value = cfg.reviewLink; $('s-msg').value = cfg.message;
    ['s-shop', 's-link', 's-msg'].forEach(id => setErr($(id), $(id + '-err'), ''));
  }

  function onSaveSettings(ev) {
    ev.preventDefault();
    const shopName = $('s-shop').value.replace(/\s+/g, ' ').trim();
    const reviewLink = $('s-link').value.trim();
    const message = $('s-msg').value.trim();
    const e1 = shopName ? '' : 'Enter the shop name.';
    const e2 = validateLink(reviewLink);
    const e3 = validateMessage(message);
    setErr($('s-shop'), $('s-shop-err'), e1);
    setErr($('s-link'), $('s-link-err'), e2);
    setErr($('s-msg'), $('s-msg-err'), e3);
    if (e1) return $('s-shop').focus();
    if (e2) return $('s-link').focus();
    if (e3) return $('s-msg').focus();
    store.set(KEYS.config, JSON.stringify({ shopName, reviewLink, message }));
    renderHeader();
    flash($('saved'), '<strong>Saved.</strong> Settings are stored on this phone.', 4000);
  }

  function exportCSV() {
    const log = getLog(); if (!log.length) return;
    const blob = new Blob([toCSV(log)], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'review-requests-' + new Date().toISOString().slice(0, 10) + '.csv';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  // Two-tap confirm (no window.confirm: blocked in some webviews/previews, and clumsy on phones).
  function armConfirm(btn, label, action) {
    const original = btn.textContent;
    btn.addEventListener('click', () => {
      if (btn.dataset.armed === '1') {
        clearTimeout(btn._t); btn.dataset.armed = ''; btn.textContent = original; action(); return;
      }
      btn.dataset.armed = '1'; btn.textContent = label;
      btn._t = setTimeout(() => { btn.dataset.armed = ''; btn.textContent = original; }, 4000);
    });
  }

  let lastFocus = null;
  function openQR() {
    const cfg = getConfig();
    const qr = window.qrcode(0, 'M');
    qr.addData(cfg.reviewLink);
    qr.make();
    $('qr-code').innerHTML = qr.createSvgTag({ cellSize: 4, margin: 16, scalable: true })
      .replace('<svg ', '<svg aria-hidden="true" focusable="false" shape-rendering="crispEdges" ');
    $('qr-shop').textContent = cfg.shopName;
    lastFocus = document.activeElement;
    $('qr-screen').hidden = false;
    document.body.style.overflow = 'hidden';
    $('qr-close').focus();
    try { if (navigator.wakeLock) navigator.wakeLock.request('screen').then(l => { openQR.lock = l; }, () => {}); } catch (e) { /* optional */ }
  }
  function closeQR() {
    $('qr-screen').hidden = true;
    document.body.style.overflow = '';
    try { if (openQR.lock) openQR.lock.release(); } catch (e) { /* ignore */ }
    openQR.lock = null;
    if (lastFocus) lastFocus.focus();
  }

  function netStatus() { $('net').textContent = navigator.onLine ? '' : 'Offline: still works'; }

  function init() {
    renderHeader();
    $('send-form').addEventListener('submit', onSend);
    $('first').addEventListener('input', () => { setErr($('first'), $('first-err'), ''); checkRepeat(); });
    $('phone').addEventListener('input', () => { setErr($('phone'), $('phone-err'), ''); checkRepeat(); });
    $('consent').addEventListener('change', () => { if ($('consent').checked) setErr($('consent'), $('consent-err'), ''); });
    $('settings-form').addEventListener('submit', onSaveSettings);
    armConfirm($('reset-btn'), 'Tap again to reset', () => {
      store.del(KEYS.config); renderHeader(); fillSettings();
      flash($('saved'), '<strong>Reset.</strong> Defaults restored.', 4000);
    });
    $('export-btn').addEventListener('click', exportCSV);
    armConfirm($('clear-btn'), 'Tap again to delete', () => { saveLog([]); renderLog(); });
    $('qr-btn').addEventListener('click', openQR);
    $('qr-close').addEventListener('click', closeQR);
    document.addEventListener('keydown', e => {
      if ($('qr-screen').hidden) return;
      if (e.key === 'Escape') closeQR();
      if (e.key === 'Tab') { e.preventDefault(); $('qr-close').focus(); } // focus trap: one control
    });
    document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => show(t.dataset.view)));
    window.addEventListener('hashchange', () => show((location.hash || '#send').slice(1)));
    window.addEventListener('online', netStatus); window.addEventListener('offline', netStatus);
    netStatus();
    const start = (location.hash || '').slice(1);
    show(['send', 'log', 'settings'].includes(start) ? start : 'send');

    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register('sw.js').catch(() => { /* preview sandboxes may block this; app still works online */ });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
