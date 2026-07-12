import Link from 'next/link'
import {
  ArrowRight, CheckCircle, Zap, Globe, Search,
  Clock, Phone, TrendingUp, Shield, MessageSquare, ChevronRight,
  AlertCircle, MapPin,
} from 'lucide-react'
import { Reveal, CursorGlow, ScrollZoomBrowser, Marquee, ParticleField, TypeWords, Magnetic, ScrollProgress } from '@/components/FX'

/* ── DATA ── */
const NICHES = [
  { label: 'HVAC',             color: 'bg-sky-500/10     text-sky-400     border-sky-500/20'     },
  { label: 'Plumbing',         color: 'bg-blue-500/10    text-blue-400    border-blue-500/20'    },
  { label: 'Roofing',          color: 'bg-amber-500/10   text-amber-400   border-amber-500/20'   },
  { label: 'Pressure Washing', color: 'bg-orange-500/10  text-orange-400  border-orange-500/20'  },
  { label: 'Landscaping',      color: 'bg-green-500/10   text-green-400   border-green-500/20'   },
  { label: 'Barbershops',      color: 'bg-violet-500/10  text-violet-400  border-violet-500/20'  },
]

const PAIN_POINTS = [
  { icon: AlertCircle, text: 'Customers Google you and find nothing — or worse, a competitor.' },
  { icon: AlertCircle, text: 'Your website loads slow, looks bad on phones, and loses you jobs.' },
  { icon: AlertCircle, text: 'You don\'t show up when locals search for your service on Google.' },
]

const SERVICES = [
  {
    icon: Globe,
    title: 'Website Design & Build',
    desc:  'A brand-new professional website built from scratch. Fast, mobile-first, and designed to convert visitors into calls.',
    price: 'From $500',
  },
  {
    icon: Zap,
    title: 'Website Redesign',
    desc:  'Your outdated site is losing you customers every day. We rebuild it fast, modern, and conversion-focused.',
    price: 'From $400',
  },
  {
    icon: Search,
    title: 'Google Business Profile',
    desc:  'Optimize your GBP so you appear when local customers search your service. More calls, zero ad spend.',
    price: 'From $150',
  },
  {
    icon: TrendingUp,
    title: 'Local SEO',
    desc:  'Rank at the top of Google for searches in your area. Long-term traffic that doesn\'t cost per click.',
    price: 'From $200/mo',
  },
  {
    icon: MessageSquare,
    title: 'Landing Pages',
    desc:  'Dedicated pages built for one goal: get the visitor to call, fill out a form, or book an appointment.',
    price: 'From $300',
  },
  {
    icon: Shield,
    title: 'Monthly Maintenance',
    desc:  'Keep your site fast, secure, and updated. We handle hosting, backups, and small edits whenever you need them.',
    price: 'From $99/mo',
  },
]

const PROCESS = [
  { step: '01', title: 'Free Website Audit',  desc: 'We review your online presence and show you exactly what\'s costing you customers — no charge, no obligation.' },
  { step: '02', title: 'Strategy Call',        desc: 'We walk you through what we found and present a clear plan. You decide if you want to move forward.' },
  { step: '03', title: '7–14 Day Build',       desc: 'We build fast. You review, we refine. Your new site launches in under two weeks.' },
  { step: '04', title: 'You Start Growing',    desc: 'Site goes live. More calls start coming in. We track results and keep things running.' },
]

const DEMOS = [
  {
    name:     'Melo Air',
    niche:    'HVAC',
    url:      'https://meloair.net',
    status:   'Live',
    color:    'from-sky-500/20 to-blue-600/10',
    tagColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    desc:     'Real client build for a Tampa HVAC company — full site with services, financing options, and quote form, live on the client\'s own domain.',
  },
  {
    name:     'LexTheBarber',
    niche:    'Barbershop',
    url:      'https://lexthebarber.com',
    status:   'Live',
    color:    'from-violet-500/20 to-purple-600/10',
    tagColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    desc:     'Premium barber portfolio with booking integration, gallery, and service menu.',
  },
  {
    name:     'Elite Plumbing Co',
    niche:    'Plumbing',
    url:      'https://gr-scale-demos.vercel.app/plumbing',
    status:   'Demo',
    color:    'from-blue-500/20 to-cyan-600/10',
    tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    desc:     'Emergency plumbing site with 24/7 CTA, trust badges, service pages, and quote form.',
  },
  {
    name:     'Peak Roofing Solutions',
    niche:    'Roofing',
    url:      'https://gr-scale-demos.vercel.app/roofing',
    status:   'Demo',
    color:    'from-amber-500/20 to-orange-600/10',
    tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    desc:     'Roofing site with before/after gallery, free inspection offer, and storm damage lead capture.',
  },
  {
    name:     'SparkClean Pressure Wash',
    niche:    'Pressure Washing',
    url:      'https://gr-scale-demos.vercel.app/pressure-washing',
    status:   'Demo',
    color:    'from-orange-500/20 to-red-600/10',
    tagColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    desc:     'Pressure washing site with before/after gallery, instant quote form, and service areas.',
  },
  {
    name:     'GreenEdge Landscaping',
    niche:    'Landscaping',
    url:      'https://gr-scale-demos.vercel.app/landscaping',
    status:   'Demo',
    color:    'from-green-500/20 to-emerald-600/10',
    tagColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    desc:     'Landscaping site with portfolio gallery, seasonal services, maintenance plans, and booking.',
  },
]

const REAL_WORK = [
  {
    name:   'Melo Air',
    niche:  'HVAC · Tampa, FL',
    url:    'https://meloair.net',
    domain: 'meloair.net',
    tagColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    points: [
      'Complete website build for a working Tampa HVAC company',
      'Services, financing, and quote request — built to turn visitors into calls',
      'Live on the client\'s own domain right now',
    ],
  },
  {
    name:   'LexTheBarber',
    niche:  'Barbershop · Orlando, FL',
    url:    'https://lexthebarber.com',
    domain: 'lexthebarber.com',
    tagColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    points: [
      'Premium barber portfolio site built from scratch',
      'Booking integration, cut gallery, and full service menu',
      'Mobile-first design — most of his customers find him on their phone',
    ],
  },
]

const RESULTS = [
  { number: '2',     label: 'Client sites live on real domains' },
  { number: '13',    label: 'Industry demo sites built'         },
  { number: '7–14',  label: 'Day avg. build time'               },
  { number: '100%',  label: 'Mobile responsive'                 },
]

const FAQS = [
  {
    q: 'How long does it take to build a website?',
    a: 'Most websites are done in 7–14 business days. Simple landing pages can be done in 3–5 days.',
  },
  {
    q: 'Do I need a website if I already have a Google Business Profile?',
    a: "Yes. A GBP gets you found — a website closes the deal. Customers check your site before calling. If you don't have one, many won't call.",
  },
  {
    q: 'What if I already have a website?',
    a: "If it's old, slow, or not generating leads, we can redesign it. We'll audit it free and tell you exactly what's wrong before you pay anything.",
  },
  {
    q: 'Do you work with businesses outside Orlando?',
    a: 'We primarily serve Florida businesses right now, but we work with any local service business in the U.S. remotely.',
  },
]

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16 text-center overflow-hidden">
        {/* Scroll progress beam */}
        <ScrollProgress />

        {/* Animated grid backdrop */}
        <div aria-hidden className="hero-grid" />

        {/* Particle constellation */}
        <ParticleField />

        {/* Cursor-follow glow */}
        <CursorGlow />

        {/* Ambient glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="orb-pulse h-[600px] w-[600px] rounded-full bg-brand-500/5 blur-3xl" />
        </div>

        {/* Location badge */}
        <div className="reveal-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-[var(--text-muted)]">
          <MapPin className="h-3.5 w-3.5 text-brand-400" />
          Based in Orlando, FL · Serving Businesses Nationwide
        </div>

        {/* Headline */}
        <h1 className="h1 reveal-up rd-1 mb-5 max-w-4xl">
          Your Competitors Are Getting Customers{' '}
          <span className="text-gradient">Online. Are You?</span>
        </h1>

        <p className="lead reveal-up rd-2 mb-4 max-w-2xl">
          GR Scale builds fast, modern websites for{' '}
          <TypeWords
            words={['roofers', 'HVAC pros', 'plumbers', 'barbers', 'landscapers', 'contractors']}
            className="text-brand-400 font-semibold"
          />
          {' '}— professional design, local SEO, Google Business optimization.
        </p>

        {/* Niche strip */}
        <div className="reveal-up rd-2 mb-10 flex flex-wrap justify-center gap-2">
          {NICHES.map(n => (
            <span key={n.label} className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${n.color}`}>
              {n.label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="reveal-up rd-3 flex flex-col sm:flex-row items-center gap-4">
          <Magnetic>
            <Link href="/book" className="btn-primary pulse-glow px-8 py-4 text-base">
              Get Your Free Website Audit <ArrowRight className="h-4 w-4" />
            </Link>
          </Magnetic>
          <Link href="/demos" className="btn-ghost px-8 py-4 text-base">
            See Demo Sites
          </Link>
        </div>

        {/* Trust bar */}
        <div className="reveal-up rd-4 mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-muted)]">
          <span className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-brand-400" /> Free audit — no card required
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-brand-400" /> 7–14 day delivery
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-brand-400" /> 100% mobile responsive
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-brand-400" /> No long-term contracts
          </span>
        </div>

        {/* Stats */}
        <div className="reveal-up rd-4 mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-3xl w-full">
          {RESULTS.map(r => (
            <div key={r.label} className="card text-center">
              <p className="stat-number text-3xl font-extrabold text-brand-400 mb-1">{r.number}</p>
              <p className="text-xs text-[var(--text-muted)]">{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NICHE MARQUEE ── */}
      <Marquee items={['HVAC', 'Roofing', 'Plumbing', 'Barbershops', 'Pressure Washing', 'Landscaping', 'Electricians', 'Pest Control', 'Auto Repair', 'Pool Service']} />

      {/* ── PROBLEM SECTION ── */}
      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-4xl">
          <div className="text-center mb-12">
            <span className="badge mb-4">Sound Familiar?</span>
            <h2 className="h2 mb-4">Most Local Businesses Are Invisible Online</h2>
            <p className="lead max-w-2xl mx-auto">
              If a customer can&apos;t find you on Google or doesn&apos;t trust what they see — they&apos;re calling your competitor.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 mb-12">
            {PAIN_POINTS.map(p => {
              const Icon = p.icon
              return (
                <div key={p.text} className="card border-red-500/10 bg-red-500/5 flex gap-3 items-start">
                  <Icon className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{p.text}</p>
                </div>
              )
            })}
          </div>

          <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-8 text-center">
            <p className="text-white font-semibold mb-2">We fix all of this — starting with a free audit.</p>
            <p className="text-sm text-[var(--text-muted)] mb-6">
              We look at your Google presence, your current site (if you have one), and what your competitors are doing.
              Then we show you exactly how to fix it.
            </p>
            <Link href="/book" className="btn-primary px-8 py-3">
              Book Free Audit Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── REAL WORK / PROOF ── */}
      <section id="proof" className="section">
        <div className="container-site">
          <Reveal>
            <div className="text-center mb-12">
              <span className="badge mb-4">Real Work</span>
              <h2 className="h2 mb-4">Built by GR Scale. Live Right Now.</h2>
              <p className="lead max-w-2xl mx-auto">
                No stock testimonials, no made-up reviews. These are real businesses on real domains —
                click through and judge the work yourself.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {REAL_WORK.map(w => (
              <a
                key={w.name}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card beam-card group flex flex-col gap-4 hover:scale-[1.01] transition-transform"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${w.tagColor} mb-2`}>
                      {w.niche}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{w.name}</h3>
                  </div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    Live
                  </span>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {w.points.map(pt => (
                    <li key={pt} className="flex gap-2 items-start text-sm text-[var(--text-muted)] leading-relaxed">
                      <CheckCircle className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-400 group-hover:gap-2.5 transition-all">
                  Visit {w.domain} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE SHOWCASE ── */}
      <section className="section bg-[#0d1117] overflow-hidden">
        <div className="container-site max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <span className="badge mb-4">Live Demo</span>
              <h2 className="h2 mb-4">This Is a Real Website. <span className="text-gradient">Scroll It.</span></h2>
              <p className="lead max-w-2xl mx-auto">
                The window below isn&apos;t a screenshot — it&apos;s a live site we built, running right now.
                Scroll inside it, click around. Your business gets this same level of polish.
              </p>
            </div>
          </Reveal>
          <ScrollZoomBrowser
            src="https://gr-scale-demos.vercel.app/roofing"
            url="gr-scale-demos.vercel.app/roofing"
          />
          <Reveal delay={150}>
            <div className="mt-10 text-center">
              <Link href="/demos" className="btn-primary px-8 py-3">
                See All 13 Demo Sites <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section">
        <div className="container-site">
          <Reveal>
            <div className="text-center mb-16">
              <span className="badge mb-4">What We Do</span>
              <h2 className="h2 mb-4">Everything Your Online Presence Needs</h2>
              <p className="lead max-w-2xl mx-auto">
                From your first website to local SEO that keeps the phone ringing — we handle all of it.
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            {SERVICES.map(s => {
              const Icon = s.icon
              return (
                <div key={s.title} className="card group">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 transition group-hover:bg-brand-500/20">
                    <Icon className="h-5 w-5 text-brand-400" />
                  </div>
                  <h3 className="h3 mb-2">{s.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-xs font-semibold text-brand-400">{s.price}</span>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-ghost">
              See All Services & Details <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="section">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="badge mb-4">How It Works</span>
            <h2 className="h2 mb-4">Audit to Live in 2 Weeks</h2>
            <p className="lead max-w-xl mx-auto">
              No long timelines. No confusion. A clear process from first call to launch.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="relative card">
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-px bg-brand-500/20 z-10" />
                )}
                <div className="mb-4 text-4xl font-black text-brand-500/20">{p.step}</div>
                <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO GALLERY ── */}
      <section id="portfolio" className="section bg-[#0d1117]">
        <div className="container-site">
          <Reveal>
            <div className="text-center mb-16">
              <span className="badge mb-4">Our Work</span>
              <h2 className="h2 mb-4">See Your Future Website</h2>
              <p className="lead max-w-xl mx-auto">
                We build a demo for your exact niche — so you see what yours will look like before you pay.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DEMOS.map(d => (
              <a
                key={d.name}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`card group relative overflow-hidden bg-gradient-to-br ${d.color} hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${d.tagColor} mb-2`}>
                      {d.niche}
                    </span>
                    <h3 className="text-base font-semibold text-white">{d.name}</h3>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    d.status === 'Live'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-zinc-500/10 text-zinc-400 border border-zinc-500/20'
                  }`}>
                    {d.status}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{d.desc}</p>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-400 group-hover:gap-2.5 transition-all">
                  {d.status === 'Live' ? 'View Live Site' : 'View Demo'} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/demos" className="btn-ghost">
              View Full Demo Gallery <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section">
        <div className="container-site max-w-3xl">
          <div className="text-center mb-16">
            <span className="badge mb-4">FAQ</span>
            <h2 className="h2 mb-4">Common Questions</h2>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map(f => (
              <div key={f.q} className="card">
                <h3 className="text-sm font-semibold text-white mb-2">{f.q}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/faq" className="text-sm text-brand-400 hover:text-brand-300 transition">
              See all questions →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section bg-[#0d1117]">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500/20 via-brand-600/10 to-transparent border border-brand-500/20 px-8 py-16 text-center glow-brand">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl"
            />
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 mx-auto mb-6">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h2 className="h2 mb-4 max-w-2xl mx-auto">
              Your Competitors Already Have a Website. Let&apos;s Build Yours.
            </h2>
            <p className="lead mb-8 max-w-xl mx-auto">
              Book a free 20-minute audit call. We review your Google presence and show you exactly what&apos;s costing you customers — no charge, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="btn-primary px-10 py-4 text-base">
                Book Your Free Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+18138695917" className="btn-ghost px-10 py-4 text-base">
                Call (813) 869-5917
              </a>
            </div>
            <p className="mt-6 text-xs text-[var(--text-dim)]">
              <Clock className="inline h-3.5 w-3.5 mr-1" />
              Respond within a few hours · Orlando & Central Florida businesses
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
