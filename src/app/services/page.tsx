import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, CalendarCheck, MapPin, MessageSquareText, Bot, Star } from 'lucide-react'
import { AGENTS, STAGES, PRICE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services — GR Scale | Get Found, Get Booked, Get Reviews',
  description: 'Website with online booking, Google Business Profile setup, missed-call text-back, Review Getter and an early-access AI receptionist for local businesses in Tampa, FL.',
  alternates: { canonical: '/services' },
}

const ICONS: Record<string, typeof Bot> = { website: CalendarCheck, google: MapPin, textback: MessageSquareText, reviews: Star, receptionist: Bot }

const HOW = [
  { t: 'Free demo', d: 'We build a demo for your business first. You see it before you pay.' },
  { t: 'Setup form', d: 'You say yes, pay the setup, and fill in a 5-minute form: services, prices, hours, photos.' },
  { t: 'We build it', d: 'Website within 48 hours after your setup fee is paid and your setup form, with photos, is in, Google profile in about 3 days, automatic texting after carrier approval.' },
  { t: 'It runs', d: 'New bookings, missed callers and reviews come in. Edits and support by text.' },
]

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="section pb-6">
        <div className="container-site text-center max-w-3xl">
          <span className="badge mb-4">Services</span>
          <h1 className="h1 mb-4">Everything your business needs to get found, booked and reviewed.</h1>
          <p className="lead">Pick one service or get the Front Desk Bundle. Every service starts with a free demo, and there are no contracts.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {AGENTS.map(a => (
              <a key={a.id} href={`#${a.id}`} className="inline-flex min-h-[44px] items-center rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white/90 hover:border-brand-500/50 transition">{a.name}</a>
            ))}
          </div>
        </div>
      </section>

      {STAGES.map(st => (
        <section key={st.id} className="section pt-8">
          <div className="container-site max-w-5xl">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-1">Step {STAGES.indexOf(st) + 1}</p>
              <h2 className="h2">{st.title}</h2>
              <p className="text-[var(--text-muted)] mt-1">{st.line}</p>
            </div>
            <div className="flex flex-col gap-6">
              {AGENTS.filter(a => a.stage === st.id).map(a => {
                const Icon = ICONS[a.id] || Bot
                return (
                  <article key={a.id} id={a.id} className="card scroll-mt-28">
                    <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/20"><Icon className="h-5 w-5 text-brand-400" /></div>
                          <h3 className="text-xl font-bold text-white">{a.name}</h3>
                          {a.status === 'early' && <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-full px-2.5 py-1">Early access</span>}
                        </div>
                        <p className="text-sm font-semibold text-brand-300 mb-2">{a.short}</p>
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed">{a.does}</p>
                        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                          <span className="font-bold text-white">{a.price}</span>
                          <span className="flex items-center gap-1.5 text-[var(--text-dim)]"><Clock className="h-4 w-4" /> {a.setup}</span>
                          {a.bundle && <span className="text-emerald-400 font-semibold">Included in the bundle</span>}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-3">What you get</p>
                        <ul className="flex flex-col gap-2.5">
                          {a.includes.map(t => (
                            <li key={t} className="flex items-start gap-2.5 text-sm text-white/90"><CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" /> {t}</li>
                          ))}
                        </ul>
                        <Link href={`/book?plan=${encodeURIComponent(a.name)}`} className="btn-primary mt-6 w-full justify-center py-3">
                          {a.status === 'early' ? 'Join early access' : 'Get a free demo'} <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link href={`/agents/${a.slug}`} aria-label={`How ${a.name} works, limits and FAQ`} className="mt-2 flex min-h-[44px] items-center justify-center text-sm font-semibold text-brand-400 hover:text-brand-300 transition">
                          How it works, limits and FAQ
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-5xl">
          <h2 className="h2 text-center mb-8">How it works</h2>
          <ol className="grid gap-4 md:grid-cols-4">
            {HOW.map((h, i) => (
              <li key={h.t} className="card">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/15 text-brand-300 font-bold mb-3">{i + 1}</span>
                <p className="font-bold text-white mb-1">{h.t}</p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{h.d}</p>
              </li>
            ))}
          </ol>
          <div className="card mt-8 text-center border-brand-500/30">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-2">Front Desk Bundle</p>
            <p className="text-white text-lg mb-1">Website + Google profile + text-back + Review Getter</p>
            <p className="text-3xl font-extrabold text-white">${PRICE.founding}<span className="text-base text-[var(--text-muted)] font-normal">/mo</span> <span className="text-base text-[var(--text-muted)] font-normal">+ ${PRICE.setup} setup</span></p>
            <p className="text-xs text-[var(--text-dim)] mt-1">Founding price for the first {PRICE.foundingSpots} businesses (then ${PRICE.bundle}/mo)</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/book?plan=Front%20Desk%20Bundle" className="btn-primary justify-center px-6 py-3">Get a free demo <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/pricing" className="btn-ghost justify-center px-6 py-3">All prices</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
