'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, AlertCircle, ArrowRight, ClipboardList } from 'lucide-react'
import { submitLead } from '@/lib/submitLead'
import { AGENTS } from '@/lib/site'

const PLANS = ['Front Desk Bundle', ...AGENTS.map(a => a.name)]
const CARRIERS = ['AT&T', 'Verizon', 'T-Mobile', 'Spectrum', 'Xfinity', 'Landline / VoIP', 'Other', 'Not sure']

const input = 'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-[var(--text-dim)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition'
const label = 'text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block'

export default function StartPage() {
  return (
    <Suspense fallback={null}>
      <StartInner />
    </Suspense>
  )
}

function Field({ id, title, hint, children, wide }: { id: string; title: string; hint?: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className={wide ? 'sm:col-span-2' : ''}>
      <label htmlFor={id} className={label}>{title}</label>
      {children}
      {hint && <p className="text-xs text-[var(--text-dim)] mt-1">{hint}</p>}
    </div>
  )
}

function StartInner() {
  const params = useSearchParams()
  const plan = params.get('plan') || ''
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [err, setErr] = useState('')
  const [f, setF] = useState({
    name: '', business: '', phone: '', email: '', plan: PLANS.includes(plan) ? plan : 'Front Desk Bundle',
    address: '', hours: '', services: '', booking: '', website: '', gbp: '', bizphone: '', carrier: '',
    photos: '', voice: '', message: '', agree: false, company_url: '',
  })
  // Carrier-registration details. Kept out of the main payload and added to the notes field on submit,
  // so the intake receives exactly the same field names as before.
  const [reg, setReg] = useState({ legal: '', ein: '', ownercell: '' })
  const setR = (k: keyof typeof reg) => (e: React.ChangeEvent<HTMLInputElement>) => setReg({ ...reg, [k]: e.target.value })
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!f.agree) { setStatus('error'); setErr('Please check the box to agree to the terms.'); return }
    setStatus('sending'); setErr('')
    try {
      const extra = [
        reg.legal && `Legal business name: ${reg.legal}`,
        reg.ein && `EIN: ${reg.ein}`,
        reg.ownercell && `Owner cell for carrier code: ${reg.ownercell}`,
      ].filter(Boolean).join('\n')
      const message = [f.message, extra].filter(Boolean).join('\n\n')
      await submitLead({ form: 'setup', source: 'Client setup form', ...f, message })
      setStatus('sent')
    } catch (er) {
      setStatus('error'); setErr(er instanceof Error ? er.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="pt-24">
      <section className="section pb-6">
        <div className="container-site text-center max-w-2xl">
          <span className="badge mb-4">New client setup</span>
          <h1 className="h1 mb-4">Let&apos;s get your business set up.</h1>
          <p className="lead">5 minutes. Answer what you can and skip what you don&apos;t know — Gio will text you about anything missing.</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-site max-w-3xl">
          {status === 'sent' ? (
            <div className="card flex flex-col items-center text-center py-16 gap-4" role="status">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10"><CheckCircle className="h-8 w-8 text-green-400" /></div>
              <h2 className="h3 text-white">Got it. Setup starts now.</h2>
              <p className="text-sm text-[var(--text-muted)] max-w-md leading-relaxed">
                Gio will text you within one business day to confirm. Your website goes live within 48 hours after we have this form and your setup fee, your Google profile within about 3 days, and texting once the phone carriers approve it. That timing is up to the carriers.
              </p>
              <Link href="/services" className="text-sm text-brand-400 hover:underline">See what each service includes →</Link>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="card">
              <div className="flex items-center gap-3 mb-6"><ClipboardList className="h-5 w-5 text-brand-400" /><h2 className="h3">About you</h2></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="s-name" title="Your name *"><input id="s-name" required autoComplete="name" className={input} value={f.name} onChange={set('name')} /></Field>
                <Field id="s-biz" title="Business name *"><input id="s-biz" required autoComplete="organization" className={input} value={f.business} onChange={set('business')} /></Field>
                <Field id="s-phone" title="Your cell (for texts from Gio) *"><input id="s-phone" required type="tel" inputMode="tel" autoComplete="tel" className={input} value={f.phone} onChange={set('phone')} /></Field>
                <Field id="s-email" title="Email"><input id="s-email" type="email" autoComplete="email" className={input} value={f.email} onChange={set('email')} /></Field>
                <Field id="s-plan" title="What you signed up for" wide>
                  <select id="s-plan" className={input + ' bg-[#0d1117]'} value={f.plan} onChange={set('plan')}>{PLANS.map(p => <option key={p} value={p}>{p}</option>)}</select>
                </Field>
              </div>

              <h2 className="h3 mt-10 mb-6">Your business</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="s-addr" title="Address (or area you serve)" wide><input id="s-addr" autoComplete="street-address" className={input} value={f.address} onChange={set('address')} placeholder="1234 N Dale Mabry Hwy, Tampa — or “mobile, all of Tampa”" /></Field>
                <Field id="s-hours" title="Hours" wide><input id="s-hours" className={input} value={f.hours} onChange={set('hours')} placeholder="Tue–Sat 9–7, Sun 10–3, closed Mon" /></Field>
                <Field id="s-svc" title="Services and prices" hint="One per line is perfect. Skip prices you don't want shown." wide>
                  <textarea id="s-svc" rows={5} className={input} value={f.services} onChange={set('services')} placeholder={'Haircut — $30\nFade + beard — $40\nKids cut — $20'} />
                </Field>
                <Field id="s-book" title="Booking link you use now" hint="Booksy, Square, Vagaro, StyleSeat… Or write “set one up for me”."><input id="s-book" className={input} value={f.booking} onChange={set('booking')} /></Field>
                <Field id="s-web" title="Current website (if any)"><input id="s-web" className={input} value={f.website} onChange={set('website')} placeholder="yourshop.com or none" /></Field>
                <Field id="s-gbp" title="Google Maps listing" hint="Paste the link, or write “none” / “not sure”." wide><input id="s-gbp" className={input} value={f.gbp} onChange={set('gbp')} /></Field>
              </div>

              <h2 className="h3 mt-10 mb-2">Your shop&apos;s phone</h2>
              <p className="text-sm text-[var(--text-muted)] mb-6">For missed-call text-back. You keep your number. Calls you don&apos;t answer forward to a separate business number we set up, and the text is sent from that number.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="s-bph" title="Number customers call"><input id="s-bph" type="tel" inputMode="tel" className={input} value={f.bizphone} onChange={set('bizphone')} /></Field>
                <Field id="s-car" title="Phone company">
                  <select id="s-car" className={input + ' bg-[#0d1117]'} value={f.carrier} onChange={set('carrier')}><option value="">Choose…</option>{CARRIERS.map(c => <option key={c} value={c}>{c}</option>)}</select>
                </Field>
              </div>

              <h2 className="h3 mt-10 mb-2">For texting approval (optional)</h2>
              <p className="text-sm text-[var(--text-muted)] mb-6">Only needed if you want texting. U.S. phone carriers ask for these before a business can send texts, and they send a one-time code to the owner&apos;s cell. Skip it now and Gio will ask later.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="s-legal" title="Legal business name" hint="As it appears on your tax paperwork." wide><input id="s-legal" className={input} value={reg.legal} onChange={setR('legal')} /></Field>
                <Field id="s-ein" title="EIN" hint="No EIN? Write “sole proprietor”."><input id="s-ein" inputMode="numeric" autoComplete="off" className={input} value={reg.ein} onChange={setR('ein')} placeholder="12-3456789" /></Field>
                <Field id="s-ocell" title="Owner&apos;s cell" hint="For the carriers&apos; one-time code."><input id="s-ocell" type="tel" inputMode="tel" className={input} value={reg.ownercell} onChange={setR('ownercell')} /></Field>
              </div>

              <h2 className="h3 mt-10 mb-6">Look and voice</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="s-ph" title="Photos and logo" hint="Paste a Google Drive / Dropbox / Instagram link — or write “I'll text them”." wide><input id="s-ph" className={input} value={f.photos} onChange={set('photos')} /></Field>
                <Field id="s-voice" title="How should texts sound?" wide><input id="s-voice" className={input} value={f.voice} onChange={set('voice')} placeholder="Friendly and short, like I talk to my regulars" /></Field>
                <Field id="s-msg" title="Anything else?" wide><textarea id="s-msg" rows={3} className={input} value={f.message} onChange={set('message')} /></Field>
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                  <label htmlFor="s-url">Company website</label>
                  <input id="s-url" tabIndex={-1} autoComplete="off" value={f.company_url} onChange={set('company_url')} />
                </div>
              </div>

              <label className="mt-8 flex items-start gap-3 text-sm text-[var(--text-muted)] cursor-pointer">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-sky-500" checked={f.agree} onChange={set('agree')} />
                <span>I agree to the <Link href="/terms" className="text-brand-400 hover:underline">terms</Link> and <Link href="/privacy" className="text-brand-400 hover:underline">privacy policy</Link>, and I&apos;m OK with GR Scale texting me about my setup.</span>
              </label>

              {status === 'error' && (
                <div className="mt-4 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert"><AlertCircle className="h-4 w-4 shrink-0 mt-0.5" /> {err}</div>
              )}
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center mt-6 py-4 text-base disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : <>Send my setup info <ArrowRight className="h-4 w-4" /></>}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
