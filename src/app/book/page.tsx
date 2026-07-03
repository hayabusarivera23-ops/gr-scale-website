'use client'

import { useState } from 'react'
import { CheckCircle, Calendar, Clock, Phone, ArrowRight, AlertCircle } from 'lucide-react'
import { submitLead } from '@/lib/submitLead'

const TIME_SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

const WHAT_TO_EXPECT = [
  { title: 'Free Website Audit', desc: 'We review your current online presence before the call so we can show you exactly what\'s hurting you.' },
  { title: 'No Sales Pitch', desc: 'This is a strategy call, not a sales call. We tell you what we found and what we recommend — you decide.' },
  { title: '20 Minutes', desc: 'Fast, focused, and actionable. You\'ll leave knowing exactly what your next step is.' },
]

export default function BookPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const submitted = status === 'sent'
  const [form, setForm] = useState({
    name: '', business: '', phone: '', email: '',
    industry: '', hasWebsite: '', date: '', time: '', goal: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      await submitLead({
        _subject: `New call request — ${form.business || form.name} (${form.date} ${form.time})`,
        source: 'Book a Call',
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
      <section className="section pb-8">
        <div className="container-site text-center max-w-2xl">
          <span className="badge mb-4">Book a Call</span>
          <h1 className="h1 mb-4">Book Your Free Strategy Call</h1>
          <p className="lead">
            20 minutes. We audit your online presence, show you what&apos;s missing, and tell you exactly how to fix it.
            No charge. No obligation.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* What to expect */}
            <div className="flex flex-col gap-6">
              <h2 className="h3">What to Expect</h2>
              {WHAT_TO_EXPECT.map(w => (
                <div key={w.title} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{w.title}</p>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}

              <div className="card bg-gradient-to-br from-brand-500/10 to-transparent border-brand-500/20 mt-2">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4 text-brand-400" />
                  <p className="text-sm font-semibold text-white">Prefer to call directly?</p>
                </div>
                <p className="text-sm text-[var(--text-muted)] mb-3">Call or text us anytime:</p>
                <a href="tel:+14078082898" className="text-brand-400 font-semibold text-sm hover:text-brand-300 transition">
                  (407) 808-2898
                </a>
              </div>
            </div>

            {/* Booking form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="card flex flex-col items-center text-center py-16 gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
                    <Calendar className="h-8 w-8 text-green-400" />
                  </div>
                  <h2 className="h3 text-white">Call Requested!</h2>
                  <p className="text-sm text-[var(--text-muted)] max-w-sm leading-relaxed">
                    We&apos;ll confirm your time slot within a few hours. Check your phone for a text or call from us to confirm.
                  </p>
                  <p className="text-xs text-[var(--text-dim)]">
                    In the meantime, check out our{' '}
                    <a href="/demos" className="text-brand-400 hover:underline">demo sites</a>{' '}
                    to see what we build.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card">
                  <h2 className="h3 mb-6">Request Your Time Slot</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">Your Name *</label>
                      <input required type="text" placeholder="John Smith"
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">Business Name *</label>
                      <input required type="text" placeholder="Smith's HVAC"
                        value={form.business} onChange={e => setForm({ ...form, business: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">Phone *</label>
                      <input required type="tel" placeholder="(407) 555-0100"
                        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">Email</label>
                      <input type="email" placeholder="john@mybusiness.com"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">Industry *</label>
                      <select required value={form.industry} onChange={e => setForm({ ...form, industry: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#0d1117] px-4 py-2.5 text-sm text-[var(--text-muted)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition">
                        <option value="">Select your industry...</option>
                        {['HVAC', 'Plumbing', 'Roofing', 'Barbershop', 'Pressure Washing', 'Landscaping', 'Auto Repair', 'Restaurant', 'Other'].map(i => (
                          <option key={i} value={i}>{i}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">Do you have a website?</label>
                      <select value={form.hasWebsite} onChange={e => setForm({ ...form, hasWebsite: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#0d1117] px-4 py-2.5 text-sm text-[var(--text-muted)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition">
                        <option value="">Select...</option>
                        <option value="no">No website</option>
                        <option value="old">Yes, but it's outdated</option>
                        <option value="ok">Yes, and it's decent</option>
                      </select>
                    </div>

                    {/* Date + time */}
                    <div>
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">
                        <Calendar className="inline h-3 w-3 mr-1" /> Preferred Date *
                      </label>
                      <input required type="date"
                        min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                        value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">
                        <Clock className="inline h-3 w-3 mr-1" /> Preferred Time (EST) *
                      </label>
                      <select required value={form.time} onChange={e => setForm({ ...form, time: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#0d1117] px-4 py-2.5 text-sm text-[var(--text-muted)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition">
                        <option value="">Pick a time...</option>
                        {TIME_SLOTS.map(t => <option key={t} value={t}>{t} EST</option>)}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-1.5 block">Main Goal</label>
                      <textarea rows={2} placeholder="What's the main thing you're trying to accomplish? (e.g., get more leads, modernize my site, show up on Google)"
                        value={form.goal} onChange={e => setForm({ ...form, goal: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition resize-none" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full justify-center py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Sending…' : <>Request My Free Call <ArrowRight className="h-4 w-4" /></>}
                    </button>
                    {status === 'error' && (
                      <div className="mt-3 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2.5">
                        <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-red-300 leading-relaxed">{errorMsg}</p>
                      </div>
                    )}
                    <p className="text-xs text-[var(--text-dim)] text-center mt-3">
                      We&apos;ll confirm your time slot within a few hours via phone or text.
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
