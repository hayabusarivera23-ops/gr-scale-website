import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, PhoneMissed, MessageSquareText, Reply, Clock, Star, CalendarCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'See a Sample: Website, Review Getter and Missed-Call Text-Back | GR Scale',
  description: 'Try the real GR Scale tools with made-up sample details: a sample barbershop website with online booking, the Review Getter phone app and how missed-call text-back works.',
  alternates: { canonical: '/demos' },
  openGraph: { title: 'GR Scale samples', description: 'Try the sample barbershop site and the Review Getter, and see the one text a missed caller gets.', url: '/demos' },
}

const SITE_URL = '/demos/barbershop/index.html'
const RG_URL = '/demos/review-getter/index.html'
const STYLE_DEMOS = 'https://gr-scale-demos.vercel.app'

/** The default text-back message from the text-back product, filled in for the sample shop. */
const TEXT = "Hi, this is Sample Cuts - sorry we missed your call. Book here: [your booking link] or reply and we'll get back to you. Reply STOP to opt out."

const INDUSTRY_STYLES: [string, string][] = [
  ['roofing', 'Roofing'], ['plumbing', 'Plumbing'], ['hvac', 'HVAC'], ['electrician', 'Electrical'],
  ['barber', 'Barbershop'], ['pest-control', 'Pest control'], ['painting', 'Painting'], ['flooring', 'Flooring'],
  ['tree-service', 'Tree service'], ['cleaning', 'Cleaning'], ['landscaping', 'Landscaping'],
  ['pressure-washing', 'Pressure washing'], ['restaurant', 'Restaurant'],
]

function Sample() {
  return (
    <span className="inline-flex items-center rounded-md bg-[#FFD54A] px-2 py-0.5 text-[11px] font-black uppercase tracking-widest text-[#111]">
      SAMPLE
    </span>
  )
}

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-[240px] sm:w-[280px] rounded-[2.6rem] border border-white/15 bg-[#0b0e13] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_50px_rgba(14,165,233,0.15)]">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
        <span aria-hidden="true" className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black/90" />
        <Image src={src} alt={alt} width={600} height={1298} sizes="(min-width: 640px) 280px, 240px" className="block h-auto w-full" priority />
      </div>
    </div>
  )
}

export default function DemosPage() {
  return (
    <div className="pt-24">

      {/* Header */}
      <section className="section pb-10">
        <div className="container-site max-w-3xl text-center">
          <span className="badge mb-4">Samples</span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl mb-4">See what you actually get.</h1>
          <p className="lead">
            These are the real tools GR Scale sets up, filled in with a made-up shop called Sample Cuts so you can try them.
            Every one is labelled <strong className="text-white">SAMPLE</strong>: no real shop, no real customers, no reviews.
          </p>
          <nav aria-label="Samples on this page" className="mt-7 flex flex-wrap justify-center gap-2">
            {[['#barbershop', 'Sample website'], ['#review-getter', 'Review Getter'], ['#text-back', 'Missed-call text-back']].map(([h, l]) => (
              <a key={h} href={h} className="inline-flex min-h-[44px] items-center rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-white/85 hover:border-brand-500/50 hover:text-white transition">{l}</a>
            ))}
          </nav>
        </div>
      </section>

      {/* 1. Sample website */}
      <section id="barbershop" aria-labelledby="h-site" className="section pt-6 scroll-mt-20">
        <div className="container-site max-w-5xl">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Sample />
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-300"><CalendarCheck className="h-4 w-4" aria-hidden="true" /> Website + Online Booking</span>
              </div>
              <h2 id="h-site" className="h2 mb-4">A sample barbershop site</h2>
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                This is the same one-page site we copy for every shop. Open it on your phone and try it: the price board,
                today’s hours with open or closed, tap to call, directions and a Book now button.
              </p>
              <ul className="flex flex-col gap-2 text-sm text-white/85 mb-7">
                <li>Book now opens the shop’s own booking app, or a simple request form if it doesn’t have one.</li>
                <li>Two looks to pick from: Midnight (dark) and Heritage (green and brass).</li>
                <li>On the sample, the request form doesn’t send anything, and the photos and reviews are empty placeholders.</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={SITE_URL} className="btn-primary justify-center px-8 py-4 text-base" data-test="open-sample-site">
                  Open the sample site <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a href={`${SITE_URL}#heritage`} className="btn-ghost justify-center px-6 py-4">
                  See the Heritage look
                </a>
              </div>
            </div>
            <a href={SITE_URL} aria-label="Open the sample site" className="block">
              <Phone src="/demos/img/barbershop-midnight-phone.webp" alt="Phone screenshot of the sample barbershop site: Sample Cuts, open or closed status, Book now and Call buttons, and the price board" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Review Getter */}
      <section id="review-getter" aria-labelledby="h-rg" className="section bg-[#0d1117] scroll-mt-20">
        <div className="container-site max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Sample />
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-300"><Star className="h-4 w-4" aria-hidden="true" /> Review Getter</span>
          </div>
          <h2 id="h-rg" className="h2 mb-4">Ask every customer for a Google review</h2>
          <p className="text-white/90 leading-relaxed">
            After a cut, the barber types the customer’s first name and number, ticks “Customer said OK to a text” and taps Send.
          </p>
          <p className="text-white/90 leading-relaxed mb-7">
            His own Messages app opens with the review request ready to send, and walk-ins scan the shop’s QR code instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <a href={RG_URL} className="btn-primary justify-center px-8 py-4 text-base" data-test="open-review-getter">
              Try the Review Getter <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <p className="text-sm text-[var(--text-muted)]">Best on a phone. Nothing is sent from the sample, and its review link is a placeholder.</p>
          </div>
        </div>
      </section>

      {/* 3. Missed-call text-back */}
      <section id="text-back" aria-labelledby="h-tb" className="section scroll-mt-20">
        <div className="container-site max-w-5xl">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Sample />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-300">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" /> Turns on after carrier approval
              </span>
            </div>
            <h2 id="h-tb" className="h2 mb-4">Missed-call text-back</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-8">
              It isn’t switched on for any shop yet. U.S. phone carriers have to approve each business for texting first.
              That usually takes 1–2 weeks, and the timing is up to the carriers.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-3 mb-10">
            {[
              { icon: PhoneMissed, t: 'You miss a call', d: 'Calls you don’t answer forward to a separate business number we set up for your shop. You keep your own number. The caller hears a short greeting. No voicemail, no recording.' },
              { icon: MessageSquareText, t: 'The caller gets one text', d: 'Right after the call, with your booking link. One text per caller per day at most, none late at night, and never to anyone who replied STOP.' },
              { icon: Reply, t: 'Replies come to you', d: 'If they text back, the message is forwarded to your cell with their number. STOP opts them out for good.' },
            ].map((s, i) => (
              <li key={s.t} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15 text-brand-300 font-bold">{i + 1}</span>
                  <s.icon className="h-5 w-5 text-brand-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">{s.t}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>

          <figure className="max-w-md">
            <figcaption className="mb-3 text-sm font-semibold text-white">The one text a caller gets <span className="font-normal text-[var(--text-muted)]">(with the sample shop’s name)</span>:</figcaption>
            <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
              <p className="mb-2 text-xs text-[var(--text-dim)]">Text message · Sample Cuts</p>
              <blockquote className="rounded-2xl rounded-bl-md bg-[#2a2f37] px-4 py-3 text-[15px] leading-relaxed text-white">
                {TEXT}
              </blockquote>
            </div>
          </figure>
        </div>
      </section>

      {/* Website looks by industry (older style samples on the separate demo site) */}
      <section aria-labelledby="h-styles" className="section bg-[#0d1117]">
        <div className="container-site max-w-5xl">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <Sample />
          </div>
          <h2 id="h-styles" className="h2 mb-3">Website looks by industry</h2>
          <p className="text-[var(--text-muted)] mb-6 max-w-2xl">
            Style samples with made-up businesses, one per industry. They open on our separate demo site in a new tab.
          </p>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {INDUSTRY_STYLES.map(([slug, label]) => (
              <li key={slug}>
                <a href={`${STYLE_DEMOS}/${slug}`} target="_blank" rel="noopener noreferrer"
                  className="flex min-h-[48px] items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/90 hover:border-brand-500/50 hover:text-white transition">
                  <span>{label} sample</span>
                  <ExternalLink className="h-4 w-4 shrink-0 text-[var(--text-dim)]" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-site max-w-2xl text-center">
          <h2 className="h2 mb-3">Want this set up for your shop?</h2>
          <p className="lead mb-7">We build a free demo with your name, services and booking link before you pay anything.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/book" className="btn-primary justify-center px-8 py-4 text-base">Get a free demo <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/agents" className="btn-ghost justify-center px-8 py-4 text-base">See all agents</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
