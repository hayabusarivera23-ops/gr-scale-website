import Link from 'next/link'
import { Zap, Phone, Mail, MapPin } from 'lucide-react'

const LINKS = {
  Services: [
    { label: 'Website Design',   href: '/services#design'    },
    { label: 'Website Redesign', href: '/services#redesign'  },
    { label: 'Landing Pages',    href: '/services#landing'   },
    { label: 'Local SEO',        href: '/services#seo'       },
    { label: 'Google Business',  href: '/services#gbp'       },
    { label: 'Maintenance',      href: '/services#maintenance'},
  ],
  Company: [
    { label: 'About',     href: '/about'   },
    { label: 'Portfolio', href: '/demos'   },
    { label: 'Pricing',   href: '/pricing' },
    { label: 'FAQ',       href: '/faq'     },
    { label: 'Contact',   href: '/contact' },
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
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold text-white">GR Scale</span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
              We build fast, modern websites that help local service businesses generate more customers online. Based in Orlando, serving nationwide.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-[var(--text-muted)]">
              <a href="tel:+14078082898" className="flex items-center gap-2 hover:text-white transition">
                <Phone className="h-3.5 w-3.5 text-brand-400" /> (407) 808-2898
              </a>
              <a href="mailto:gio@grscales.com" className="flex items-center gap-2 hover:text-white transition">
                <Mail className="h-3.5 w-3.5 text-brand-400" /> gio@grscales.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-brand-400" /> Orlando, Florida
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--text-dim)]">{section}</p>
              <ul className="flex flex-col gap-2">
                {links.map(l => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--text-muted)] hover:text-white transition"
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
            Built in Orlando, FL 🌴
          </p>
        </div>
      </div>
    </footer>
  )
}
