import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Gauge, MapPin, Phone, Search, Smartphone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free Website Audit for Local Businesses | GR Scale',
  description:
    'A free 20-minute audit of your website, Google Business Profile, reviews, and booking flow. We show you exactly what is costing you customers — no charge, no obligation.',
  alternates: { canonical: 'https://grscales.com/free-website-audit' },
}

const FAQS = [
  {
    q: 'What does the free website audit actually check?',
    a: 'Six things: how fast your site loads, how it looks and works on a phone, whether Google can find and rank you locally, the state of your Google Business Profile, how your reviews stack up against nearby competitors, and whether a visitor can call or book you in one tap. You get the findings in plain language — what is fine, what is broken, and what it is costing you.',
  },
  {
    q: 'Is it really free? What is the catch?',
    a: 'Really free — no card, no obligation, and the findings are yours either way. The "catch" is simple and honest: if the audit shows problems worth fixing, we would like to be the ones who fix them. If your site checks out, we tell you that too and you lose nothing but 20 minutes.',
  },
  {
    q: 'I do not have a website yet. Is an audit still useful?',
    a: 'Yes — the audit covers your whole online presence, not just a site. We look at what shows up when someone searches your business, your Google Business Profile, and what competitors in your area are doing. You leave knowing exactly what a first website needs to do for you, and what it should cost.',
  },
  {
    q: 'How long does it take to get my results?',
    a: 'We do the homework before the call, then walk you through everything in one free 20-minute call — usually within a few days of booking. No slide decks, no jargon: a short list of what to fix, in order of what it is costing you.',
  },
]

const CHECKS = [
  { icon: Gauge, title: 'Speed', text: 'Every extra second of load time costs you visitors. We measure your real load speed and show you where it stands.' },
  { icon: Smartphone, title: 'Mobile experience', text: 'Most customers find you on a phone. We check whether yours can read the menu, see prices, and book without pinch-zooming.' },
  { icon: Search, title: 'Local search visibility', text: 'What actually shows up when someone in your area searches for what you do — and who is showing up ahead of you.' },
  { icon: MapPin, title: 'Google Business Profile', text: 'Photos, hours, categories, posts. A weak profile hands the map-pack spot to a competitor. We grade yours honestly.' },
  { icon: Star, title: 'Reviews', text: 'Count, rating, and recency versus the shops around you — and whether your site puts them where visitors can see them.' },
  { icon: Phone, title: 'Call and booking flow', text: 'From landing on your site to calling or booking: how many taps, what breaks, and what makes people give up.' },
]

export default function FreeWebsiteAuditPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="section pb-0">
        <div className="container-site text-center max-w-3xl">
          <span className="badge mb-4">Free Website Audit</span>
          <h1 className="h1 mb-4">Find Out What Your Website Is Costing You</h1>
          <p className="lead mb-8">
            A free 20-minute audit of your website, Google presence, reviews, and
            booking flow. We show you exactly where customers are slipping away —
            the findings are yours either way, fix them with anyone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="btn-primary px-8 py-4">
              Book Your Free Audit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/demos" className="btn-ghost px-8 py-4">
              See Our Work First
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site max-w-3xl">
          <h2 className="h2 mb-4">Why start with an audit</h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            Most local businesses do not have a traffic problem — they have a leak.
            People search, find them, and quietly leave: the site takes too long to
            load, the phone number is buried, the Google profile shows two photos
            from 2021. Each of those leaks costs real jobs, and none of them are
            visible from the inside.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            The audit finds the leaks and puts a priority on each one, so you fix
            what matters first instead of guessing. If the answer is a rebuild, our{' '}
            <Link href="/services" className="text-brand-400 hover:text-brand-300 transition">
              services
            </Link>{' '}
            and{' '}
            <Link href="/pricing" className="text-brand-400 hover:text-brand-300 transition">
              flat pricing
            </Link>{' '}
            are public. If it is a $150 profile fix, we tell you that instead.
          </p>
        </div>
      </section>

      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="h2 mb-4">The six checks in every audit</h2>
            <p className="lead">Same checklist we run on every client site before we touch it.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHECKS.map(item => (
              <div key={item.title} className="card">
                <item.icon className="h-5 w-5 text-brand-400 mb-3" />
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site max-w-3xl">
          <h2 className="h2 mb-4">Audited by people who build</h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            This is not an automated PDF report. The same team that built{' '}
            <a
              href="https://meloair.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition"
            >
              meloair.net
            </a>{' '}
            for a working Tampa HVAC company and{' '}
            <a
              href="https://lexthebarber.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition"
            >
              lexthebarber.com
            </a>{' '}
            for an Orlando barber reads your audit — so every finding comes with
            what it would actually take to fix it.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Want to see the standard first? Browse our{' '}
            <Link href="/demos" className="text-brand-400 hover:text-brand-300 transition">
              live demo sites
            </Link>{' '}
            for your exact niche.
          </p>
        </div>
      </section>

      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-3xl">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)] mb-4">
            Free Audit FAQ
          </h2>
          <div className="flex flex-col gap-3">
            {FAQS.map(item => (
              <div key={item.q} className="card">
                <h3 className="text-sm font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site text-center max-w-2xl">
          <h2 className="h2 mb-4">20 Minutes. Zero Cost. Full Picture.</h2>
          <p className="lead mb-8">
            Book the call, and we do the homework before you show up. Worst case,
            you confirm everything is fine — best case, you find the leak that has
            been costing you customers all year.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="btn-primary px-8 py-4">
              Book Your Free Audit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost px-8 py-4">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
