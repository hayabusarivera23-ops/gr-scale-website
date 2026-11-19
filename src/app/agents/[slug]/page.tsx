import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle, Clock, AlertTriangle, ChevronRight } from 'lucide-react'
import { SITE } from '@/lib/site'
import { STORE, BUNDLE, BUNDLE_AGENT_NAMES, getItem, itemHref, bookHref, statusLabel, sampleFor } from '@/lib/agentStore'
import { AgentIcon, StatusBadge, JsonLd } from '@/components/AgentBits'

export const dynamicParams = false
export function generateStaticParams() {
  return STORE.map(i => ({ slug: i.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getItem((await params).slug)
  if (!item) return {}
  return {
    title: `${item.seoTitle} | GR Scale`,
    description: item.seoDescription,
    alternates: { canonical: itemHref(item) },
    openGraph: { title: `${item.name} — GR Scale`, description: item.seoDescription, url: itemHref(item) },
  }
}

export default async function AgentPage({ params }: Props) {
  const item = getItem((await params).slug)
  if (!item) notFound()

  const url = SITE.url + itemHref(item)
  const early = item.status === 'early'
  const cta = early ? 'Join early access' : 'Get a free demo'
  const inBundle = item.kind === 'agent' && BUNDLE_AGENT_NAMES.includes(item.name)
  const sample = sampleFor(item)
  const others = STORE.filter(i => i.slug !== item.slug && i.kind === 'agent').slice(0, 4)

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: item.name,
        description: item.does,
        url,
        serviceType: item.name,
        provider: { '@id': `${SITE.url}/#business` },
        areaServed: { '@type': 'City', name: 'Tampa' },
        offers: item.offers.map(o => ({
          '@type': 'Offer',
          name: `${item.name}: ${o.name}`,
          price: String(o.price),
          priceCurrency: 'USD',
          url,
          // Early access is not generally purchasable yet
          availability: early || item.badge ? 'https://schema.org/LimitedAvailability' : 'https://schema.org/InStock',
          ...(o.unit ? { priceSpecification: { '@type': 'UnitPriceSpecification', price: String(o.price), priceCurrency: 'USD', unitCode: o.unit, billingDuration: 'P1M' } } : {}),
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: item.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Agents', item: `${SITE.url}/agents` },
          { '@type': 'ListItem', position: 3, name: item.name, item: url },
        ],
      },
    ],
  }

  return (
    <div className="pt-24">
      <JsonLd data={schema} />

      {/* Header */}
      <section className="section pb-10">
        <div className="container-site max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-[var(--text-muted)]">
              <li><Link href="/agents" className="inline-flex min-h-[44px] items-center hover:text-white transition">All agents</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
              <li aria-current="page" className="text-white/90">{item.name}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/20">
                  <AgentIcon slug={item.slug} />
                </div>
                <StatusBadge status={item.status} badge={item.badge} />
                {item.kind === 'bundle' && <span className="badge">Recommended</span>}
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl mb-4">{item.name}</h1>
              <p className="text-lg font-semibold text-brand-300 mb-3">{item.tagline}</p>
              <p className="lead">{item.does}</p>
              {sample && (
                <Link href={sample.href} className="btn-ghost mt-6 justify-center px-6 py-3" data-test="see-sample">
                  {sample.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </div>

            {/* Price box */}
            <aside aria-label="Price" className="rounded-2xl border border-brand-500/40 bg-gradient-to-b from-brand-500/10 to-transparent p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-2">Price</p>
              <p className="text-3xl font-extrabold text-white">{item.price}</p>
              {item.priceNote && <p className="mt-2 text-sm text-[var(--text-muted)]">{item.priceNote}</p>}
              <p className="mt-3 flex items-start gap-2 text-sm text-[var(--text-muted)]"><Clock className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" /> {item.timeline}</p>
              {inBundle && (
                <p className="mt-3 text-sm text-emerald-300">
                  Included in the <Link href={itemHref(BUNDLE)} className="underline underline-offset-2 hover:text-emerald-200">Front Desk Bundle</Link>.
                </p>
              )}
              <Link href={bookHref(item)} className="btn-primary mt-6 w-full justify-center py-4 text-base">
                {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="mt-3 text-center text-xs text-[var(--text-dim)]">
                {early ? 'No payment to join the list.' : 'Free. No card. You only pay if you want it.'}
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-5xl">
          <h2 className="h2 mb-8">How it works</h2>
          <ol className="grid gap-5 md:grid-cols-3">
            {item.steps.map((s, i) => (
              <li key={s.t} className="card">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15 text-brand-300 font-bold mb-3">{i + 1}</span>
                <h3 className="text-lg font-bold text-white mb-1.5">{s.t}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What you get / give / do */}
      <section className="section">
        <div className="container-site max-w-5xl grid gap-6 md:grid-cols-3">
          <div className="card">
            <h2 className="text-lg font-bold text-white mb-4">What you get</h2>
            <ul className="flex flex-col gap-2.5">
              {item.includes.map(t => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-white/90"><CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2 className="text-lg font-bold text-white mb-4">What you need to give us</h2>
            <ul className="flex flex-col gap-2.5">
              {item.needs.map(t => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-white/90"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2 className="text-lg font-bold text-white mb-1">What you have to do</h2>
            <p className="text-sm text-[var(--text-muted)] mb-4">Almost nothing. We do the setup.</p>
            <ul className="flex flex-col gap-2.5">
              {item.ownerDoes.map(t => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-white/90"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Honest limits */}
      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-amber-300" aria-hidden="true" />
            <h2 className="h2">Honest limits</h2>
          </div>
          <p className="text-[var(--text-muted)] mb-6">What this {item.kind === 'bundle' ? 'bundle' : 'agent'} does not do, so there are no surprises.</p>
          <ul className="flex flex-col gap-3">
            {item.limits.map(t => (
              <li key={t} className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-4 text-sm text-white/90 leading-relaxed">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-site max-w-3xl">
          <h2 className="h2 mb-6">Questions about {item.name}</h2>
          <div className="flex flex-col gap-3">
            {item.faqs.map(f => (
              <details key={f.q} className="card group">
                <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4 text-base font-semibold text-white list-none">
                  {f.q}
                  <span aria-hidden="true" className="text-brand-400 text-xl leading-none transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + other agents */}
      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="h2 mb-3">{early ? 'Want in early?' : 'See it for your business first.'}</h2>
            <p className="lead mb-6">{early ? 'Tell us about your business and we’ll tell you honestly if it’s a fit.' : 'We build your demo before you pay anything.'}</p>
            <Link href={bookHref(item)} className="btn-primary justify-center px-8 py-4 text-base">{cta} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>

          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)] mb-4">{item.kind === 'bundle' ? 'Or pick one agent' : 'Other agents'}</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map(o => (
              <li key={o.slug}>
                <Link href={itemHref(o)} className="card flex h-full flex-col gap-2">
                  <AgentIcon slug={o.slug} className="h-5 w-5 text-brand-400" />
                  <span className="font-bold text-white">{o.name}</span>
                  <span className="text-sm text-[var(--text-muted)]">{o.price}</span>
                  <span className="text-xs text-[var(--text-dim)]">{statusLabel(o)}</span>
                </Link>
              </li>
            ))}
          </ul>
          {item.kind === 'agent' && (
            <p className="mt-6 text-sm text-[var(--text-muted)]">
              Want more than one? The <Link href={itemHref(BUNDLE)} className="text-brand-400 underline underline-offset-2 hover:text-brand-300">Front Desk Bundle</Link> covers website, Google profile, text-back and reviews for one price.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
