import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'
import { SITE } from '@/lib/site'

const LOGO = '/logo.png'

const LINKS = {
  Agents: [
    { label: 'All agents',            href: '/agents'                        },
    { label: 'Front Desk Bundle',     href: '/agents/front-desk-bundle'      },
    { label: 'Website + Booking',     href: '/agents/website-booking'        },
    { label: 'Google Profile Setup',  href: '/agents/google-profile-setup'   },
    { label: 'Missed-Call Text-Back', href: '/agents/missed-call-text-back'  },
    { label: 'Review Getter',         href: '/agents/review-getter'          },
    { label: 'AI Receptionist',       href: '/agents/ai-receptionist'        },
  ],
  Company: [
    { label: 'Services',      href: '/services' },
    { label: 'Pricing',       href: '/pricing' },
    { label: 'Free demo',     href: '/book'    },
    { label: 'Demo sites',    href: '/demos'   },
    { label: 'About',         href: '/about'   },
    { label: 'FAQ',           href: '/faq'     },
    { label: 'Contact',       href: '/contact' },
    { label: 'Terms',         href: '/terms'   },
    { label: 'Privacy',       href: '/privacy' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-[#080b10]">
      <div className="container-site py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex min-h-[44px] items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={LOGO} alt="" width={36} height={36} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <span className="text-sm font-bold text-white">GR Scale</span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
              AI agents that help local businesses get found, booked and reviewed, built to help you stop losing customers to missed calls. Based in Tampa.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-[var(--text-muted)]">
              {SITE.phone && (
                <a href={`tel:${SITE.phone.tel}`} className="flex min-h-[44px] items-center gap-2 hover:text-white transition">
                  <Phone className="h-3.5 w-3.5 text-brand-400" /> {SITE.phone.pretty}
                </a>
              )}
              <a href="mailto:gio@grscales.com" className="flex min-h-[44px] items-center gap-2 hover:text-white transition">
                <Mail className="h-3.5 w-3.5 text-brand-400" /> gio@grscales.com
              </a>
              <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="flex min-h-[44px] items-center gap-2 hover:text-white transition" aria-label={`GR Scale on Instagram, @${SITE.instagram.handle} (opens in a new tab)`}>
                <Instagram className="h-3.5 w-3.5 text-brand-400" aria-hidden="true" /> @{SITE.instagram.handle}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-brand-400" /> Tampa, Florida
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--text-dim)]">{section}</p>
              <ul className="flex flex-col">
                {links.map(l => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="flex min-h-[44px] items-center text-sm text-[var(--text-muted)] hover:text-white transition md:min-h-[32px]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-dim)]">
            © {year} GR Scale. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-dim)]">
            Built in Tampa, FL 🌴
          </p>
        </div>
      </div>
    </footer>
  )
}
