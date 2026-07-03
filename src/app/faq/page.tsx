import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const FAQS = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'How do I get started?',
        a: "Book a free strategy call. We'll look at your current online presence, identify what's hurting you, and recommend the right solution. No payment required at this stage.",
      },
      {
        q: 'Do I need to have any technical knowledge?',
        a: "None. We handle everything — domain, hosting, design, development, and launch. You tell us what you want and we build it. The most technical thing you'll do is send us your business info.",
      },
      {
        q: 'What information do I need to provide?',
        a: 'Your business name, logo (if you have one), photos of your work, a list of services, and any preferences for design or color. We can also create content and find photos if you need help.',
      },
    ],
  },
  {
    category: 'Timelines & Process',
    items: [
      {
        q: 'How long does it take to build a website?',
        a: 'Most websites are completed in 7–14 business days from the time we receive your content. Simple landing pages take 3–5 days. Rush delivery (3–5 days) is available for an additional fee.',
      },
      {
        q: "What happens after I book a call?",
        a: "We review your current online presence before the call, then walk you through exactly what we found and what we recommend. If you'd like to move forward, we collect a deposit and start building immediately.",
      },
      {
        q: 'How many revisions are included?',
        a: 'All packages include unlimited revision rounds during the build. We want you to be 100% happy before launch.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    items: [
      {
        q: 'How do payments work?',
        a: 'We collect 50% upfront to start the project and 50% upon completion before the site goes live. We accept credit/debit cards, PayPal, Venmo, and bank transfer.',
      },
      {
        q: 'Are there monthly fees?',
        a: 'Only if you choose ongoing services like Local SEO ($200/mo) or Monthly Maintenance ($99/mo). The one-time website build is exactly that — one payment, you own it forever.',
      },
      {
        q: 'Do you offer payment plans?',
        a: "Yes. We can split payments into 3 installments for projects over $600. Ask us about this during the strategy call.",
      },
    ],
  },
  {
    category: 'Your Website',
    items: [
      {
        q: 'Will I own the website?',
        a: "Completely. Once the final payment is made, the website and all its code belong to you. We don't hold your website hostage — you can take it anywhere.",
      },
      {
        q: 'What platform do you build on?',
        a: 'We build primarily on Next.js (for speed and SEO), WordPress (for easy self-management), or Webflow (for design-heavy projects). We recommend what fits your business best.',
      },
      {
        q: 'Will my website show up on Google?',
        a: "Every website we build includes basic on-page SEO — proper titles, descriptions, headers, and schema markup. For ongoing Google ranking, we offer Local SEO management as a monthly add-on.",
      },
      {
        q: 'What if I want to make changes after launch?',
        a: 'All packages include 30–90 days of post-launch support for small changes. After that, you can purchase our Monthly Maintenance plan ($99/mo) which includes 2 hours of edits per month.',
      },
    ],
  },
  {
    category: 'Local SEO & Google',
    items: [
      {
        q: 'What is Google Business Profile optimization?',
        a: "Google Business Profile (GBP) is the listing that shows up when someone searches for your service on Google Maps. Optimizing it means more calls, more direction requests, and more customers — often before they even visit your website.",
      },
      {
        q: 'How long does it take to rank on Google?',
        a: 'Local SEO typically shows results in 3–6 months. Google Business Profile optimization can show results faster — sometimes within weeks. There are no guarantees, but we track results and show you exactly where you stand.',
      },
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
          <p className="lead mb-8">Book a free strategy call and ask us anything.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="btn-primary px-8 py-4">
              Book Free Call <ArrowRight className="h-4 w-4" />
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
