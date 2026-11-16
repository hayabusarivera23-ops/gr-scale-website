'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Sparkles, Rocket, ShieldCheck, AlertCircle, PhoneCall, ArrowRight } from 'lucide-react'
import { submitLead } from '@/lib/submitLead'
import { SITE, PRICE, AGENTS } from '@/lib/site'

const INDUSTRIES = [
  'Barbershop', 'Hair / Nail Salon', 'HVAC', 'Lawn Care', 'Auto Detailing', 'Plumbing',
  'Pressure Washing', 'Cleaning', 'Pet Grooming', 'Roofing', 'Electrical', 'Other',
]

const PLANS = ['Front Desk Bundle', ...AGENTS.map(a => a.name), 'Not sure yet']

const STEPS = [
  { icon: Sparkles, title: '1. Tell us about your business', desc: 'Takes 60 seconds.' },
  { icon: Rocket, title: '2. We build your free demo', desc: 'Usually within 1–2 days. We text you the link.' },
  { icon: ShieldCheck, title: '3. Like it? Website live in 48 hours', desc: 'Don’t like it? You pay nothing.' },
]

const input = 'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-[var(--text-dim)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition'
const label = 'text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block'

export default function BookPage() {
  return (
    <Suspense fallback={null}>
      <BookInner />
    </Suspense>
  )
}

function BookInner() {
  const params = useSearchParams()
  const niche = params.get('niche') || ''
  const plan = params.get('plan') || ''
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({
    name: '', business: '', phone: '', email: '',
    industry: INDUSTRIES.includes(niche) ? niche : '',
    plan: PLANS.includes(plan) ? plan : 'Front Desk Bundle',
    best_time: '', message: '', company_url: '',
  })
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      await submitLead({ source: 'Free demo form', ...form })
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="pt-24">
      <section className="section pb-8">
        <div className="container-site text-center max-w-2xl">
          <span className="badge mb-4">Free demo · no card</span>
          <h1 className="h1 mb-4">Get your free demo</h1>
          <p className="lead">
            We build a demo for your business first — your name, your services, your booking link. You only pay if you love it.
          </p>
        </div>
      </section>

      <section className="pb-10">
        <div className="container-site max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {STEPS.map(s => {
              const Icon = s.icon
              return (
                <div key={s.title} className="card py-4 px-5 flex sm:block items-center gap-3">
                  <Icon className="h-5 w-5 text-brand-400 shrink-0 sm:mb-2" />
                  <div>
                    <p className="text-sm font-bold text-white">{s.title}</p>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-0.5">{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-site max-w-3xl">
          {status === 'sent' ? (
            <div className="card flex flex-col items-center text-center py-16 gap-4" role="status">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <h2 className="h3 text-white">Got it — your demo is on the way.</h2>
              <p className="text-sm text-[var(--text-muted)] max-w-sm leading-relaxed">
                Gio will text or call you within one business day{form.best_time ? ` (you said: ${form.best_time})` : ''}. Keep an eye on your phone.
              </p>
              <a href="/demos" className="text-sm text-brand-400 hover:underline">See demo sites while you wait →</a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card" noValidate={false}>
              <h2 className="h3 mb-6">Tell us about your business</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-name" className={label}>Your name *</label>
                  <input id="f-name" required autoComplete="name" type="text" placeholder="Mike" value={form.name} onChange={set('name')} className={input} />
                </div>
                <div>
                  <label htmlFor="f-biz" className={label}>Business name *</label>
                  <input id="f-biz" required autoComplete="organization" type="text" placeholder="Mike's Barbershop" value={form.business} onChange={set('business')} className={input} />
                </div>
                <div>
                  <label htmlFor="f-phone" className={label}>Cell phone *</label>
                  <input id="f-phone" required autoComplete="tel" type="tel" inputMode="tel" placeholder="(813) 555-1234" value={form.phone} onChange={set('phone')} className={input} />
                </div>
                <div>
                  <label htmlFor="f-email" className={label}>Email</label>
                  <input id="f-email" autoComplete="email" type="email" placeholder="you@yourshop.com" value={form.email} onChange={set('email')} className={input} />
                </div>
                <div>
                  <label htmlFor="f-ind" className={label}>Type of business *</label>
                  <select id="f-ind" required value={form.industry} onChange={set('industry')} className={input + ' bg-[#0d1117]'}>
                    <option value="">Choose…</option>
                    {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="f-plan" className={label}>Interested in</label>
                  <select id="f-plan" value={form.plan} onChange={set('plan')} className={input + ' bg-[#0d1117]'}>
                    {PLANS.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="f-time" className={label}>Best time to reach you</label>
                  <input id="f-time" type="text" placeholder="e.g. weekdays after 6 PM" value={form.best_time} onChange={set('best_time')} className={input} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="f-msg" className={label}>What&apos;s your biggest headache right now?</label>
                  <textarea id="f-msg" rows={3} placeholder="e.g. I miss calls while I'm cutting" value={form.message} onChange={set('message')} className={input} />
                </div>
                {/* honeypot: hidden from people, bots fill it */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                  <label htmlFor="f-url">Company website</label>
                  <input id="f-url" tabIndex={-1} autoComplete="off" type="text" value={form.company_url} onChange={set('company_url')} />
                </div>
              </div>

              {status === 'error' && (
                <div className="mt-4 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" /> {errorMsg}
                </div>
              )}

              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center mt-6 py-4 text-base disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : <>Get my free demo <ArrowRight className="h-4 w-4" /></>}
              </button>
              <p className="text-xs text-[var(--text-dim)] text-center mt-3">
                Free. No card. Founding price ${PRICE.founding}/mo for the first {PRICE.foundingSpots} businesses.
              </p>
            </form>
          )}

          {SITE.phone && (
            <div className="card mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gradient-to-br from-brand-500/10 to-transparent border-brand-500/20">
              <p className="text-sm text-[var(--text-muted)]">Rather talk? Our AI receptionist answers 24/7 and takes your info.</p>
              <a href={`tel:${SITE.phone.tel}`} className="btn-ghost px-5 py-2.5 text-sm whitespace-nowrap"><PhoneCall className="h-4 w-4" /> {SITE.phone.pretty}</a>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
