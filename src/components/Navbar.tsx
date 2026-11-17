'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const LOGO = '/logo.png'

const NAV_LINKS = [
  { href: '/agents',    label: 'Agents'   },
  { href: '/pricing',   label: 'Pricing'  },
  { href: '/demos',     label: 'Demos'    },
  { href: '/about',     label: 'About'    },
  { href: '/faq',       label: 'FAQ'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080b10]/95 backdrop-blur border-b border-white/5 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex min-h-[44px] items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white overflow-hidden transition group-hover:scale-105 shadow-[0_0_12px_rgba(14,165,233,0.25)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="" width={36} height={36} className="h-full w-full object-cover" />
          </div>
          <span className="text-sm font-bold text-white tracking-tight">GR Scale</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link px-4 py-2 text-sm text-[var(--text-muted)] hover:text-white rounded-lg hover:bg-white/5 transition"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="text-sm text-[var(--text-muted)] hover:text-white transition">
            Contact
          </Link>
          <Link href="/book" className="btn-primary text-sm py-2 px-5">
            Free demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-white"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-white/5 bg-[#080b10]/98 backdrop-blur px-4 py-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center px-3 text-base text-[var(--text-muted)] hover:text-white rounded-lg hover:bg-white/5 transition"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/5 flex flex-col gap-2">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-ghost text-center justify-center text-sm py-3">
                Contact
              </Link>
              <Link href="/book" onClick={() => setOpen(false)} className="btn-primary text-center justify-center text-sm py-3">
                Free demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
