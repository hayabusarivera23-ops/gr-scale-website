'use client'

/**
 * Demo Theater — interactive viewer for the /demos page.
 *
 * A grid of all 13 niche demos (plus the two REAL client sites, featured
 * and visually distinct) where every card's thumbnail is the actual living
 * website (LiveThumb — scaled lazy iframe, no screenshots to maintain).
 * Clicking a card loads that site into a large 3D browser-frame viewer that
 * stays sticky at the top on desktop; visitors can scroll and click inside
 * the demo, then jump straight to /book?niche={niche}.
 */

import { useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight, ExternalLink, CheckCircle, Star, Smartphone, Search,
  Zap, Target, Paintbrush, Droplets, Flame, Bug, TreePine,
  Sparkles, Layers, Scissors, Utensils, Leaf, Waves, Home as HomeIcon,
  MonitorPlay,
} from 'lucide-react'
import { Reveal, LiveThumb } from '@/components/FX'

const DEMO_BASE = 'https://gr-scale-demos.vercel.app'

interface TheaterEntry {
  slug: string
  kind: 'client' | 'demo'
  icon: React.ComponentType<{ className?: string }>
  niche: string
  name: string
  desc: string
  features: string[]
  url: string
  /** tailwind gradient for the thumbnail fallback while the live site loads */
  gradient: string
}

const REAL_CLIENTS: TheaterEntry[] = [
  {
    slug: 'meloair', kind: 'client', icon: Flame, niche: 'HVAC',
    name: 'Melo Air — Tampa HVAC',
    desc: 'Complete 12-page rebuild for a family-owned HVAC company serving customers since 2006. Built from their real reviews, license, and service areas — and live on their own domain right now.',
    features: ['12 SEO-optimized pages', 'Real Google reviews', 'Click-to-call everywhere', 'Maintenance plan sales', 'LocalBusiness schema'],
    url: 'https://www.meloair.net',
    gradient: 'from-sky-500/25 to-blue-600/10',
  },
  {
    slug: 'lexthebarber', kind: 'client', icon: Scissors, niche: 'Barbershop',
    name: 'LexTheBarber',
    desc: 'Booking-first barbershop site built from scratch — service menu, cut gallery, and a brand-forward design that fills chairs while he cuts. Live on the client\'s own domain.',
    features: ['Booking CTA', 'Service menu + pricing', 'Cut gallery', 'Mobile-first design'],
    url: 'https://lexthebarber.com',
    gradient: 'from-violet-500/25 to-purple-600/10',
  },
]

const DEMOS: TheaterEntry[] = [
  { slug: 'roofing',          kind: 'demo', icon: HomeIcon,   niche: 'Roofing',          name: 'Peak Roofing Solutions',  desc: 'Storm-damage lead capture, insurance claim section, financing, and drag-to-compare project gallery.', features: ['Insurance claims section', 'Financing calculator CTA', 'Before/after sliders', 'Free inspection form'], url: `${DEMO_BASE}/roofing`,          gradient: 'from-amber-500/20 to-orange-600/10' },
  { slug: 'plumbing',         kind: 'demo', icon: Droplets,   niche: 'Plumbing',         name: 'Elite Plumbing Co',       desc: '24/7 emergency-first design that turns burst-pipe panic into booked jobs.', features: ['Emergency call flow', 'Flat-rate trust badges', 'Hero quote form', 'Review showcase'], url: `${DEMO_BASE}/plumbing`,         gradient: 'from-blue-500/20 to-cyan-600/10' },
  { slug: 'hvac',             kind: 'demo', icon: Flame,      niche: 'HVAC',             name: 'CoolPro HVAC',            desc: 'Same-day service positioning with maintenance plan upsells built in.', features: ['Same-day CTA', 'Maintenance plans', 'Animated trust stats', 'Service area map'], url: `${DEMO_BASE}/hvac`,             gradient: 'from-sky-500/20 to-blue-600/10' },
  { slug: 'electrician',      kind: 'demo', icon: Zap,        niche: 'Electrical',       name: 'Bright Current Electric', desc: 'EV charger and panel upgrade pages that capture high-ticket searches.', features: ['EV charger page', 'Safety inspection offer', 'Financing section', 'Emergency CTA'], url: `${DEMO_BASE}/electrician`,      gradient: 'from-yellow-500/20 to-amber-600/10' },
  { slug: 'barber',           kind: 'demo', icon: Scissors,   niche: 'Barbershop',       name: 'Barbershop Demo',         desc: 'Booking-first barbershop design — service menu, gallery, and Instagram-ready brand feel.', features: ['Booking CTA', 'Service menu + pricing', 'Gallery', 'Brand-forward design'], url: `${DEMO_BASE}/barber`,           gradient: 'from-violet-500/20 to-purple-600/10' },
  { slug: 'pest-control',     kind: 'demo', icon: Bug,        niche: 'Pest Control',     name: 'ShieldPro Pest',          desc: 'Monthly protection plans front and center — recurring revenue by design.', features: ['Protection plans', 'Re-treat guarantee', 'Pest library', 'Quote form'], url: `${DEMO_BASE}/pest-control`,     gradient: 'from-emerald-500/20 to-green-600/10' },
  { slug: 'painting',         kind: 'demo', icon: Paintbrush, niche: 'Painting',         name: 'TrueCoat Painting',       desc: 'Portfolio-driven design with free color consultation lead magnet.', features: ['Project portfolio', 'Color consult offer', 'Cabinet painting page', '5-yr warranty badges'], url: `${DEMO_BASE}/painting`,         gradient: 'from-rose-500/20 to-pink-600/10' },
  { slug: 'flooring',         kind: 'demo', icon: Layers,     niche: 'Flooring',         name: 'Solid Ground Flooring',   desc: 'Big-ticket flooring sales supported by financing and in-home estimate flow.', features: ['Financing section', 'In-home estimate CTA', 'Material comparison', 'Install warranty'], url: `${DEMO_BASE}/flooring`,         gradient: 'from-orange-500/20 to-amber-700/10' },
  { slug: 'tree-service',     kind: 'demo', icon: TreePine,   niche: 'Tree Service',     name: 'IronOak Tree Service',    desc: 'Emergency removal and crane work with insurance documentation angle.', features: ['24/7 storm response', 'Crane work showcase', 'Arborist credibility', 'Free estimates'], url: `${DEMO_BASE}/tree-service`,     gradient: 'from-green-600/20 to-emerald-700/10' },
  { slug: 'cleaning',         kind: 'demo', icon: Sparkles,   niche: 'Cleaning',         name: 'FreshNest Cleaning',      desc: 'Recurring plan sales with a 200% guarantee that closes trust instantly.', features: ['Recurring plans', '200% guarantee', 'Booking form', 'Airbnb turnovers'], url: `${DEMO_BASE}/cleaning`,         gradient: 'from-cyan-500/20 to-teal-600/10' },
  { slug: 'landscaping',      kind: 'demo', icon: Leaf,       niche: 'Landscaping',      name: 'Landscaping Demo',        desc: 'Seasonal package selling for year-round contracts, not one-off mows.', features: ['Seasonal packages', 'Before/after gallery', 'Estimate form', 'Maintenance plans'], url: `${DEMO_BASE}/landscaping`,      gradient: 'from-green-500/20 to-emerald-600/10' },
  { slug: 'pressure-washing', kind: 'demo', icon: Waves,      niche: 'Pressure Washing', name: 'Pressure Washing Demo',   desc: 'Before/after-driven design where the transformation does the selling.', features: ['Comparison sliders', 'Instant quote CTA', 'Service bundles', 'Service area map'], url: `${DEMO_BASE}/pressure-washing`, gradient: 'from-orange-500/20 to-red-600/10' },
  { slug: 'restaurant',       kind: 'demo', icon: Utensils,   niche: 'Restaurant',       name: 'Casa Verde Kitchen',      desc: 'Menu-forward restaurant site with reservations and private event booking.', features: ['Menu showcase', 'Reservation CTA', 'Private events page', 'Photo gallery'], url: `${DEMO_BASE}/restaurant`,       gradient: 'from-red-500/20 to-rose-600/10' },
]

const ALL_ENTRIES = [...REAL_CLIENTS, ...DEMOS]
const NICHES = Array.from(new Set(ALL_ENTRIES.map(e => e.niche)))

const BADGES = [
  { icon: Smartphone, label: 'Mobile Friendly' },
  { icon: Search,     label: 'SEO Ready' },
  { icon: Zap,        label: 'Fast Loading' },
  { icon: Target,     label: 'Lead Focused' },
  { icon: Paintbrush, label: 'Custom Design' },
]

function displayUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '')
}

export default function DemoTheater() {
  const [selected, setSelected] = useState<TheaterEntry>(REAL_CLIENTS[0])
  const [filter, setFilter] = useState<string>('All')
  const viewerRef = useRef<HTMLDivElement>(null)

  function openInTheater(entry: TheaterEntry) {
    setSelected(entry)
    viewerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const visibleClients = REAL_CLIENTS.filter(e => filter === 'All' || e.niche === filter)
  const visibleDemos = DEMOS.filter(e => filter === 'All' || e.niche === filter)
  const bookHref = `/book?niche=${encodeURIComponent(selected.niche)}`

  return (
    <div className="bg-zinc-950 text-zinc-100">

      {/* ── Header ── */}
      <section className="pt-24 pb-10 text-center px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">Demo Theater</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 max-w-3xl mx-auto">
          See What Your Business Could Look Like Online
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Real client work plus 13 live industry demos. Every thumbnail below is the actual
          living website — tap any card to load it in the viewer, scroll it, click it, judge it.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-7">
          {BADGES.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 px-3.5 py-1.5 text-xs font-semibold text-zinc-300">
              <Icon className="h-3.5 w-3.5 text-sky-400" /> {label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Theater viewer (sticky on desktop) ── */}
      <div ref={viewerRef} className="lg:sticky lg:top-16 z-20 bg-zinc-950/95 backdrop-blur border-b border-zinc-800/60 scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div key={selected.slug} className="theater-frame browser-frame shadow-[0_30px_90px_rgba(0,0,0,0.55),0_0_60px_rgba(14,165,233,0.18)]">
            <div className="browser-bar">
              <span className="browser-dot" style={{ background: '#ff5f57' }} />
              <span className="browser-dot" style={{ background: '#febc2e' }} />
              <span className="browser-dot" style={{ background: '#28c840' }} />
              <span className="browser-url">{displayUrl(selected.url)}</span>
              {selected.kind === 'client' && (
                <span className="ml-auto hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 whitespace-nowrap">
                  ● Real client site
                </span>
              )}
            </div>
            <iframe src={selected.url} title={`Live website: ${selected.name}`} loading="lazy" />
          </div>

          {/* Info bar under the frame */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
            <div className="min-w-0 flex-1 basis-56">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">{selected.niche}</span>
                {selected.kind === 'client' && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400"><Star className="h-3 w-3" /> Real client</span>
                )}
              </div>
              <p className="text-base font-bold text-zinc-100 truncate">{selected.name}</p>
              <p className="hidden sm:block text-xs text-zinc-500 mt-1">
                Included: {selected.features.slice(0, 4).join(' · ')}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link href={bookHref}
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 transition">
                Get one like this for your business <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={selected.url} target="_blank" rel="noopener noreferrer" aria-label="Open live site in a new tab"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 p-3 text-zinc-300 hover:border-zinc-500 hover:text-white transition">
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter chips ── */}
      <section className="px-4 pt-10 pb-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2">
          {['All', ...NICHES].map(n => (
            <button key={n} onClick={() => setFilter(n)}
              className={`rounded-full border px-4 py-1.5 text-xs font-bold transition ${
                filter === n
                  ? 'border-sky-500/60 bg-sky-500/15 text-sky-300'
                  : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
              }`}>
              {n}
            </button>
          ))}
        </div>
      </section>

      {/* ── Real client work (featured, distinct) ── */}
      {visibleClients.length > 0 && (
        <section className="px-4 pb-12">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="flex items-center gap-2 mb-5">
                <Star className="h-4 w-4 text-emerald-400" />
                <h2 className="text-xl font-extrabold">Real Client Work — Live Right Now</h2>
                <span className="text-xs text-zinc-600 hidden sm:inline">no mockups, real domains</span>
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {visibleClients.map((e, i) => (
                <Reveal key={e.slug} delay={i * 120} className="h-full">
                  <button onClick={() => openInTheater(e)}
                    className="group w-full h-full text-left rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.07] via-zinc-900 to-zinc-950 p-5 hover:border-emerald-400/50 transition">
                    <div className={`relative mb-4 rounded-xl border border-zinc-800 bg-gradient-to-br ${e.gradient}`}>
                      <LiveThumb src={e.url} label={e.name} />
                      <span className="absolute top-2 left-2 z-10 inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[10px] font-black text-white uppercase tracking-wider">
                        <Star className="h-3 w-3" /> Real Client
                      </span>
                      <span className="absolute bottom-2 right-2 z-10 rounded-md bg-zinc-950/80 px-2 py-1 text-[10px] font-semibold text-zinc-300">
                        {displayUrl(e.url)}
                      </span>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">{e.niche}</p>
                    <h3 className="text-lg font-bold text-zinc-100 mb-2">{e.name}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">{e.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:gap-3 transition-all">
                      <MonitorPlay className="h-4 w-4" /> Load in viewer
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Demo grid ── */}
      {visibleDemos.length > 0 && (
        <section className="px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold mb-3">13 Industries. One Standard: Premium.</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">Every card below is a real, working website streaming live — tap one to explore it in the viewer.</p>
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleDemos.map((d, i) => {
                const Icon = d.icon
                return (
                  <Reveal key={d.slug} delay={(i % 3) * 100} className="h-full">
                    <button onClick={() => openInTheater(d)}
                      className={`group w-full h-full text-left rounded-2xl border p-4 flex flex-col transition ${
                        selected.slug === d.slug
                          ? 'border-sky-500/60 bg-zinc-900'
                          : 'border-zinc-800 bg-zinc-900/60 hover:border-sky-500/40 hover:bg-zinc-900'
                      }`}>
                      <div className={`relative mb-4 rounded-xl border border-zinc-800 bg-gradient-to-br ${d.gradient}`}>
                        <LiveThumb src={d.url} label={d.name} />
                        <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-zinc-950/40 rounded-xl">
                          <span className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-xs font-bold text-white">
                            <MonitorPlay className="h-3.5 w-3.5" /> View in theater
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 shrink-0">
                          <Icon className="h-5 w-5 text-sky-400" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-wider text-sky-400">{d.niche}</p>
                          <h3 className="text-base font-bold text-zinc-100 truncate">{d.name}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed mb-3">{d.desc}</p>
                      <div className="space-y-1.5 mb-4">
                        {d.features.slice(0, 3).map(f => (
                          <div key={f} className="flex items-center gap-2 text-xs text-zinc-500">
                            <CheckCircle className="h-3.5 w-3.5 text-emerald-500/70 shrink-0" /> {f}
                          </div>
                        ))}
                      </div>
                      <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-sky-400 group-hover:gap-3 transition-all">
                        <MonitorPlay className="h-3.5 w-3.5" /> Load in viewer
                      </span>
                    </button>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto text-center rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10">
          <h2 className="text-3xl font-extrabold mb-4">Want Your Business to Look Like This?</h2>
          <p className="text-zinc-400 mb-7 leading-relaxed">
            Professional websites for local service businesses nationwide — mobile-friendly, fast, and built
            to turn visitors into leads.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 transition">
              Get Your Free Website Audit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-8 py-4 text-sm font-semibold text-zinc-200 hover:border-zinc-500 transition">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
