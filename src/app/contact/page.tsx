'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { submitLead } from '@/lib/submitLead'

const SERVICES = [
  'Website Design & Build',
  'Website Redesign',
  'Google Business Profile',
  'Local SEO',
  'Landing Page',
  'Monthly Maintenance',
  'Not Sure Yet',
]

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const sent = status === 'sent'
  const [form, setForm] = useState({
    name: '', business: '', phone: '', email: '', service: '', message: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      await submitLead({
        _subject: `New website inquiry — ${form.business || form.name}`,
        source: 'Contact Form',
        ...form,
      })
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="pt-24">
      <section className="section pb-0">
        <div className="container-site text-center max-w-2xl">
          <span className="badge mb-4">Contact</span>
          <h1 className="h1 mb-4">Let&apos;s Talk</h1>
          <p className="lead">
            Send us a message or book a call. We typically respond within a few hours during business days.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="h3 mb-6">Contact Info</h2>
                <div className="flex flex-col gap-4">
                  <a href="tel:+14078082898" className="flex items-center gap-3 text-sm text-[var(--text-muted)] hover:text-white transition group">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 group-hover:bg-brand-500/20 transition">
                      <Phone className="h-4 w-4 text-brand-400" />
                    </div>
                    (407) 808-2898
                  </a>
                  <a href="mailto:gio@grscale.com" className="flex items-center gap-3 text-sm text-[var(--text-muted)] hover:text-white transition group">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 group-hover:bg-brand-500/20 transition">
                      <Mail className="h-4 w-4 text-brand-400" />
                    </div>
                    gio@grscale.com
                  </a>
                  <span className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10">
                      <MapPin className="h-4 w-4 text-brand-400" />
                    </div>
                    Orlando, Florida
                  </span>
                  <span className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10">
                      <Clock className="h-4 w-4 text-brand-400" />
                    </div>
                    Mon–Fri, 9am–7pm EST
                  </span>
                </div>
              </div>

              {/* Book CTA */}
              <div className="card bg-gradient-to-br from-brand-500/15 to-transparent border-brand-500/20">
                <h3 className="text-sm font-semibold text-white mb-2">Want to Skip the Form?</h3>
                <p className="text-xs text-[var(--text-muted)] mb-4 leading-relaxed">
                  Book a free 20-minute strategy call directly on our calendar.
                </p>
                <Link href="/book" className="btn-primary text-sm py-2 justify-center text-center">
                  Book Free Call
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="card flex flex-col items-center text-center py-16 gap-4">
                  <CheckCircle className="h-12 w-12 text-green-400" />
                  <h2 className="h3 text-white">Message Sent!</h2>
                  <p className="text-sm text-[var(--text-muted)] max-w-sm leading-relaxed">
                    Thanks for reaching out. We&apos;ll get back to you within a few hours.
                    In the meantime, feel free to{' '}
                    <Link href="/demos" className="text-brand-400 hover:underline">view our demo sites</Link>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card">
                  <h2 className="h3 mb-6">Send Us a Message</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">Your Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">Business Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Smith's HVAC"
                        value={form.business}
                        onChange={e => setForm({ ...form, business: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">Phone *</label>
                      <input
                        required
                        type="tel"
                        placeholder="(407) 555-0100"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">Email</label>
                      <input
                        type="email"
                        placeholder="john@smithhvac.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">Interested In</label>
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#0d1117] px-4 py-2.5 text-sm text-[var(--text-muted)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your business and what you're looking for..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition resize-none"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Sending…' : <>Send Message <Send className="h-4 w-4" /></>}
                    </button>
                    {status === 'error' && (
                      <div className="mt-3 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2.5">
                        <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-red-300 leading-relaxed">{errorMsg}</p>
                      </div>
                    )}
                    <p className="text-xs text-[var(--text-dim)] text-center mt-3">
                      We respond within a few hours. No spam, ever.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
