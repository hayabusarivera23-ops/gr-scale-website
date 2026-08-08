import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Gauge, Scissors, MapPin, Star, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Barbershop Websites: Get Found and Booked | GR Scale',
  description:
    'How barbershops get seen, trusted, and booked — fast websites, Google Business Profile, reviews, and booking links that fill chairs. Real client work live.',
  alternates: { canonical: 'https://grscales.com/barbershop-websites' },
}

const FAQS = [
  {
    q: 'Do I need a website if I already use Booksy or Instagram?',
    a: 'Booksy takes the booking and Instagram shows your cuts — but neither one shows up well when someone searches "barber near me" on Google. A one-page site ties it together: your name, your work, your prices, and one big book button, all on a page Google can rank. Your Booksy link stays exactly where it is; the site just sends it more people.',
  },
  {
    q: 'What should a barbershop website include?',
    a: 'A book-now button on the first screen, your service menu with real prices, photos of your actual cuts (not stock photos), your hours and location with a tap-to-map link, and your reviews where people can see them. It has to look right on a phone first — that is where almost every client will find you.',
  },
  {
    q: 'How much does a barbershop website cost?',
    a: 'With us: a full build starts at $500 one-time, Google Business Profile optimization is $150 flat, and maintenance — hosting, updates, edits — is $99/mo. No contracts. A couple of new regulars typically covers the build. Full breakdown on our pricing page.',
  },
]

const MUST_HAVES = [
  { icon: Calendar, title: 'Book button above the fold', text: 'Someone who found you at 10 PM wants the next open slot. One tap to your Booksy, Squire, or booking page — first screen.' },
  { icon: Smartphone, title: 'Built for the phone', text: 'Nearly every client finds a barber on their phone. If they have to pinch-zoom your menu, they book the next shop.' },
  { icon: Scissors, title: 'Service menu with real prices', text: 'Cuts, fades, beard work, kids — listed plainly with prices. No guessing, no DM-for-price.' },
  { icon: Star, title: 'Your cuts, not stock photos', text: 'A gallery of your actual work sells the chair better than any copy. Fresh photos, front and center.' },
  { icon: MapPin, title: 'Hours and location, one tap', text: 'Address that opens the map, hours that match your Google profile, parking note if it matters.' },
  { icon: Gauge, title: 'Loads in about a second', text: 'A slow site feels like a closed shop. Fast pages win the walk-in decision.' },
]

export default function BarbershopWebsitesPage() {
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
          <span className="badge mb-4">Barbershop Websites</span>
          <h1 className="h1 mb-4">A Barbershop Website That Fills Chairs</h1>
          <p className="lead mb-8">
            Your cuts bring people back. Getting them in the chair the first time is a
            system — a fast site, your Google profile, reviews, and a booking link working
            together. We build it for barbers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="btn-primary px-8 py-4">
              Get Your Free Website Audit <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://lexthebarber.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-8 py-4"
            >
              See a Real Barber Client Site
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site max-w-3xl">
          <h2 className="h2 mb-4">Where new clients actually come from</h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            Walk-ins and word of mouth still matter, but the highest-intent new client is
            the one searching &quot;barber near me&quot; after moving to town or getting a
            bad cut somewhere else. That search shows a map with three shops, then
            websites. Strong reviews get you the look — what they find when they tap
            decides whether you get the booking.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Most barber sites we audit are either a dead template from 2019, a bare Booksy
            page with no story, or nothing at all. The shop with a clean page, real cut
            photos, and a working book button wins the new client. Our{' '}
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
            <h2 className="h2 mb-4">What a barbershop website needs to get booked</h2>
            <p className="lead">Six things we check on every barber site we audit.</p>
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
            Lex The Barber is a working Orlando barber. We built his complete site —
            booking integration, cut gallery, and full service menu, mobile-first because
            that is where his clients find him — live on his own domain at{' '}
            <a
              href="https://lexthebarber.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition"
            >
              lexthebarber.com
            </a>
            . Want to see what yours could look like first? Browse our{' '}
            <Link href="/demos" className="text-brand-400 hover:text-brand-300 transition">
              barbershop and local-service demo sites
            </Link>{' '}
            — real, scrollable builds for your exact niche.
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
            Barbershop Website FAQ
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
          <h2 className="h2 mb-4">Find Out What Your Shop Looks Like Online</h2>
          <p className="lead mb-8">
            Free 20-minute audit of your website, booking flow, and Google presence. We
            show you exactly what is costing you clients — the findings are yours either
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
