import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ — GR Scale | Prices, Setup Time, Texting and Contracts',
  description: 'Straight answers about GR Scale: what it costs, how the free demo works, why texting needs carrier approval, how fast you go live and how to cancel.',
  alternates: { canonical: '/faq' },
}

const FAQS = [
  {
    category: 'Getting Started',
    items: [
      { q: 'How do I get started?', a: 'Fill out the free demo form at grscales.com/book. We build a demo for your business and text you the link — usually within 1–2 days. No payment at this stage.' },
      { q: 'Do I need any technical knowledge?', a: 'None. We set up everything — website, booking, Google profile and texting. You keep running your business.' },
      { q: 'What do you need from me?', a: 'Your business name, services and prices, hours, a few photos of your work and the booking tool you already use (if any). That\'s it.' },
    ],
  },
  {
    category: 'The AI Agents',
    items: [
      { q: 'What is missed-call text-back?', a: 'When you can\'t answer, the caller gets a text with your booking link, so they have an easy way to book instead of calling the next shop. The text comes from a separate business number we set up for you.' },
      { q: 'Does the AI receptionist sound like a robot?', a: 'It sounds like a friendly front-desk person and it always says it is an AI assistant. It answers questions about prices and hours, takes messages and books appointments. Calls are recorded only if the caller is told first. It is in early access right now, so spots are limited, and it is not part of the Front Desk Bundle.' },
      { q: 'Do I keep my phone number?', a: 'Yes. Customers keep calling the number they already have. Missed-call texts are sent from a separate business number we set up for you.' },
      { q: 'How does the Review Getter work?', a: 'You get a counter QR card and a short link that open your Google review page, so it is easy to ask every customer. Customers who agreed to get texts from you can also get one short review request by text once carriers approve texting. We can\'t promise ratings or rankings.' },
      { q: 'Will you ever cold-call or spam my customers?', a: 'No. A missed-call text goes only to someone who just called you. Review texts go only to customers who agreed to get texts from you. Anyone can reply STOP anytime.' },
    ],
  },
  {
    category: 'Pricing & Payment',
    items: [
      { q: 'How much does it cost?', a: 'The Front Desk Bundle (website + booking, Google profile setup, missed-call text-back, Review Getter) is $297 setup + $197/mo. The first 5 businesses get the founding price: $147/mo for as long as they stay. Single agents start at $67/mo. Every agent and price is in the agent store at grscales.com/agents.' },
      { q: 'Is there a contract?', a: 'No. Month to month. Cancel with 14 days notice.' },
      { q: 'When do I pay?', a: 'Only after you see your free demo and say yes. You get a secure Stripe link for the setup fee and the monthly plan.' },
    ],
  },
  {
    category: 'Timing & Support',
    items: [
      { q: 'How fast can I be live?', a: 'Your website goes live within 48 hours after we have your setup fee and setup form. Your Google profile takes about 3 days. Texting (missed-call text-back and review texts) goes live once the phone carriers approve your business, usually 1–2 weeks, though the timing is up to the carriers. We file that for you once your site is live.' },
      { q: 'What if I need changes later?', a: 'Text us. Small edits (prices, hours, photos) are included in your monthly plan.' },
      { q: 'Who will I work with?', a: 'Gio Rivera, founder of GR Scale, based in Tampa. One person who sets it up and keeps it running.' },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="pt-24">
      <section className="section pb-0">
        <div className="container-site text-center max-w-3xl">
          <span className="badge mb-4">FAQ</span>
          <h1 className="h1 mb-4">Frequently Asked Questions</h1>
          <p className="lead">
            Everything you need to know about working with GR Scale.
            Don&apos;t see your question?{' '}
            <Link href="/contact" className="text-brand-400 hover:text-brand-300 transition">
              Ask us directly.
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site max-w-3xl">
          <div className="flex flex-col gap-12">
            {FAQS.map(cat => (
              <div key={cat.category}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)] mb-4">
                  {cat.category}
                </h2>
                <div className="flex flex-col gap-3">
                  {cat.items.map(item => (
                    <div key={item.q} className="card">
                      <h3 className="text-sm font-semibold text-white mb-2">{item.q}</h3>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#0d1117]">
        <div className="container-site text-center max-w-2xl">
          <h2 className="h2 mb-4">Still Have Questions?</h2>
          <p className="lead mb-8">Get a free demo — or send us a message.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="btn-primary px-8 py-4">
              Get a Free Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost px-8 py-4">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
