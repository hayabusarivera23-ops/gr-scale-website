import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle, PhoneMissed, MessageSquareText, Star, Bot, CalendarCheck,
  MapPin, PhoneCall, Sparkles, Rocket, ShieldCheck,
} from 'lucide-react'
import { Reveal, TypeWords, Magnetic, Aurora, GlowDivider, Marquee, ScrollProgress } from '@/components/FX'
import { SITE, PRICE, AGENTS, STAGES } from '@/lib/site'

export const metadata: Metadata = { alternates: { canonical: '/' } }

const ICONS: Record<string, typeof Bot> = {
  website: CalendarCheck,
  textback: MessageSquareText,
  reviews: Star,
  receptionist: Bot,
  google: MapPin,
}

const PROBLEMS = [
  { icon: PhoneMissed, title: 'You’re busy. The phone rings.', text: 'You’re mid-cut or on a job. Nobody picks up — and plenty of callers won’t leave a voicemail.' },
  { icon: ArrowRight, title: 'They call the next shop.', text: 'A missed call can be a customer who books with somebody else.' },
  { icon: Star, title: 'Customers forget to leave reviews.', text: 'Customers rarely think to leave a review unless someone asks. People read reviews before they pick a shop.' },
]

const STEPS = [
  { icon: Sparkles, step: '01', title: 'Free demo', text: 'We build a demo for your business — your name, your services, your booking link. You see it before you pay anything.' },
  { icon: Rocket, step: '02', title: 'We set it all up', text: 'You say yes, we do the setup: website live within 48 hours after your setup fee is paid and your setup form, with photos, is in, Google profile in about 3 days, texting once the carriers approve it. You keep your phone number.' },
  { icon: ShieldCheck, step: '03', title: 'It runs for you', text: 'Customers book online, missed calls get a text back, review requests are easy to send — and leads land on your phone.' },
]

const BUNDLE_INCLUDES = [
  'Website with online booking',
  'Google Profile setup ($197 value)',
  'Missed-call text-back',
  'Review Getter + counter QR card',
  'All setup done for you',
  'Edits and support by text',
  'Month to month — cancel with 14 days’ notice',
]

const BUILT_SITES = [
  { name: 'Melo Air', niche: 'HVAC · Tampa', url: 'https://meloair.net', domain: 'meloair.net' },
  { name: 'LexTheBarber', niche: 'Mobile barber · Tampa Bay', url: 'https://lexthebarber.com', domain: 'lexthebarber.com' },
]

const FAQS = [
  { q: 'Does the AI receptionist sound like a robot?', a: 'It sounds like a friendly front-desk person and it always says it’s an AI assistant. Calls are recorded only if the caller is told first. It’s in early access right now, so spots are limited.' },
  { q: 'Why does texting take 1–2 weeks?', a: 'US phone carriers require every business that sends automatic texts to be registered and approved. We file it for you once your site is live, and the timing is up to the carriers. Your website, booking and Google profile go live while you wait.' },
  { q: 'Do I need a new phone number?', a: 'You keep your number and customers keep calling it. Missed-call texts come from a separate business number we set up for you.' },
  { q: 'Is there a contract?', a: 'No. Month to month. Cancel with 14 days’ notice.' },
  { q: 'I already have a website. Can I still use this?', a: 'Yes. We plug the agents into the site you have, or build you a new one if yours is slowing you down.' },
  { q: 'What does the free demo cost?', a: 'Nothing. We build it first. If you don’t like it, you don’t pay.' },
  { q: 'Who is behind GR Scale?', a: 'Gio Rivera, based in Tampa. One person you can text, who sets it up and keeps it running.' },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
      '@id': 'https://grscales.com/#faq',
      mainEntity: [
        { '@type': 'Question', name: 'How much does GR Scale cost?', acceptedAnswer: { '@type': 'Answer',
          text: `The Front Desk Bundle (website + booking, Google profile setup, missed-call text-back, Review Getter) is $${PRICE.setup} setup and $${PRICE.bundle}/month — $${PRICE.founding}/month for the first ${PRICE.foundingSpots} founding businesses. Single agents start at $67/month. No contracts.` } },
        { '@type': 'Question', name: 'Is there a free demo?', acceptedAnswer: { '@type': 'Answer',
          text: 'Yes. GR Scale builds a demo for your business first at grscales.com/book. You only pay if you want it.' } },
        { '@type': 'Question', name: 'How fast is setup?', acceptedAnswer: { '@type': 'Answer',
          text: 'Website live within 48 hours after your setup fee is paid and your setup form, with photos, is in; texting goes live after carrier approval, and that timing is up to the carriers.' } },
        { '@type': 'Question', name: 'Do I keep my phone number?', acceptedAnswer: { '@type': 'Answer',
          text: 'Yes. You keep your number. Missed-call texts are sent from a separate business number we set up for you.' } },
        { '@type': 'Question', name: 'Is there a contract?', acceptedAnswer: { '@type': 'Answer',
          text: 'No. Month to month. Cancel with 14 days notice.' } },
      ],
    }

export default function HomePage() {
  const phone = SITE.phone
  return (
    <div className="overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      {/* ── HERO ── */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center px-4 pt-28 pb-16 text-center overflow-hidden">
        <ScrollProgress />
        <div aria-hidden className="hero-grid" />
        <Aurora />

        <div className="badge-beam reveal-up mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs text-[var(--text-muted)]">
            <MapPin className="h-3.5 w-3.5 text-brand-400" />
            Tampa Bay · Get found, get booked, get reviews
          </div>
        </div>

        <h1 className="h1 reveal-up rd-1 mb-5 max-w-4xl">
          Stop losing customers to{' '}
          <span className="text-gradient">missed calls.</span>
        </h1>

        <p className="lead reveal-up rd-2 mb-8 max-w-2xl">
          GR Scale sets up your website, Google profile, online booking, missed-call text-back and review requests for{' '}
          <TypeWords words={['barbershops', 'salons', 'HVAC pros', 'lawn care', 'auto detailers']} className="text-brand-400 font-semibold" />
          {' '}— while you work.
        </p>

        <div className="reveal-up rd-3 flex flex-col sm:flex-row items-center gap-4">
          <Magnetic>
            <Link href="/book" className="btn-primary pulse-glow px-8 py-4 text-base">
              Get a free demo <ArrowRight className="h-4 w-4" />
            </Link>
          </Magnetic>
          {phone ? (
            <a href={`tel:${phone.tel}`} className="btn-ghost px-8 py-4 text-base">
              <PhoneCall className="h-4 w-4" /> Call {phone.pretty}
            </a>
          ) : (
            <Link href="/agents" className="btn-ghost px-8 py-4 text-base">Browse the agents</Link>
          )}
        </div>

        <div className="reveal-up rd-4 mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[var(--text-muted)]">
          {['Free demo before you pay', 'Website live 48 hours after fee + form', 'No contracts', `Founding price $${PRICE.founding}/mo`].map(t => (
            <span key={t} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-400" /> {t}</span>
          ))}
        </div>
      </section>

      <Marquee items={['Barbershops', 'Salons', 'HVAC', 'Lawn Care', 'Auto Detailing', 'Nail Salons', 'Plumbing', 'Pressure Washing', 'Pet Grooming', 'Cleaning']} />
      <GlowDivider />

      {/* ── PROBLEM ── */}
      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-5xl">
          <Reveal className="text-center mb-12">
            <span className="badge mb-4">The problem</span>
            <h2 className="h2">A missed call can be money walking out the door.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {PROBLEMS.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.title} delay={i * 120}>
                  <div className="card h-full">
                    <Icon className="h-6 w-6 text-brand-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{p.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── AGENTS ── */}
      <section id="agents" className="section">
        <div className="container-site max-w-6xl">
          <Reveal className="text-center mb-12">
            <span className="badge mb-4">Agent store</span>
            <h2 className="h2 mb-4">Pick the agents your business needs.</h2>
            <p className="lead max-w-2xl mx-auto">Get found, get booked, get reviews. Start with one agent, or take the Front Desk Bundle that covers all three.</p>
          </Reveal>
          <div className="flex flex-col gap-10">
            {STAGES.map(st => (
              <div key={st.id}>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 mb-4">
                  <h3 className="text-2xl font-extrabold text-white">{st.title}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{st.line}</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {AGENTS.filter(a => a.stage === st.id).map((a, i) => {
                    const Icon = ICONS[a.id] || Bot
                    return (
                      <Reveal key={a.id} delay={i * 100}>
                        <Link href={`/agents/${a.slug}`} className="card h-full flex flex-col" aria-label={`${a.name}: ${a.price}. See how it works`}>
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/20">
                              <Icon className="h-6 w-6 text-brand-400" />
                            </div>
                            {a.status === 'early'
                              ? <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-full px-2.5 py-1">Early access</span>
                              : a.bundle && <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">In the bundle</span>}
                          </div>
                          <h4 className="text-xl font-bold text-white mb-1">{a.name}</h4>
                          <p className="text-sm font-semibold text-brand-300 mb-3">{a.short}</p>
                          <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">{a.does}</p>
                          <div className="mt-5 flex items-center justify-between gap-3">
                            <p className="text-sm font-bold text-white">{a.price}</p>
                            <p className="text-xs text-[var(--text-dim)] text-right">{a.setup}</p>
                          </div>
                          <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-400">See how it works <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></p>
                        </Link>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/agents" className="btn-primary px-8 py-4 text-base">Browse all agents <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* ── BUNDLE ── */}
      <section id="bundle" className="section bg-[#0d1117]">
        <div className="container-site max-w-4xl">
          <Reveal>
            <div className="card glow-brand border-brand-500/30 p-8 md:p-12">
              <div className="grid gap-10 md:grid-cols-2 items-center">
                <div>
                  <span className="badge mb-4">Recommended · start here</span>
                  <h2 className="h2 mb-3">Front Desk Bundle</h2>
                  <p className="text-[var(--text-muted)] mb-6">Website + booking, Google profile setup, missed-call text-back and the Review Getter — everything a local business needs to get found, booked and reviewed.</p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-5xl font-extrabold text-white">${PRICE.founding}</span>
                    <span className="text-[var(--text-muted)] mb-2">/month</span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">
                    + ${PRICE.setup} one-time setup · founding price for the first {PRICE.foundingSpots} businesses
                    {' '}(then ${PRICE.bundle}/mo)
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link href="/book?plan=Front%20Desk%20Bundle" className="btn-primary px-6 py-3">Get a free demo <ArrowRight className="h-4 w-4" /></Link>
                    <Link href="/agents/front-desk-bundle" className="btn-ghost px-6 py-3">How the bundle works</Link>
                  </div>
                </div>
                <ul className="flex flex-col gap-3">
                  {BUNDLE_INCLUDES.map(t => (
                    <li key={t} className="flex items-center gap-3 text-sm text-white/90">
                      <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="section">
        <div className="container-site max-w-5xl">
          <Reveal className="text-center mb-12">
            <span className="badge mb-4">How it works</span>
            <h2 className="h2">Three steps. You don&apos;t touch any tech.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.step} delay={i * 120}>
                  <div className="card h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-black text-brand-400">{s.step}</span>
                      <Icon className="h-5 w-5 text-brand-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{s.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SITES I'VE BUILT ── */}
      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-4xl">
          <Reveal className="text-center mb-10">
            <span className="badge mb-4">Sites I&apos;ve built</span>
            <h2 className="h2 mb-3">Built for two family businesses.</h2>
            <p className="lead">Gio built both of these sites for family. They are not paying GR Scale customers.</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {BUILT_SITES.map(w => (
              <a key={w.domain} href={w.url} target="_blank" rel="noopener noreferrer" className="card group block">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-400 mb-2">{w.niche}</p>
                <h3 className="text-xl font-bold text-white mb-1">{w.name}</h3>
                <p className="text-sm text-[var(--text-muted)] group-hover:text-white transition">{w.domain} ↗</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/demos" className="btn-ghost">See demo sites by industry <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section">
        <div className="container-site max-w-3xl">
          <Reveal className="text-center mb-10">
            <span className="badge mb-4">Questions</span>
            <h2 className="h2">Straight answers.</h2>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map(f => (
              <details key={f.q} className="card group">
                <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4 text-base font-semibold text-white list-none">
                  {f.q}
                  <span className="text-brand-400 text-xl leading-none transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-3xl text-center">
          <Reveal>
            <h2 className="h2 mb-4">See it working for your business — free.</h2>
            <p className="lead mb-8">Tell us about your business. We build your demo and text you when it&apos;s ready.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="btn-primary px-10 py-4 text-base">Get my free demo <ArrowRight className="h-4 w-4" /></Link>
              {phone && (
                <a href={`tel:${phone.tel}`} className="btn-ghost px-10 py-4 text-base"><PhoneCall className="h-4 w-4" /> {phone.pretty}</a>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
