import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react'

const DEMOS = [
  {
    slug:    'hvac',
    name:    'AC Orlando HVAC',
    niche:   'HVAC',
    url:     'https://acorlandohvac.com',
    status:  'Live',
    color:   'from-sky-500/20 to-blue-700/5',
    accent:  'sky',
    tagCls:  'bg-sky-500/10 text-sky-400 border-sky-500/20',
    desc:    'Full-service HVAC website with service pages, online quote request form, testimonials, service area map, and emergency contact CTA.',
    features: ['Online quote form', 'Service area map', 'Mobile optimized', 'Emergency CTA', 'SEO optimized', 'Testimonials'],
  },
  {
    slug:    'barber',
    name:    'LexTheBarber',
    niche:   'Barbershop',
    url:     'https://lexthebarber.com',
    status:  'Live',
    color:   'from-violet-500/20 to-purple-700/5',
    accent:  'violet',
    tagCls:  'bg-violet-500/10 text-violet-400 border-violet-500/20',
    desc:    'Premium barbershop portfolio site with online booking integration, service menu, gallery, and a strong personal brand.',
    features: ['Booking integration', 'Gallery section', 'Service pricing', 'Mobile first', 'Brand-forward design', 'Instagram feed'],
  },
  {
    slug:    'plumbing',
    name:    'Elite Plumbing Co',
    niche:   'Plumbing',
    url:     'https://demos.grscale.com/plumbing',
    status:  'Demo',
    color:   'from-blue-500/20 to-cyan-700/5',
    accent:  'blue',
    tagCls:  'bg-blue-500/10 text-blue-400 border-blue-500/20',
    desc:    'Emergency plumbing site with 24/7 call CTA above the fold, trust badges, service list, review section, and instant quote form.',
    features: ['24/7 emergency CTA', 'Trust badges', 'Service pages', 'Review section', 'Quote form', 'Guarantee section'],
  },
  {
    slug:    'roofing',
    name:    'Peak Roofing Solutions',
    niche:   'Roofing',
    url:     'https://demos.grscale.com/roofing',
    status:  'Demo',
    color:   'from-amber-500/20 to-orange-700/5',
    accent:  'amber',
    tagCls:  'bg-amber-500/10 text-amber-400 border-amber-500/20',
    desc:    'Insurance-claim roofing site with before/after gallery, free inspection offer, financing info, and storm damage lead capture.',
    features: ['Before/after gallery', 'Free inspection CTA', 'Service pages', 'Storm damage section', 'Certifications', 'Service area'],
  },
  {
    slug:    'pressure-washing',
    name:    'SparkClean Pressure Washing',
    niche:   'Pressure Washing',
    url:     'https://demos.grscale.com/pressure-washing',
    status:  'Demo',
    color:   'from-orange-500/20 to-red-700/5',
    accent:  'orange',
    tagCls:  'bg-orange-500/10 text-orange-400 border-orange-500/20',
    desc:    'Results-driven pressure washing site with before/after gallery, instant quote form, seasonal promotions, and service area map.',
    features: ['Before/after gallery', 'Instant quote form', 'Seasonal promos', 'Service area map', 'Package pricing', 'Review section'],
  },
  {
    slug:    'landscaping',
    name:    'GreenEdge Landscaping',
    niche:   'Landscaping',
    url:     'https://demos.grscale.com/landscaping',
    status:  'Demo',
    color:   'from-green-500/20 to-emerald-700/5',
    accent:  'green',
    tagCls:  'bg-green-500/10 text-green-400 border-green-500/20',
    desc:    'Portfolio-first landscaping site with project gallery, seasonal service calendar, online booking, and maintenance plan pricing.',
    features: ['Project gallery', 'Online booking', 'Maintenance plans', 'Seasonal services', 'Service area', 'Testimonials'],
  },
]

export default function DemosPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section pb-0">
        <div className="container-site text-center max-w-3xl">
          <span className="badge mb-4">Demo Gallery</span>
          <h1 className="h1 mb-4">See Your Future Website</h1>
          <p className="lead">
            We build demo websites for every niche so you can see exactly what yours will look like before you pay.
            Every demo is production-quality — not a template, not a mockup.
          </p>
        </div>
      </section>

      {/* Demo grid */}
      <section className="section">
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {DEMOS.map(d => (
              <div
                key={d.slug}
                id={d.slug}
                className={`card group relative flex flex-col bg-gradient-to-br ${d.color}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold mb-2 ${d.tagCls}`}>
                      {d.niche}
                    </span>
                    <h2 className="text-base font-bold text-white">{d.name}</h2>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
                    d.status === 'Live'
                      ? 'bg-green-500/10 text-green-400 border-green-500/20'
                      : 'bg-brand-500/10 text-brand-400 border-brand-500/20'
                  }`}>
                    {d.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5 flex-1">{d.desc}</p>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-1.5 mb-6">
                  {d.features.map(f => (
                    <li key={f} className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                      <CheckCircle className="h-3 w-3 text-brand-400 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-sm py-2 justify-center text-center"
                  >
                    {d.status === 'Live' ? 'View Live Site' : 'View Demo'} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <Link
                    href={`/book?industry=${d.niche}`}
                    className="btn-ghost text-sm py-2 px-3"
                    title="Get a site like this for your business"
                  >
                    Get This
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#0d1117]">
        <div className="container-site text-center max-w-2xl">
          <h2 className="h2 mb-4">Don&apos;t See Your Niche?</h2>
          <p className="lead mb-8">
            We build websites for any local service business. Book a free call and we&apos;ll show you a demo for your exact industry.
          </p>
          <Link href="/book" className="btn-primary px-10 py-4 text-base">
            Book Free Strategy Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
