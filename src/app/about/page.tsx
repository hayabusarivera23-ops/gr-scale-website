import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Zap, Search, Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — GR Scale | Built in Tampa by Gio Rivera',
  description: 'GR Scale is a one-person Tampa business that sets up websites, booking, Google profiles, missed-call text-back and review requests for local service businesses.',
  alternates: { canonical: '/about' },
}

const VALUES = [
  {
    icon: Zap,
    title: 'Speed Over Everything',
    desc: 'Your website goes live within 48 hours after your setup fee is paid and your setup form, with photos, is in. Fast replies and quick edits by text, from the person who built it.',
  },
  {
    icon: Target,
    title: 'Built to Get the Call',
    desc: "I don't build pretty websites for a portfolio. Every layout, headline and button is there to make it easy to call or book you. If it doesn't help with that, it doesn't go in.",
  },
  {
    icon: Search,
    title: 'Built to Be Found',
    desc: 'A website nobody sees is a business card in a drawer. Every site ships mobile-first and fast-loading, with the page structure Google reads. I can\'t promise a ranking.',
  },
  {
    icon: Users,
    title: 'Local Service Businesses Only',
    desc: 'GR Scale is built for local service businesses: barbershops first, plus HVAC, plumbing, roofing, landscaping and similar trades. It is a new business, so you would be one of the first customers.',
  },
]

const STATS = [
  { number: '2',     label: 'Sites built for family businesses' },
  { number: '13',    label: 'Industry demo sites built'         },
  { number: '48h',   label: 'To live, after fee + form with photos' },
  { number: '100%',  label: 'Mobile responsive'                 },
]

const WHY_DIFFERENT = [
  'No agency overhead — you pay for the work, not a floor of account managers',
  'You see a demo for your exact niche before you pay anything',
  'One person you can text, from demo to launch and after',
  'Sites built so Google and customers can read them, not just look good',
  'No long-term contracts on design work',
  'Edits and support by text after launch',
]

const NICHES = [
  'HVAC', 'Plumbing', 'Roofing', 'Barbershops',
  'Pressure Washing', 'Landscaping', 'Auto Repair', 'Electricians',
  'Pest Control', 'Pool Service',
]

export default function AboutPage() {
  return (
    <div className="pt-24">

      {/* ── HEADER ── */}
      <section className="section pb-0">
        <div className="container-site max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <span className="badge mb-4">About</span>
              <h1 className="h1 mb-6">
                Websites That{' '}
                <span className="text-gradient">Get You Customers.</span>
              </h1>

              <p className="text-[var(--text-muted)] leading-relaxed mb-5">
                I&apos;m Gio Rivera. I&apos;m 18, I live in Tampa, and I started GR Scale after building websites for two businesses in my own family: my stepdad&apos;s AC company and my dad&apos;s mobile barber business. GR Scale is new and I run it myself.
              </p>

              <p className="text-[var(--text-muted)] leading-relaxed mb-5">
                When someone searches for your service, they make a decision in seconds. If your site is slow, outdated, broken on their phone — or doesn&apos;t exist — that customer calls the next name on the list. Your reputation never even gets a chance to speak.
              </p>

              <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                So that&apos;s the job here: make it easy for the person searching to find you, call you and book you. Fast, modern, mobile-first websites for local service businesses, with online booking, your Google profile and review requests set up for you.
              </p>

              <Link href="/book" className="btn-primary">
                Get a Free Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right column: stats + sites built */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                {STATS.map(s => (
                  <div key={s.label} className="card text-center">
                    <p className="stat-number text-3xl font-extrabold text-brand-400 mb-1">{s.number}</p>
                    <p className="text-xs text-[var(--text-muted)]">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Sites built callout */}
              <div className="card bg-gradient-to-br from-brand-500/15 to-transparent border-brand-500/20">
                <p className="text-sm font-semibold text-white mb-3">Sites I&apos;ve built (both for family businesses, not paying customers):</p>
                <div className="flex flex-col gap-2">
                  <a href="https://meloair.net" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition">
                    <ArrowRight className="h-3.5 w-3.5" /> meloair.net — my stepdad&apos;s Tampa AC company
                  </a>
                  <a href="https://lexthebarber.com" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition">
                    <ArrowRight className="h-3.5 w-3.5" /> lexthebarber.com — my dad, a mobile barber in Tampa Bay
                  </a>
                  <Link href="/demos"
                     className="flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition">
                    <ArrowRight className="h-3.5 w-3.5" /> 13 industry demos — see your niche
                  </Link>
                </div>
              </div>

              {/* CTA card */}
              <div className="card">
                <p className="text-sm font-semibold text-white mb-2">Ready to grow your business online?</p>
                <p className="text-xs text-[var(--text-muted)] mb-4 leading-relaxed">
                  We build a free demo for your business first. You only pay if you love it.
                </p>
                <Link href="/book" className="btn-primary text-sm py-2 px-4 justify-center">
                  Get a Free Demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section bg-[#0d1117]">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="badge mb-4">How We Work</span>
            <h2 className="h2 mb-4">What Makes GR Scale Different</h2>
            <p className="lead max-w-2xl mx-auto">
              GR Scale is not a big agency with a project manager who doesn&apos;t know your name. It&apos;s one person, and the aim is simple: make it easier for customers to find you and book you.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map(v => {
              const Icon = v.icon
              return (
                <div key={v.title} className="card">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
                    <Icon className="h-5 w-5 text-brand-400" />
                  </div>
                  <h3 className="h3 mb-2">{v.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY DIFFERENT ── */}
      <section className="section">
        <div className="container-site max-w-3xl">
          <div className="text-center mb-12">
            <span className="badge mb-4">The Difference</span>
            <h2 className="h2 mb-4">How This Differs From a Big Agency</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {WHY_DIFFERENT.map(item => (
              <div key={item} className="flex items-start gap-3 card py-4">
                <CheckCircle className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-3xl text-center">
          <span className="badge mb-4">Who We Work With</span>
          <h2 className="h2 mb-6">Local Service Businesses, Starting in Tampa Bay</h2>
          <p className="lead mb-10">
            Based in Tampa and starting with Tampa Bay shops. Everything is set up online, so a service business elsewhere in the U.S. can ask too.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {NICHES.map(niche => (
              <div key={niche} className="card text-center py-3 px-2">
                <p className="text-xs font-medium text-white">{niche}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[var(--text-muted)]">
            Don&apos;t see your niche?{' '}
            <Link href="/contact" className="text-brand-400 hover:text-brand-300 transition">
              Reach out and ask.
            </Link>
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container-site max-w-2xl text-center">
          <h2 className="h2 mb-4">Let&apos;s Talk About Your Business</h2>
          <p className="lead mb-8">
            Tell us about your business and we&apos;ll build your free demo — no charge, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="btn-primary px-8 py-4 text-base">
              Get a Free Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost px-8 py-4 text-base">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
