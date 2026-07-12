'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const LOGO = '/ChatGPT%20Image%20Jul%2012,%202026,%2003_38_02%20PM.png'

const NAV_LINKS = [
  { href: '/services',  label: 'Services' },
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
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white overflow-hidden transition group-hover:scale-105 shadow-[0_0_12px_rgba(14,165,233,0.25)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="GR Scale logo" className="h-full w-full object-cover" />
          </div>
          <span className="text-sm font-bold text-white tracking-tight">GR Scale</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-[var(--text-muted)] hover:text-white rounded-lg hover:bg-white/5 transition"
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
            Book Free Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[var(--text-muted)] hover:text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#080b10]/98 backdrop-blur px-4 py-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-[var(--text-muted)] hover:text-white rounded-lg hover:bg-white/5 transition"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/5 flex flex-col gap-2">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-ghost text-center justify-center text-sm py-2">
                Contact
              </Link>
              <Link href="/book" onClick={() => setOpen(false)} className="btn-primary text-center justify-center text-sm py-2">
                Book Free Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
