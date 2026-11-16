import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, CreditCard } from 'lucide-react'
import { SITE, PRICE, AGENTS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Pricing — GR Scale | AI Front Desk for Local Businesses',
  description: `Front Desk Bundle: website + booking, missed-call text-back and Review Getter for $${PRICE.founding}/mo founding price + $${PRICE.setup} setup. Free demo first. No contracts.`,
}

const BUNDLE = [
  'Website with online booking',
  'Missed-call text-back',
  'Review Getter (Google reviews by text)',
  'Setup done for you in 48 hours',
  'Edits and support by text',
  'Month to month — cancel anytime',
]

const PAY_STEPS = [
  'We build your free demo first.',
  'You like it → you get two links by text: the setup fee and the monthly plan.',
  'We go live within 48 hours of payment.',
]

export default function PricingPage() {
  const canPay = !!(SITE.stripeSetup && SITE.stripeMonthly)
  return (
    <div className="pt-24">
      <section className="section pb-0">
        <div className="container-site text-center max-w-3xl">
          <span className="badge mb-4">Pricing</span>
          <h1 className="h1 mb-4">Simple prices. Free demo first.</h1>
          <p className="lead">One setup fee, one monthly price. No contracts. You see your demo before you pay anything.</p>
        </div>
      </section>

      {/* Bundle */}
      <section className="section">
        <div className="container-site max-w-4xl">
          <div className="relative rounded-2xl border border-brand-500/60 bg-gradient-to-b from-brand-500/10 to-transparent shadow-[0_0_40px_rgba(14,165,233,0.15)] p-8 md:p-10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="badge">Founding price · first {PRICE.foundingSpots} businesses</span></div>
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <p className="text-sm font-semibold text-[var(--text-dim)] uppercase tracking-widest mb-2">Front Desk Bundle</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-extrabold text-white">${PRICE.founding}</span>
                  <span className="text-[var(--text-muted)]">/month</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] mb-6">
                  + ${PRICE.setup} one-time setup. Regular price ${PRICE.bundle}/mo — founding businesses keep ${PRICE.founding}/mo for as long as they stay.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/book?plan=Front%20Desk%20Bundle" className="btn-primary justify-center px-6 py-3">Get a free demo <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {BUNDLE.map(t => (
                  <li key={t} className="flex items-center gap-3 text-sm text-white/90"><CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" /> {t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Single agents */}
      <section className="section pt-0">
        <div className="container-site max-w-5xl">
          <h2 className="h2 text-center mb-3">Or pick single agents</h2>
          <p className="lead text-center mb-10">Start with one. Add more any time.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {AGENTS.map(a => (
              <div key={a.id} className="card flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-white">{a.name}</h3>
                  <span className="text-sm font-bold text-brand-300 whitespace-nowrap">{a.price}</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">{a.does}</p>
                <Link href={`/book?plan=${encodeURIComponent(a.name)}`} className="mt-5 text-sm font-semibold text-brand-400 hover:text-brand-300 transition inline-flex items-center gap-1">
                  Get a free demo of this <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How paying works */}
      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-3xl">
          <h2 className="h2 text-center mb-8">How paying works</h2>
          <ol className="flex flex-col gap-4">
            {PAY_STEPS.map((t, i) => (
              <li key={t} className="card flex items-center gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-300 font-bold">{i + 1}</span>
                <span className="text-sm text-white/90">{t}</span>
              </li>
            ))}
          </ol>
          {canPay && (
            <div className="card mt-8 text-center">
              <CreditCard className="h-6 w-6 text-brand-400 mx-auto mb-3" />
              <p className="text-sm text-[var(--text-muted)] mb-4">Already saw your demo and ready to start? Pay securely with Stripe:</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={SITE.stripeSetup} className="btn-primary justify-center px-6 py-3" rel="noopener">Pay ${PRICE.setup} setup</a>
                <a href={SITE.stripeMonthly} className="btn-ghost justify-center px-6 py-3" rel="noopener">Start ${PRICE.founding}/mo plan</a>
              </div>
            </div>
          )}
          <p className="text-center text-sm text-[var(--text-dim)] mt-8">
            All prices in USD. Month to month — cancel anytime with 14 days&apos; notice. Questions?{' '}
            <Link href="/contact" className="text-brand-400 hover:text-brand-300 transition">Contact us</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
