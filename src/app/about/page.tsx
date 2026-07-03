import Link from 'next/link'
import { ArrowRight, Target, Heart, Zap, Users, CheckCircle, Star } from 'lucide-react'

const VALUES = [
  {
    icon: Zap,
    title: 'Speed Over Everything',
    desc: '7–14 day builds. Fast replies. Quick revisions. Big agencies take months — your business can\'t wait that long. We move fast because results matter now.',
  },
  {
    icon: Target,
    title: 'Revenue-First Design',
    desc: "We don't build pretty websites for a portfolio. Every layout, every headline, every button is built to get someone to call you. If it doesn't help you get customers, it doesn't go in.",
  },
  {
    icon: Heart,
    title: 'Local Specialist',
    desc: 'We only work with local service businesses — HVAC, plumbing, roofing, landscaping, barbershops. We know what converts in these niches because that\'s all we do.',
  },
  {
    icon: Users,
    title: 'You Deal with Gio Directly',
    desc: 'No account managers. No middlemen. You text me, I respond. You get one person who knows your business and actually cares whether you\'re getting results.',
  },
]

const STATS = [
  { number: '6+',   label: 'Industries served'         },
  { number: '14',   label: 'Max days to launch'        },
  { number: '100%', label: 'Client retention rate'     },
  { number: '5★',   label: 'Client satisfaction'       },
]

const WHY_DIFFERENT = [
  'No agency overhead — you pay for the work, not a team of account managers',
  'You see a demo for your exact niche before you pay anything',
  'One point of contact from audit to launch',
  'Sites built to rank on Google, not just look good',
  'No long-term contracts on design work',
  'Ongoing support after launch — you\'re not abandoned',
]

const NICHES = [
  'HVAC', 'Plumbing', 'Roofing', 'Barbershops',
  'Pressure Washing', 'Landscaping', 'Auto Repair', 'Electricians',
  'Pest Control', 'Pool Service',
]

export default function AboutPage() {
  return (
    <div className="pt-24">

      {/* ── HEADER / STORY ── */}
      <section className="section pb-0">
        <div className="container-site max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <span className="badge mb-4">About</span>
              <h1 className="h1 mb-6">
                I&apos;m 16. I Build Websites That{' '}
                <span className="text-gradient">Get You Customers.</span>
              </h1>

              <p className="text-[var(--text-muted)] leading-relaxed mb-5">
                My name is Gio. I&apos;m a 16-year-old from Orlando, Florida. I&apos;m also a competitive wrestler, a high school student, and the founder of GR Scale.
              </p>

              <p className="text-[var(--text-muted)] leading-relaxed mb-5">
                I started noticing something: local businesses I used — barbers, plumbers, HVAC guys — were losing customers online every single day. Not because they weren&apos;t good at their job, but because their website was embarrassing, or they didn&apos;t have one at all. Meanwhile, their competitor — maybe not even as good — was getting all the calls because they showed up on Google with a clean site.
              </p>

              <p className="text-[var(--text-muted)] leading-relaxed mb-5">
                That bothered me. So I started building websites.
              </p>

              <p className="text-[var(--text-muted)] leading-relaxed mb-5">
                Wrestling taught me how to grind — to show up, do the work, and not quit when it gets hard. I apply the same discipline to every website I build. You get fast delivery, direct communication, and someone who takes your business as seriously as you do.
              </p>

              <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                You&apos;re not a ticket number here. You&apos;re working directly with me — one person who knows your niche, knows what converts, and will fight to get you results.
              </p>

              <Link href="/book" className="btn-primary">
                Work With Me <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right column: stats + trust */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                {STATS.map(s => (
                  <div key={s.label} className="card text-center">
                    <p className="text-3xl font-extrabold text-brand-400 mb-1">{s.number}</p>
                    <p className="text-xs text-[var(--text-muted)]">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Quote callout */}
              <div className="card bg-gradient-to-br from-brand-500/15 to-transparent border-brand-500/20">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed italic mb-3">
                  &ldquo;Gio built me a new site in less than two weeks and my online bookings went up immediately. Best investment I made for my business.&rdquo;
                </p>
                <p className="text-xs font-semibold text-white">Lex T.</p>
                <p className="text-xs text-[var(--text-dim)]">Owner, Barbershop — Orlando, FL</p>
              </div>

              {/* CTA card */}
              <div className="card">
                <p className="text-sm font-semibold text-white mb-2">Ready to grow your business online?</p>
                <p className="text-xs text-[var(--text-muted)] mb-4 leading-relaxed">
                  Free 20-minute audit call. We review your Google presence and tell you exactly what&apos;s holding you back.
                </p>
                <Link href="/book" className="btn-primary text-sm py-2 px-4 justify-center">
                  Book Free Audit Call <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section bg-[#0d1117]">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="badge mb-4">How We Work</span>
            <h2 className="h2 mb-4">What Makes GR Scale Different</h2>
            <p className="lead max-w-2xl mx-auto">
              We&apos;re not a big agency with 50 clients and a project manager who doesn&apos;t know your name. We&apos;re lean, fast, and focused on one thing: getting you more customers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map(v => {
              const Icon = v.icon
              return (
                <div key={v.title} className="card">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
                    <Icon className="h-5 w-5 text-brand-400" />
                  </div>
                  <h3 className="h3 mb-2">{v.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY DIFFERENT ── */}
      <section className="section">
        <div className="container-site max-w-3xl">
          <div className="text-center mb-12">
            <span className="badge mb-4">The Difference</span>
            <h2 className="h2 mb-4">Why Businesses Choose Us Over a Big Agency</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {WHY_DIFFERENT.map(item => (
              <div key={item} className="flex items-start gap-3 card py-4">
                <CheckCircle className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="section bg-[#0d1117]">
        <div className="container-site max-w-3xl text-center">
          <span className="badge mb-4">Who We Work With</span>
          <h2 className="h2 mb-6">Local Florida Service Businesses</h2>
          <p className="lead mb-10">
            If your customers find you on Google, we can help you get more of them. We specialize in service-based local businesses.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {NICHES.map(niche => (
              <div key={niche} className="card text-center py-3 px-2">
                <p className="text-xs font-medium text-white">{niche}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[var(--text-muted)]">
            Don&apos;t see your niche?{' '}
            <Link href="/contact" className="text-brand-400 hover:text-brand-300 transition">
              Reach out — we probably work with it.
            </Link>
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container-site max-w-2xl text-center">
          <h2 className="h2 mb-4">Let&apos;s Talk About Your Business</h2>
          <p className="lead mb-8">
            Book a free 20-minute call. I&apos;ll audit your Google presence and show you exactly what&apos;s missing — no charge, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="btn-primary px-8 py-4 text-base">
              Book Free Audit Call <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost px-8 py-4 text-base">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
