import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, CheckCircle, Zap, Globe, Search,
  Clock, TrendingUp, Shield, MessageSquare, ChevronRight, MapPin,
} from 'lucide-react'
import {
  Reveal, CursorGlow, ScrollZoomBrowser, Marquee, ParticleField, TypeWords,
  Magnetic, ScrollProgress, CountUp, Tilt, Aurora, GlowDivider, Parallax,
  ParallaxImg, SlideIn,
} from '@/components/FX'

/* ── IMAGERY ──
 * Professional Unsplash photos — every URL verified live before shipping.
 * PRIORITY SWAP: when brand-1.png … brand-5.png land in /public (Gio's
 * AI-generated brand images), replace these values with '/brand-1.png' etc.
 */
const LOGO = '/ChatGPT%20Image%20Jul%2012,%202026,%2003_38_02%20PM.png'

const IMG = {
  roofer:   'https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=1000&auto=format&fit=crop',
  plumber:  'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1000&auto=format&fit=crop',
  barber:   'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop',
  hvacTech: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1800&auto=format&fit=crop',
  builder:  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1800&auto=format&fit=crop',
}

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
  { img: IMG.roofer,  alt: 'Roofer working on a roof',        claim: 'They Google you.',        sub: 'They find your competitor.' },
  { img: IMG.plumber, alt: 'Plumber repairing a sink',        claim: 'Your site is slow.',      sub: 'Every second costs you jobs.' },
  { img: IMG.barber,  alt: 'Barber cutting a client\'s hair', claim: 'Great work. Invisible.',  sub: 'That gap is their revenue.' },
]

const SERVICES = [
  {
    icon: Globe,
    title: 'Website Design & Build',
    desc:  'A brand-new site built to turn visitors into calls.',
    price: 'From $500',
  },
  {
    icon: Zap,
    title: 'Website Redesign',
    desc:  'Outdated site? Rebuilt fast, modern, conversion-first.',
    price: 'From $400',
  },
  {
    icon: Search,
    title: 'Google Business Profile',
    desc:  'Show up when locals search. Zero ad spend.',
    price: 'From $150',
  },
  {
    icon: TrendingUp,
    title: 'Local SEO',
    desc:  'Rank at the top of Google in your area.',
    price: 'From $200/mo',
  },
  {
    icon: MessageSquare,
    title: 'Landing Pages',
    desc:  'One page, one goal: make the phone ring.',
    price: 'From $300',
  },
  {
    icon: Shield,
    title: 'Monthly Maintenance',
    desc:  'Hosting, backups, edits — handled for you.',
    price: 'From $99/mo',
  },
]

const PROCESS = [
  { step: '01', title: 'Free Website Audit',  desc: 'We audit your online presence. No charge, no obligation.' },
  { step: '02', title: 'Strategy Call',        desc: 'We show you what we found. You decide.' },
  { step: '03', title: '7–14 Day Build',       desc: 'We build fast. You review from your phone.' },
  { step: '04', title: 'You Start Growing',    desc: 'Launch. Calls come in. We keep it running.' },
]

const DEMOS = [
  {
    name:     'Melo Air',
    niche:    'HVAC',
    url:      'https://meloair.net',
    status:   'Live',
    img:      'https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?q=80&w=900&auto=format&fit=crop',
    alt:      'Air conditioning units on a wall',
    color:    'from-sky-500/20 to-blue-600/10',
    tagColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    desc:     'Real client build — live on the client\'s own domain.',
  },
  {
    name:     'LexTheBarber',
    niche:    'Barbershop',
    url:      'https://lexthebarber.com',
    status:   'Live',
    img:      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=900&auto=format&fit=crop',
    alt:      'Barbershop interior',
    color:    'from-violet-500/20 to-purple-600/10',
    tagColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    desc:     'Booking-first barber site. Real client.',
  },
  {
    name:     'Elite Plumbing Co',
    niche:    'Plumbing',
    url:      'https://gr-scale-demos.vercel.app/plumbing',
    status:   'Demo',
    img:      'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=900&auto=format&fit=crop',
    alt:      'Industrial pipes',
    color:    'from-blue-500/20 to-cyan-600/10',
    tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    desc:     '24/7 emergency design that books jobs.',
  },
  {
    name:     'Peak Roofing Solutions',
    niche:    'Roofing',
    url:      'https://gr-scale-demos.vercel.app/roofing',
    status:   'Demo',
    img:      'https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=900&auto=format&fit=crop',
    alt:      'House roof shingles',
    color:    'from-amber-500/20 to-orange-600/10',
    tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    desc:     'Storm-damage leads + free inspection flow.',
  },
  {
    name:     'SparkClean Pressure Wash',
    niche:    'Pressure Washing',
    url:      'https://gr-scale-demos.vercel.app/pressure-washing',
    status:   'Demo',
    img:      'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=900&auto=format&fit=crop',
    alt:      'Pressure washing a surface',
    color:    'from-orange-500/20 to-red-600/10',
    tagColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    desc:     'Before/after gallery that sells itself.',
  },
  {
    name:     'GreenEdge Landscaping',
    niche:    'Landscaping',
    url:      'https://gr-scale-demos.vercel.app/landscaping',
    status:   'Demo',
    img:      'https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=900&auto=format&fit=crop',
    alt:      'Landscaped garden lawn',
    color:    'from-green-500/20 to-emerald-600/10',
    tagColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    desc:     'Seasonal packages, year-round contracts.',
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
    a: 'Most sites: 7–14 business days. Landing pages: 3–5.',
  },
  {
    q: 'Do I need a website if I already have a Google Business Profile?',
    a: 'Yes. A GBP gets you found — your website closes the deal.',
  },
  {
    q: 'What if I already have a website?',
    a: "We audit it free and tell you exactly what's wrong — before you pay anything.",
  },
  {
    q: 'Where do you work?',
    a: 'Anywhere in the U.S. Everything is done remotely — same quality in every city.',
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

        {/* Drifting aurora depth */}
        <Aurora dim />

        {/* Particle constellation */}
        <ParticleField />

        {/* Cursor-follow glow */}
        <CursorGlow />

        {/* Ambient glow — drifts slower than the page (parallax) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Parallax speed={0.12}>
            <div className="orb-pulse h-[600px] w-[600px] rounded-full bg-brand-500/5 blur-3xl" />
          </Parallax>
        </div>

        {/* Location badge — animated gradient border */}
        <div className="badge-beam reveal-up mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs text-[var(--text-muted)]">
            <MapPin className="h-3.5 w-3.5 text-brand-400" />
            Based in Tampa, FL · Serving Businesses Nationwide
          </div>
        </div>

        {/* Headline */}
        <h1 className="h1 reveal-up rd-1 mb-5 max-w-4xl">
          Your Competitors Are Getting Customers{' '}
          <span className="text-gradient">Online. Are You?</span>
        </h1>

        <p className="lead reveal-up rd-2 mb-4 max-w-2xl">
          Fast, modern websites for{' '}
          <TypeWords
            words={['roofers', 'HVAC pros', 'plumbers', 'barbers', 'landscapers', 'contractors']}
            className="text-brand-400 font-semibold"
          />
          {' '}— built to make your phone ring.
        </p>

        {/* Niche strip */}
        <div className="reveal-up rd-2 mb-10 flex flex-wrap justify-center gap-2">
          {NICHES.map(n => (
            <span key={n.label} className={`chip-glow inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${n.color}`}>
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
              <p className="stat-number text-3xl font-extrabold text-brand-400 mb-1">
                <CountUp text={r.number} />
              </p>
              <p className="text-xs text-[var(--text-muted)]">{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NICHE MARQUEE ── */}
      <Marquee items={['HVAC', 'Roofing', 'Plumbing', 'Barbershops', 'Pressure Washing', 'Landscaping', 'Electricians', 'Pest Control', 'Auto Repair', 'Pool Service']} />

      <GlowDivider />

      {/* ── PROBLEM SECTION ── */}
      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <span className="badge mb-4">Sound Familiar?</span>
              <h2 className="h2 mb-4">Most Local Businesses Are Invisible Online</h2>
              <p className="lead max-w-2xl mx-auto">
                Great work isn&apos;t enough — the job goes to whoever shows up on Google.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 mb-12">
            {PAIN_POINTS.map((p, i) => (
              <SlideIn key={p.claim} from={i % 2 === 0 ? 'left' : 'right'} delay={i * 120} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 photo-overlay img-zoom min-h-[300px]">
                  <Image src={p.img} alt={p.alt} fill sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                    <p className="text-xl font-extrabold text-white leading-tight">{p.claim}</p>
                    <p className="text-sm text-[var(--text-muted)] mt-1">{p.sub}</p>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-2xl border border-brand-500/20 bg-brand-500/5 p-8 text-center">
              <Aurora dim />
              <div className="relative z-10">
                <p className="text-white text-lg font-bold mb-5">We fix all of this — starting with a free audit.</p>
                <Link href="/book" className="btn-primary px-8 py-3">
                  Get Your Free Website Audit <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── REAL WORK / PROOF ── */}
      <section id="proof" className="section">
        <div className="container-site">
          <Reveal>
            <div className="text-center mb-10">
              <span className="badge mb-4">Real Work</span>
              <h2 className="h2 mb-4">Built by GR Scale. Live Right Now.</h2>
              <p className="lead max-w-2xl mx-auto">
                Real businesses on real domains — judge the work yourself.
              </p>
            </div>
          </Reveal>

          {/* Builder at work — wide visual anchor with scroll parallax */}
          <Reveal className="max-w-4xl mx-auto mb-10">
            <div className="group relative rounded-3xl border border-white/10 overflow-hidden photo-overlay img-zoom">
              <ParallaxImg strength={30} className="h-56 md:h-72">
                <Image src={IMG.builder} alt="Developer building a website on a laptop" fill sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover" />
              </ParallaxImg>
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-white">Built like products. Not brochures.</p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {REAL_WORK.map((w, i) => (
              <SlideIn key={w.name} from={i % 2 === 0 ? 'left' : 'right'} delay={i * 140} className="h-full">
              <Tilt max={6}>
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card beam-card group flex flex-col gap-4 h-full"
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
              </Tilt>
              </SlideIn>
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
                Not a screenshot — a live site running right now. Scroll it. Click it.
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

      <GlowDivider />

      {/* ── SERVICES ── */}
      <section id="services" className="section">
        <div className="container-site">
          <Reveal>
            <div className="text-center mb-10">
              <span className="badge mb-4">What We Do</span>
              <h2 className="h2 mb-4">Everything Your Online Presence Needs</h2>
              <p className="lead max-w-2xl mx-auto">
                First website to local SEO — handled.
              </p>
            </div>
          </Reveal>

          {/* Trades visual anchor — we build for people who work with their hands */}
          <SlideIn from="right" className="max-w-4xl mx-auto mb-10">
            <div className="group relative rounded-3xl border border-white/10 overflow-hidden photo-overlay img-zoom">
              <ParallaxImg strength={30} className="h-56 md:h-72">
                <Image src={IMG.hvacTech} alt="Technician working on equipment" fill sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover" />
              </ParallaxImg>
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-white">You do the work. Your website sells it.</p>
              </div>
            </div>
          </SlideIn>

          <div className="services-grid">
            {SERVICES.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.title} delay={(i % 3) * 110} className="h-full">
                  <Tilt max={6}>
                    <div className="card group h-full">
                      <div className="icon-bob mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 transition group-hover:bg-brand-500/20">
                        <Icon className="h-5 w-5 text-brand-400" />
                      </div>
                      <h3 className="h3 mb-2">{s.title}</h3>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{s.desc}</p>
                      <span className="text-xs font-semibold text-brand-400">{s.price}</span>
                    </div>
                  </Tilt>
                </Reveal>
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
          <Reveal>
            <div className="text-center mb-16">
              <span className="badge mb-4">How It Works</span>
              <h2 className="h2 mb-4">Audit to Live in 2 Weeks</h2>
              <p className="lead max-w-xl mx-auto">
                No long timelines. No confusion. A clear process from first call to launch.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 130} className="h-full">
                <div className="relative card h-full">
                  {i < PROCESS.length - 1 && (
                    <div className="connector-pulse hidden lg:block absolute top-10 left-full w-6 h-px bg-brand-500/40 z-10" />
                  )}
                  <div className="mb-4 text-4xl font-black text-brand-500/20">{p.step}</div>
                  <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
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
            {DEMOS.map((d, i) => (
              <Reveal key={d.name} delay={(i % 3) * 110} className="h-full">
              <Tilt max={7}>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${d.color} h-full flex flex-col min-h-[240px] p-6 transition-colors hover:border-brand-500/40`}
              >
                {/* Niche photo background; gradient above remains the fallback */}
                <div className="absolute inset-0 img-zoom photo-overlay-full">
                  <Image src={d.img} alt={d.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover" />
                </div>
                <div className="relative z-10 flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${d.tagColor} mb-2 backdrop-blur`}>
                      {d.niche}
                    </span>
                    <h3 className="text-base font-bold text-white">{d.name}</h3>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full backdrop-blur ${
                    d.status === 'Live'
                      ? 'bg-green-500/15 text-green-400 border border-green-500/25'
                      : 'bg-zinc-800/60 text-zinc-300 border border-zinc-600/40'
                  }`}>
                    {d.status}
                  </span>
                </div>
                <p className="relative z-10 text-sm text-zinc-300 leading-relaxed mb-4 flex-1">{d.desc}</p>
                <span className="relative z-10 flex items-center gap-1.5 text-xs font-semibold text-brand-400 group-hover:gap-2.5 transition-all">
                  {d.status === 'Live' ? 'View Live Site' : 'View Demo'} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
              </Tilt>
              </Reveal>
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
          <Reveal>
            <div className="text-center mb-16">
              <span className="badge mb-4">FAQ</span>
              <h2 className="h2 mb-4">Common Questions</h2>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 90}>
                <div className="card">
                  <h3 className="text-sm font-semibold text-white mb-2">{f.q}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/faq" className="text-sm text-brand-400 hover:text-brand-300 transition">
              See all questions →
            </Link>
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* ── CTA BANNER ── */}
      <section className="section bg-[#0d1117]">
        <div className="container-site">
          <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500/20 via-brand-600/10 to-transparent border border-brand-500/20 px-8 py-16 text-center glow-brand">
            <Aurora />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl"
            />
            <div className="relative z-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white overflow-hidden shadow-[0_0_28px_rgba(14,165,233,0.35)]">
              <Image src={LOGO} alt="GR Scale logo" width={64} height={64} className="h-full w-full object-cover" />
            </div>
            <h2 className="h2 mb-4 max-w-2xl mx-auto">
              Your Competitors Already Have a Website. Let&apos;s Build Yours.
            </h2>
            <p className="lead mb-8 max-w-xl mx-auto">
              One free 20-minute call shows you exactly what&apos;s costing you customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="btn-primary px-10 py-4 text-base">
                Get Your Free Website Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+18138695917" className="btn-ghost px-10 py-4 text-base">
                Call (813) 869-5917
              </a>
            </div>
            <p className="mt-6 text-xs text-[var(--text-dim)]">
              <Clock className="inline h-3.5 w-3.5 mr-1" />
              Respond within a few hours · Serving businesses nationwide
            </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

    </div>
  )
}
