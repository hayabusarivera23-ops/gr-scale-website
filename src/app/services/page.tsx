import Link from 'next/link'
import { ArrowRight, Globe, Zap, Search, TrendingUp, MessageSquare, Shield, CheckCircle } from 'lucide-react'

const SERVICES = [
  {
    id: 'design',
    icon: Globe,
    title: 'Website Design & Build',
    tagline: 'A professional website built from scratch — fast.',
    price: 'Starting at $500',
    turnaround: '7–14 business days',
    desc: 'You need a website that looks professional, loads fast on mobile, and convinces customers to call you. We build exactly that — from domain setup to launch.',
    includes: [
      'Custom designed homepage',
      'Services, About, and Contact pages',
      'Online quote or contact form',
      'Mobile-first responsive design',
      'Basic on-page SEO',
      'Google Analytics setup',
      'Domain + hosting configuration',
      '30 days of post-launch support',
    ],
    cta: '/book',
  },
  {
    id: 'redesign',
    icon: Zap,
    title: 'Website Redesign',
    tagline: 'Your old site is costing you customers. We fix it.',
    price: 'Starting at $400',
    turnaround: '7–14 business days',
    desc: "If your website is slow, outdated, or doesn't show up on mobile — it's actively hurting your business. We take your old site and rebuild it into something you're proud to share.",
    includes: [
      'Full design overhaul',
      'Speed optimization',
      'Mobile responsiveness fix',
      'Updated copy and layout',
      'Fresh photos and graphics',
      'SEO improvements',
      'Redirect setup from old URLs',
      '30 days of post-launch support',
    ],
    cta: '/book',
  },
  {
    id: 'gbp',
    icon: Search,
    title: 'Google Business Profile Optimization',
    tagline: 'Show up when local customers search for your service.',
    price: 'Starting at $150',
    turnaround: '3–5 business days',
    desc: "Google Business Profile is the first thing people see when they search for your service. If it's incomplete, you're invisible. We optimize it so you rank higher and get more calls.",
    includes: [
      'Complete profile setup or audit',
      'Business category optimization',
      'Service area configuration',
      'Photo strategy and upload',
      'Review response templates',
      'Q&A setup',
      'Post strategy for visibility',
      'Monthly report (with maintenance plan)',
    ],
    cta: '/book',
  },
  {
    id: 'seo',
    icon: TrendingUp,
    title: 'Local SEO',
    tagline: 'Get to the top of Google searches in your area.',
    price: 'Starting at $200/month',
    turnaround: 'Ongoing monthly',
    desc: "Local SEO means getting found on Google when people in your area search for your service. It takes time, but it's the most valuable long-term investment in your marketing.",
    includes: [
      'Keyword research for your area',
      'On-page SEO optimization',
      'Local citation building',
      'Google Business Profile management',
      'Monthly content creation',
      'Competitor monitoring',
      'Rank tracking and reports',
      'Link building',
    ],
    cta: '/book',
  },
  {
    id: 'landing',
    icon: MessageSquare,
    title: 'Landing Pages',
    tagline: 'One page. One goal. Maximum conversions.',
    price: 'Starting at $300',
    turnaround: '3–7 business days',
    desc: 'A landing page is built for one purpose: get the visitor to call, fill out a form, or book. Perfect for ad campaigns, seasonal promotions, or specific services.',
    includes: [
      'Single-page design',
      'Headline and copy writing',
      'Clear call-to-action above the fold',
      'Trust signals (reviews, badges)',
      'Lead capture form',
      'Mobile optimized',
      'A/B test ready',
      'Connected to your CRM or email',
    ],
    cta: '/book',
  },
  {
    id: 'maintenance',
    icon: Shield,
    title: 'Monthly Maintenance',
    tagline: 'Keep your site fast, secure, and always up to date.',
    price: 'Starting at $99/month',
    turnaround: 'Ongoing monthly',
    desc: "Websites need ongoing attention. Plugins break, security threats emerge, and content gets outdated. Our maintenance plans keep everything running so you don't have to think about it.",
    includes: [
      'Hosting management',
      'Plugin and software updates',
      'Daily backups',
      'Uptime monitoring',
      'Security scanning',
      'Up to 2 hours of edits per month',
      'Monthly performance report',
      'Priority support',
    ],
    cta: '/book',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section pb-0">
        <div className="container-site text-center max-w-3xl">
          <span className="badge mb-4">Services</span>
          <h1 className="h1 mb-4">Everything You Need Online</h1>
          <p className="lead">
            We handle your entire web presence — from building your website to making sure it shows up on Google and converts visitors into paying customers.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-site">
          <div className="flex flex-col gap-12">
            {SERVICES.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className={`grid gap-8 lg:grid-cols-2 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Info */}
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10">
                      <Icon className="h-6 w-6 text-brand-400" />
                    </div>
                    <h2 className="h2 mb-2">{s.title}</h2>
                    <p className="text-brand-400 font-semibold mb-4">{s.tagline}</p>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">{s.desc}</p>
                    <div className="flex items-center gap-6 mb-6">
                      <div>
                        <p className="text-xs text-[var(--text-dim)] uppercase tracking-wider mb-0.5">Price</p>
                        <p className="text-sm font-semibold text-white">{s.price}</p>
                      </div>
                      <div className="w-px h-8 bg-white/10" />
                      <div>
                        <p className="text-xs text-[var(--text-dim)] uppercase tracking-wider mb-0.5">Timeline</p>
                        <p className="text-sm font-semibold text-white">{s.turnaround}</p>
                      </div>
                    </div>
                    <Link href={s.cta} className="btn-primary">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Includes */}
                  <div className={`card ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)] mb-4">What&apos;s Included</p>
                    <ul className="flex flex-col gap-2.5">
                      {s.includes.map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                          <CheckCircle className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#0d1117]">
        <div className="container-site text-center max-w-2xl">
          <h2 className="h2 mb-4">Not Sure What You Need?</h2>
          <p className="lead mb-8">
            Book a free call. We&apos;ll look at your current online presence and tell you exactly what will move the needle for your business.
          </p>
          <Link href="/book" className="btn-primary px-10 py-4 text-base">
            Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
