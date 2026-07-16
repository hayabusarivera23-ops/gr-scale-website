import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    price: '$500',
    note: 'build · then $99/mo',
    desc: 'Perfect for local businesses that need a professional web presence fast.',
    compare: 'Best if you just need a clean, professional site live fast — nothing you don\'t need.',
    highlight: false,
    features: [
      'Custom homepage design',
      'Services + About + Contact pages',
      'Mobile responsive',
      'Contact / quote form',
      'Basic on-page SEO',
      'Google Analytics',
      'Hosting setup',
      '$99/mo plan: hosting, updates, daily backups, support',
    ],
    cta: '/book',
    ctaLabel: 'Get Started',
  },
  {
    name: 'Growth',
    price: '$750',
    note: 'build · then $299/mo',
    desc: 'For businesses ready to dominate their local market online.',
    compare: 'The sweet spot — more pages, Google Business setup, and local SEO working every month. Most clients pick this.',
    highlight: true,
    features: [
      'Everything in Starter',
      'Up to 8 pages',
      'Gallery / portfolio section',
      'FAQ page',
      'Google Business Profile setup',
      'Google Maps embed',
      'Speed optimization',
      '$299/mo plan: everything in Starter plan + local SEO, GBP management, monthly reports',
    ],
    cta: '/book',
    ctaLabel: 'Most Popular',
  },
  {
    name: 'Scale',
    price: '$1,200',
    note: 'build · then $599/mo',
    desc: 'Complete package for businesses serious about generating leads online.',
    compare: 'For lead generation as a system — booking, landing pages, and advanced SEO working from day one.',
    highlight: false,
    features: [
      'Everything in Growth',
      'Unlimited pages',
      'Online booking integration',
      'Blog setup',
      'Custom animations',
      'Priority response',
      '$599/mo plan: everything in Growth plan + advanced SEO, landing pages, AI chat, reputation management, lead tracking',
    ],
    cta: '/book',
    ctaLabel: 'Get Started',
  },
]

const ADDONS = [
  { name: 'Google Business Profile Optimization', price: '$150',     note: 'one-time'  },
  { name: 'Extra Landing Page',                   price: '$300',     note: 'per page'  },
  { name: 'Logo Design',                          price: '$200',     note: 'one-time'  },
  { name: 'Blog Post Writing',                    price: '$75',      note: 'per post'  },
  { name: 'Rush Delivery (3–5 days)',             price: '+$200',    note: 'add-on'    },
]

export default function PricingPage() {
  return (
    <div className="pt-24">
      <section className="section pb-0">
        <div className="container-site text-center max-w-3xl">
          <span className="badge mb-4">Pricing</span>
          <h1 className="h1 mb-4">Simple, Transparent Pricing</h1>
          <p className="lead">
            One build fee + a simple monthly plan that keeps your site fast, secure, and bringing in customers. No hidden fees. You own your site.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section">
        <div className="container-site">
          <div className="pricing-grid max-w-5xl mx-auto">
            {PLANS.map(p => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                  p.highlight
                    ? 'border-brand-500/60 bg-gradient-to-b from-brand-500/10 to-transparent shadow-[0_0_40px_rgba(14,165,233,0.15)] scale-105'
                    : 'border-white/7 bg-[#0d1117] hover:border-white/15'
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge">Most Popular</span>
                  </div>
                )}
                <p className="text-sm font-semibold text-[var(--text-dim)] uppercase tracking-widest mb-2">{p.name}</p>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-4xl font-extrabold text-white">{p.price}</span>
                  <span className="text-sm text-[var(--text-muted)]">{p.note}</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">{p.desc}</p>

                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                      <CheckCircle className={`h-4 w-4 shrink-0 mt-0.5 ${p.highlight ? 'text-brand-400' : 'text-green-400'}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <p className={`text-xs leading-relaxed mb-5 -mt-3 ${p.highlight ? 'text-brand-300/90' : 'text-[var(--text-dim)]'}`}>
                  {p.compare}
                </p>

                <Link
                  href={p.cta}
                  className={`text-center justify-center ${p.highlight ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {p.ctaLabel} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[var(--text-dim)] mt-8">
            All prices are in USD. Monthly plans cancel anytime with 14 days notice. Need something custom?{' '}
            <Link href="/contact" className="text-brand-400 hover:text-brand-300 transition">Contact us</Link>.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <span className="text-[var(--text-dim)]">Common questions:</span>
            <Link href="/faq" className="text-brand-400 hover:text-brand-300 transition">How long does a build take?</Link>
            <Link href="/faq" className="text-brand-400 hover:text-brand-300 transition">Do I own my site?</Link>
            <Link href="/faq" className="text-brand-400 hover:text-brand-300 transition">See all FAQs →</Link>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section bg-[#0d1117] pt-0">
        <div className="container-site max-w-3xl">
          <h2 className="h2 text-center mb-10">Add-Ons</h2>
          <div className="flex flex-col gap-3">
            {ADDONS.map(a => (
              <div key={a.name} className="card flex items-center justify-between py-4">
                <div>
                  <p className="text-sm font-medium text-white">{a.name}</p>
                  <p className="text-xs text-[var(--text-dim)]">{a.note}</p>
                </div>
                <span className="text-sm font-bold text-brand-400">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-site text-center max-w-2xl">
          <Zap className="h-10 w-10 text-brand-400 mx-auto mb-4" />
          <h2 className="h2 mb-4">Book a Free Audit First</h2>
          <p className="lead mb-8">
            Not sure which plan is right for you? Book a free call. We&apos;ll audit your online presence and recommend the right package — no sales pressure.
          </p>
          <Link href="/book" className="btn-primary px-10 py-4 text-base">
            Get Your Free Website Audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
