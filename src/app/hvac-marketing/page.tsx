import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, PhoneCall, MapPin, Star, Gauge, Wrench, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC Marketing: Get More Calls From Google | GR Scale',
  description:
    'How HVAC companies get seen, trusted, and called — websites, Google Business Profile, reviews, and local SEO that actually book jobs.',
  alternates: { canonical: 'https://grscales.com/hvac-marketing' },
}

const FAQS = [
  {
    q: 'How do HVAC companies get more calls from Google?',
    a: 'Three things working together: a Google Business Profile that is fully filled out (photos, services, reviews, weekly posts), a fast mobile website with a tap-to-call button above the fold, and service pages that match what people actually search — "AC repair near me", "emergency HVAC". Most HVAC companies have great reviews but a site that leaks the call. Fixing that gap is usually the fastest win.',
  },
  {
    q: 'What should an HVAC website include?',
    a: 'A phone number you can tap from the first screen, your services listed plainly (repair, install, maintenance), your service area, real reviews, financing info if you offer it, and a quote request form that works on a phone. It should load in about a second. If a homeowner with a broken AC has to pinch-zoom or hunt for your number, they call the next company on the list.',
  },
  {
    q: 'How much does HVAC marketing cost?',
    a: 'With us: a website build starts at $500 one-time, Google Business Profile optimization is $150 flat, local SEO is from $200/mo, and maintenance is $99/mo. No contracts, no agency retainers. One booked job typically covers the build. Full breakdown on our pricing page.',
  },
]

const MUST_HAVES = [
  { icon: PhoneCall, title: 'Tap-to-call above the fold', text: 'A homeowner with a dead AC is not filling out a long form. Your number, one tap, first screen.' },
  { icon: Gauge, title: 'Loads in about a second', text: 'Every extra second of load time costs you jobs. Fast sites win the emergency call.' },
  { icon: Wrench, title: 'Services spelled out', text: 'Repair, install, maintenance, financing — plainly listed so Google and customers both understand you.' },
  { icon: MapPin, title: 'Service area on the page', text: 'Name your cities. Google matches you to local searches; customers confirm you cover them.' },
  { icon: Star, title: 'Reviews where people can see them', text: 'You earned the 4.9 stars — show them on the site, not just on Google.' },
  { icon: ShieldCheck, title: 'A quote form that works on a phone', text: 'Short, mobile-first, and actually delivers the lead to your inbox.' },
]

export default function HvacMarketingPage() {
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
          <span className="badge mb-4">HVAC Marketing</span>
          <h1 className="h1 mb-4">HVAC Marketing That Turns Searches Into Booked Calls</h1>
          <p className="lead mb-8">
            When the AC dies, homeowners search Google and call whoever shows up and looks
            legit. Getting seen, trusted, and called is a system — website, Google Business
            Profile, reviews, and local SEO working together. We build it for HVAC companies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/free-website-audit" className="btn-primary px-8 py-4">
              Get Your Free Website Audit <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://meloair.net"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-8 py-4"
            >
              See a Real HVAC Client Site
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site max-w-3xl">
          <h2 className="h2 mb-4">Where HVAC customers actually come from</h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            Referrals still matter, but the highest-intent HVAC customer is the one searching
            &quot;AC repair near me&quot; at 9 PM with a broken system. That search shows a map with
            three businesses, then websites. Two things decide who gets that call: whether your
            Google Business Profile shows up in the map pack, and whether your website makes
            calling you feel safe and easy.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Most HVAC companies we audit have one half working — solid reviews with a site
            from 2015, or a decent site with an abandoned Google profile. The call goes to the
            competitor with both. Our{' '}
            <Link href="/services" className="text-brand-400 hover:text-brand-300 transition">
              website and local SEO services
            </Link>{' '}
            exist to close that gap.
          </p>
        </div>
      </section>

      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="h2 mb-4">What an HVAC website needs to book jobs</h2>
            <p className="lead">Six things we check on every HVAC site we audit.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MUST_HAVES.map(item => (
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
          <h2 className="h2 mb-4">Proof, not promises</h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            Melo Air is a working Tampa HVAC company. We built their complete website —
            services, financing, and a quote flow designed to turn visitors into calls — live
            on their own domain at{' '}
            <a
              href="https://meloair.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition"
            >
              meloair.net
            </a>
            . Want to see what your site could look like first? Browse our{' '}
            <Link href="/demos" className="text-brand-400 hover:text-brand-300 transition">
              HVAC and home-service demo sites
            </Link>{' '}
            — real, scrollable builds for your exact niche.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Pricing is flat and public: builds from $500, Google Business Profile optimization
            for $150, local SEO from $200/mo. No contracts. See the{' '}
            <Link href="/pricing" className="text-brand-400 hover:text-brand-300 transition">
              full pricing breakdown
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-3xl">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)] mb-4">
            HVAC Marketing FAQ
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
          <h2 className="h2 mb-4">Find Out What Your Site Is Costing You</h2>
          <p className="lead mb-8">
            Free 20-minute audit of your website and Google presence. We show you exactly
            what is losing you calls — the findings are yours either way.
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
