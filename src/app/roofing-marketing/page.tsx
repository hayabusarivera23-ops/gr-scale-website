import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CloudRain, Camera, ShieldCheck, MapPin, Star, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roofing Marketing: Get Found and Get the Job | GR Scale',
  description:
    'How roofing companies win storm-damage and replacement jobs online — fast websites, Google Business Profile, reviews, and free-inspection flows that make the phone ring.',
  alternates: { canonical: 'https://grscales.com/roofing-marketing' },
}

const FAQS = [
  {
    q: 'Do I need a website if most of my jobs come from referrals and door-knocking?',
    a: 'Referrals still check you out before they call — the first thing a referred homeowner does is Google your company name. If they find a dead template, a 2019 copyright footer, or nothing at all, some of those referrals quietly go to the roofer with the cleaner page. A fast site does not replace referrals; it stops you from losing them.',
  },
  {
    q: 'What should a roofing website include?',
    a: 'A call button and free-inspection form on the first screen, proof of license and insurance, real photos of your crews and finished roofs (not stock), your service area spelled out by city, storm-damage and insurance-claim help explained in plain language, and reviews where homeowners can see them. All of it has to work on a phone — that is where a homeowner with a leak is searching.',
  },
  {
    q: 'How much does a roofing website cost?',
    a: 'With us: a full build starts at $500 one-time, Google Business Profile optimization is $150 flat, and maintenance — hosting, updates, edits — is $99/mo. No contracts. One replacement job pays for the site many times over. Full breakdown on our pricing page.',
  },
]

const MUST_HAVES = [
  { icon: CloudRain, title: 'Storm-damage lead flow', text: 'After a storm, homeowners search with urgency. A clear "free inspection" path on the first screen captures that job before the out-of-town crews do.' },
  { icon: Smartphone, title: 'Built for the phone', text: 'A homeowner with a leak is searching from their kitchen, phone in hand. If your number takes three taps to find, they call the next roofer.' },
  { icon: ShieldCheck, title: 'License and insurance up front', text: 'Roofing is a trust purchase. License number, insurance, and warranty terms visible — not buried — separate you from the storm chasers.' },
  { icon: Camera, title: 'Your roofs, not stock photos', text: 'Before-and-after shots of real jobs sell the estimate better than any copy. Homeowners can tell a stock photo instantly.' },
  { icon: Star, title: 'Reviews doing the selling', text: 'A $15,000 decision gets researched. Pull your best Google reviews onto the page so the proof is there when they land.' },
  { icon: MapPin, title: 'Service area by city', text: 'Roofing is won town by town. Naming the cities you actually work tells both Google and the homeowner you are the local choice.' },
]

export default function RoofingMarketingPage() {
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
          <span className="badge mb-4">Roofing Marketing</span>
          <h1 className="h1 mb-4">Roofing Marketing That Makes the Phone Ring</h1>
          <p className="lead mb-8">
            Your crews do the work. Winning the job starts online — a fast site, your
            Google profile, reviews, and a free-inspection flow working together. We
            build it for roofers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="btn-primary px-8 py-4">
              Get Your Free Website Audit <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://gr-scale-demos.vercel.app/roofing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-8 py-4"
            >
              See a Live Roofing Site Build
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site max-w-3xl">
          <h2 className="h2 mb-4">Where roofing jobs actually come from now</h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            The highest-intent roofing lead is a homeowner searching &quot;roofer near
            me&quot; with water coming through the ceiling — or the day after a storm
            rolls through. That search shows a map with three companies, then websites.
            Strong reviews get you the look; what they find when they tap decides who
            gets the inspection.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Most roofing sites we audit are dead templates: broken images, demo phone
            numbers still wired to buttons, footers that say 2019. The company with a
            clean page, real job photos, and a working call button wins the homeowner.
            Our{' '}
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
            <h2 className="h2 mb-4">What a roofing website needs to win the job</h2>
            <p className="lead">Six things we check on every roofing site we audit.</p>
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
            See exactly what your site could look like: our{' '}
            <a
              href="https://gr-scale-demos.vercel.app/roofing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition"
            >
              live roofing build
            </a>{' '}
            is a real, scrollable site with a storm-damage lead flow and free-inspection
            form — not a mockup. And for a working trades client on their own domain,
            Melo Air is a Tampa HVAC company we built end to end at{' '}
            <a
              href="https://meloair.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition"
            >
              meloair.net
            </a>
            . Browse all{' '}
            <Link href="/demos" className="text-brand-400 hover:text-brand-300 transition">
              13 local-service demo sites
            </Link>{' '}
            to see your exact niche.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Pricing is flat and public: builds from $500, Google Business Profile
            optimization for $150, maintenance for $99/mo. No contracts. See the{' '}
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
            Roofing Marketing FAQ
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
          <h2 className="h2 mb-4">Find Out What Your Roofing Company Looks Like Online</h2>
          <p className="lead mb-8">
            Free 20-minute audit of your website, lead flow, and Google presence. We
            show you exactly what is costing you jobs — the findings are yours either
            way.
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
