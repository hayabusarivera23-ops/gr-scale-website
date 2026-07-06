import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, ExternalLink, CheckCircle, Star, Smartphone, Search,
  Zap, Target, Paintbrush, Wrench, Droplets, Flame, Bug, TreePine,
  Sparkles, Layers, Scissors, Utensils, Leaf, Waves, Home as HomeIcon,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio & Live Demos — GR Scale | Websites for Local Service Businesses',
  description: 'Real client work and 13 live industry demos. See exactly what your business could look like online — roofing, plumbing, HVAC, barbershops, and more.',
}

const DEMO_BASE = 'https://gr-scale-demos.vercel.app'

const BADGES = [
  { icon: Smartphone, label: 'Mobile Friendly' },
  { icon: Search,     label: 'SEO Ready' },
  { icon: Zap,        label: 'Fast Loading' },
  { icon: Target,     label: 'Lead Focused' },
  { icon: Paintbrush, label: 'Custom Design' },
]

const DEMOS = [
  { slug: 'roofing',          icon: HomeIcon,  niche: 'Roofing',          name: 'Peak Roofing Solutions',  desc: 'Storm-damage lead capture, insurance claim section, financing, and drag-to-compare project gallery.', features: ['Insurance claims section', 'Financing calculator CTA', 'Before/after sliders', 'Free inspection form'] },
  { slug: 'plumbing',         icon: Droplets,  niche: 'Plumbing',         name: 'Elite Plumbing Co',       desc: '24/7 emergency-first design that turns burst-pipe panic into booked jobs.', features: ['Emergency call flow', 'Flat-rate trust badges', 'Hero quote form', 'Review showcase'] },
  { slug: 'hvac',             icon: Flame,     niche: 'HVAC',             name: 'CoolPro HVAC',            desc: 'Same-day service positioning with maintenance plan upsells built in.', features: ['Same-day CTA', 'Maintenance plans', 'Animated trust stats', 'Service area map'] },
  { slug: 'electrician',      icon: Zap,       niche: 'Electrical',       name: 'Bright Current Electric', desc: 'EV charger and panel upgrade pages that capture high-ticket searches.', features: ['EV charger page', 'Safety inspection offer', 'Financing section', 'Emergency CTA'] },
  { slug: 'barber',           icon: Scissors,  niche: 'Barbershop',       name: 'Barber Demo',             desc: 'Booking-first barbershop site that fills chairs while you cut.', features: ['Booking CTA', 'Service menu + pricing', 'Gallery', 'Brand-forward design'] },
  { slug: 'pest-control',     icon: Bug,       niche: 'Pest Control',     name: 'ShieldPro Pest',          desc: 'Monthly protection plans front and center — recurring revenue by design.', features: ['Protection plans', 'Re-treat guarantee', 'Pest library', 'Quote form'] },
  { slug: 'painting',         icon: Paintbrush,niche: 'Painting',         name: 'TrueCoat Painting',       desc: 'Portfolio-driven design with free color consultation lead magnet.', features: ['Project portfolio', 'Color consult offer', 'Cabinet painting page', '5-yr warranty badges'] },
  { slug: 'flooring',         icon: Layers,    niche: 'Flooring',         name: 'Solid Ground Flooring',   desc: 'Big-ticket flooring sales supported by financing and in-home estimate flow.', features: ['Financing section', 'In-home estimate CTA', 'Material comparison', 'Install warranty'] },
  { slug: 'tree-service',     icon: TreePine,  niche: 'Tree Service',     name: 'IronOak Tree Service',    desc: 'Emergency removal and crane work with insurance documentation angle.', features: ['24/7 storm response', 'Crane work showcase', 'Arborist credibility', 'Free estimates'] },
  { slug: 'cleaning',         icon: Sparkles,  niche: 'Cleaning',         name: 'FreshNest Cleaning',      desc: 'Recurring plan sales with a 200% guarantee that closes trust instantly.', features: ['Recurring plans', '200% guarantee', 'Booking form', 'Airbnb turnovers'] },
  { slug: 'landscaping',      icon: Leaf,      niche: 'Landscaping',      name: 'Landscaping Demo',        desc: 'Seasonal package selling for year-round contracts, not one-off mows.', features: ['Seasonal packages', 'Before/after gallery', 'Estimate form', 'Maintenance plans'] },
  { slug: 'pressure-washing', icon: Waves,     niche: 'Pressure Washing', name: 'Pressure Washing Demo',   desc: 'Before/after-driven design where the transformation does the selling.', features: ['Comparison sliders', 'Instant quote CTA', 'Service bundles', 'Service area map'] },
  { slug: 'restaurant',       icon: Utensils,  niche: 'Restaurant',       name: 'Casa Verde Kitchen',      desc: 'Menu-forward restaurant site with reservations and private event booking.', features: ['Menu showcase', 'Reservation CTA', 'Private events page', 'Photo gallery'] },
]

export default function DemosPage() {
  return (
    <div className="bg-zinc-950 text-zinc-100">

      {/* ── Header ── */}
      <section className="pt-24 pb-14 text-center px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">Portfolio & Live Demos</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 max-w-3xl mx-auto">
          See What Your Business Could Look Like Online
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Real client work plus 13 live industry demos — every one mobile-friendly, fast,
          and built to turn visitors into phone calls. Click any demo and judge for yourself.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-7">
          {BADGES.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 px-3.5 py-1.5 text-xs font-semibold text-zinc-300">
              <Icon className="h-3.5 w-3.5 text-sky-400" /> {label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Featured: Melo Air (real client) ── */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto rounded-3xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 via-zinc-900 to-zinc-950 p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 border border-sky-500/30 px-3 py-1 text-xs font-bold text-sky-400 uppercase tracking-wider">
              <Star className="h-3.5 w-3.5" /> Featured Real Client Project
            </span>
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">● Live</span>
          </div>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-3">Melo Air — Tampa HVAC</h2>
              <p className="text-zinc-400 leading-relaxed mb-5">
                A complete 12-page rebuild for a family-owned Tampa HVAC company serving customers
                since 2006. Built from their real reviews, license, and service areas — designed to
                make the phone ring, not just look good.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {['12 SEO-optimized pages', 'LocalBusiness schema', 'Real Google reviews', 'Click-to-call everywhere', 'Maintenance plan sales', 'Next.js + Tailwind stack'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle className="h-4 w-4 text-sky-400 shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <a href="https://meloair-v2.vercel.app" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 transition">
                View Live Website <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Why this project works</p>
              {[
                ['Trust above the fold', 'License, years in business, and reviews visible in the first screen.'],
                ['Every page sells one action', 'Call now or request an estimate — nothing distracts from it.'],
                ['Built for Google', 'Structured data, per-page SEO, and speed scores that outrank template sites.'],
              ].map(([t, d]) => (
                <div key={t} className="mb-4 last:mb-0">
                  <p className="text-sm font-bold text-zinc-200">{t}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Demo grid ── */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold mb-3">13 Industries. One Standard: Premium.</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Every demo is a real, working website — open them on your phone, that&apos;s where your customers are.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DEMOS.map(d => {
              const Icon = d.icon
              return (
                <div key={d.slug} className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 flex flex-col hover:border-sky-500/40 hover:bg-zinc-900 transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 shrink-0">
                      <Icon className="h-5 w-5 text-sky-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-sky-400">{d.niche}</p>
                      <h3 className="text-base font-bold text-zinc-100">{d.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{d.desc}</p>
                  <div className="space-y-1.5 mb-5">
                    {d.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-xs text-zinc-500">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500/70 shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-2">
                    <a href={`${DEMO_BASE}/${d.slug}`} target="_blank" rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-800 group-hover:bg-sky-500 px-4 py-2.5 text-sm font-bold text-zinc-200 group-hover:text-white transition">
                      View Live Demo <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto text-center rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10">
          <h2 className="text-3xl font-extrabold mb-4">Want Your Business to Look Like This?</h2>
          <p className="text-zinc-400 mb-7 leading-relaxed">
            Professional websites for local service businesses — mobile-friendly, fast, and built
            to turn visitors into leads. Live within 7 days of your go-ahead.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 transition">
              Get a Free Website Audit <ArrowRight className="h-4 w-4" />
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
