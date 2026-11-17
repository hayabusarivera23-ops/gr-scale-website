'use client'

/**
 * Sticky mobile action bar — most prospects open this site from a text
 * message on their phone. After they scroll past the hero, a slim fixed
 * bottom bar offers the only two actions that matter: Call (AI line, when set) and Free Demo.
 * Dismissible; stays dismissed for the session. Mobile only (md:hidden).
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Phone, X } from 'lucide-react'
import { SITE } from '@/lib/site'

export default function MobileActionBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(true) // start hidden until mount check

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem('gr-actionbar-dismissed')) return
    } catch { /* private mode */ }
    setDismissed(false)
    const onScroll = () => setVisible(window.scrollY > 560)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function dismiss() {
    setDismissed(true)
    try { window.sessionStorage.setItem('gr-actionbar-dismissed', '1') } catch { /* private mode */ }
  }

  if (dismissed) return null

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 px-3 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-[120%]'
      }`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      aria-hidden={!visible}
    >
      <div className="mx-auto max-w-md flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0d1117]/95 backdrop-blur p-2 shadow-[0_-8px_32px_rgba(0,0,0,0.5)]">
        {SITE.phone && (
          <a href={`tel:${SITE.phone.tel}`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-bold text-white/90 hover:bg-white/5 transition" tabIndex={visible ? 0 : -1}>
            <Phone className="h-4 w-4 text-brand-400" /> Call
          </a>
        )}
        <Link href="/book"
          className="flex-[1.5] inline-flex items-center justify-center gap-2 rounded-xl bg-[#0279b8] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/25" tabIndex={visible ? 0 : -1}>
          Get a free demo
        </Link>
        <button onClick={dismiss} aria-label="Dismiss action bar" tabIndex={visible ? 0 : -1}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-zinc-400 hover:text-zinc-300 hover:bg-white/5 transition shrink-0">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
