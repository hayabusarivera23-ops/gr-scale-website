import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock } from 'lucide-react'
import { SITE, PRICE } from '@/lib/site'
import { STORE, BUNDLE, itemHref, bookHref, sampleFor, type StoreItem } from '@/lib/agentStore'
import { AgentIcon, StatusBadge, JsonLd } from '@/components/AgentBits'

export const metadata: Metadata = {
  title: 'AI Agents for Local Businesses: Prices and What You Get | GR Scale',
  description: 'The GR Scale agent store: website + booking, Google profile setup, missed-call text-back, Review Getter and an AI receptionist. Clear prices. Free demo first.',
  alternates: { canonical: '/agents' },
  openGraph: { title: 'The GR Scale agent store', description: 'Pick the agents your business needs. Clear prices, free demo first.', url: '/agents' },
}

const agents = STORE.filter(i => i.kind === 'agent')

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      '@id': `${SITE.url}/agents#list`,
      name: 'GR Scale agents',
      itemListElement: STORE.map((i, n) => ({ '@type': 'ListItem', position: n + 1, name: i.name, url: SITE.url + itemHref(i) })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Agents', item: `${SITE.url}/agents` },
      ],
    },
  ],
}

function SampleLink({ item, className = 'mt-3 self-center' }: { item: StoreItem; className?: string }) {
  const sample = sampleFor(item)
  if (!sample) return null
  return (
    <Link href={sample.href} className={`inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300 transition ${className}`} aria-label={`${sample.label}: ${item.name}`}>
      {sample.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

function AgentCard({ item }: { item: StoreItem }) {
  return (
    <article className="card h-full flex flex-col" aria-labelledby={`a-${item.slug}`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/20">
          <AgentIcon slug={item.slug} />
        </div>
        <StatusBadge status={item.status} badge={item.badge} />
      </div>
      <h3 id={`a-${item.slug}`} className="text-xl font-bold text-white mb-1">{item.name}</h3>
      <p className="text-sm font-semibold text-brand-300 mb-3">{item.tagline}</p>
      <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.does}</p>

      <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="text-lg font-extrabold text-white">{item.price}</p>
        <p className="flex items-center gap-1.5 text-xs text-[var(--text-dim)]"><Clock className="h-3.5 w-3.5" aria-hidden="true" /> {item.timeline}</p>
      </div>

      <div className="mt-5 border-t border-white/5 pt-4 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">What you need to give us</p>
        <ul className="flex flex-col gap-1.5">
          {item.needs.map(n => (
            <li key={n} className="flex items-start gap-2 text-sm text-white/85"><span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400" /> {n}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link href={bookHref(item)} className="btn-primary flex-1 justify-center py-3" aria-label={`${item.status === 'early' ? 'Join early access for' : 'Get a free demo of'} ${item.name}`}>
          {item.status === 'early' ? 'Join early access' : 'Get a free demo'} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link href={itemHref(item)} className="btn-ghost flex-1 justify-center py-3" aria-label={`How ${item.name} works`}>
          How it works
        </Link>
      </div>
      <SampleLink item={item} />
    </article>
  )
}

export default function AgentsPage() {
  return (
    <div className="pt-24">
      <JsonLd data={SCHEMA} />

      <section className="section pb-10">
        <div className="container-site max-w-3xl text-center">
          <span className="badge mb-4">Agent store</span>
          <h1 className="h1 mb-4">Pick the agents your business needs.</h1>
          <p className="lead">Each agent does one job so you don’t have to. Clear prices, a free demo before you pay, and no contracts.</p>
        </div>
      </section>

      {/* Recommended pick */}
      <section className="pb-12">
        <div className="container-site max-w-5xl">
          <div className="relative rounded-2xl border border-brand-500/60 bg-gradient-to-b from-brand-500/10 to-transparent shadow-[0_0_40px_rgba(14,165,233,0.15)] p-6 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="badge">Recommended · start here</span>
              <StatusBadge status={BUNDLE.status} badge={BUNDLE.badge} />
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="h2 mb-2">{BUNDLE.name}</h2>
                <p className="text-[var(--text-muted)] mb-5">{BUNDLE.does}</p>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-5xl font-extrabold text-white">${PRICE.founding}</span>
                  <span className="text-[var(--text-muted)] mb-2">/month</span>
                </div>
                <p className="text-sm text-[var(--text-muted)]">+ ${PRICE.setup} one-time setup. {BUNDLE.priceNote}</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link href={bookHref(BUNDLE)} className="btn-primary justify-center px-6 py-3">Get a free demo <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                  <Link href={itemHref(BUNDLE)} className="btn-ghost justify-center px-6 py-3" aria-label="How the Front Desk Bundle works">How it works</Link>
                </div>
                <SampleLink item={BUNDLE} className="mt-3" />
              </div>
              <div>
                <ul className="flex flex-col gap-3">
                  {BUNDLE.includes.map(t => (
                    <li key={t} className="flex items-center gap-3 text-sm text-white/90"><CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" aria-hidden="true" /> {t}</li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-[var(--text-dim)]">What you need to give us: {BUNDLE.needs.join(' · ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="section pt-4">
        <div className="container-site max-w-5xl">
          <div className="mb-8">
            <h2 className="h2 mb-2">Or pick one agent</h2>
            <p className="text-[var(--text-muted)]">Start with one. Add more any time.</p>
          </div>
          <ul className="grid gap-6 md:grid-cols-2">
            {agents.map(item => <li key={item.slug}><AgentCard item={item} /></li>)}
          </ul>
        </div>
      </section>

      {/* Honest notes */}
      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-3xl">
          <h2 className="h2 mb-6 text-center">Before you pick</h2>
          <ul className="flex flex-col gap-3">
            {[
              ['Free demo first.', 'We build a demo for your business before you pay anything.'],
              ['Texting needs carrier approval.', 'Missed-call text-back and review texts start after U.S. phone carriers approve your business. We file the registration once your site is live, and the timing is up to the carriers (usually 1–2 weeks).'],
              ['Available vs. early access.', 'Available agents are set up for you now, with texting parts waiting on carrier approval. The AI Receptionist is early access with limited spots.'],
              ['No contracts.', 'Month to month. Cancel with 14 days’ notice.'],
            ].map(([t, d]) => (
              <li key={t} className="card flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-white/90"><strong className="text-white">{t}</strong> {d}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book" className="btn-primary justify-center px-8 py-4 text-base">Get a free demo <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/pricing" className="btn-ghost justify-center px-8 py-4 text-base">Compare prices</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
