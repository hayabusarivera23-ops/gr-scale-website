import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'
import { SITE, PRICE, AGENTS } from '@/lib/site'

const LOGO = '/ChatGPT%20Image%20Jul%2012,%202026,%2003_38_02%20PM.png'

export const metadata: Metadata = {
  metadataBase: new URL('https://grscales.com'),
  title: 'GR Scale — AI Front Desk for Local Businesses | Tampa',
  description:
    'Never lose a customer to a missed call. GR Scale sets up AI agents for local businesses: website + online booking, missed-call text-back, Google review requests and a 24/7 AI receptionist. Free demo first. Founding price $147/mo.',
  keywords:
    'missed call text back, AI receptionist, barbershop booking website, AI for small business, Google review automation, Tampa barbershop website, local business automation',
  icons: {
    icon: LOGO,
    apple: LOGO,
  },
  openGraph: {
    title: 'GR Scale — Never lose another customer to a missed call',
    description: 'AI agents that answer, text back, book and get reviews for local businesses. Free demo first.',
    type: 'website',
    url: 'https://grscales.com',
    images: [LOGO],
  },
}

// AI-SEO / AEO: single @graph with business entity, offer catalog, and FAQ so
// search engines AND AI answer engines can read what we do and what it costs.
const SITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://grscales.com/#business',
      name: 'GR Scale',
      description:
        'AI agents for local service businesses: website with online booking, missed-call text-back, Google review requests and a 24/7 AI receptionist. Website live in 48 hours after a free demo.',
      url: 'https://grscales.com',
      logo: 'https://grscales.com' + LOGO,
      image: 'https://grscales.com' + LOGO,
      ...(SITE.phone ? { telephone: SITE.phone.tel } : {}),
      email: 'gio@grscales.com',
      founder: { '@type': 'Person', name: 'Gio Rivera' },
      address: { '@type': 'PostalAddress', addressLocality: 'Tampa', addressRegion: 'FL', addressCountry: 'US' },
      areaServed: [
        { '@type': 'City', name: 'Tampa' },
        { '@type': 'City', name: 'Lutz' },
        { '@type': 'City', name: 'Brandon' },
        { '@type': 'City', name: 'Wesley Chapel' },
        { '@type': 'City', name: 'St. Petersburg' },
      ],
      priceRange: '$297 setup + $67 - $297/mo',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI agents',
        itemListElement: [
          { '@type': 'Offer', name: 'Front Desk Bundle', price: String(PRICE.founding), priceCurrency: 'USD',
            description: `Website + online booking, missed-call text-back and Review Getter. $${PRICE.setup} setup, then $${PRICE.bundle}/month ($${PRICE.founding}/month founding price for the first ${PRICE.foundingSpots} businesses).` },
          ...AGENTS.map(a => ({ '@type': 'Offer', name: a.name, priceCurrency: 'USD', description: `${a.does} Price: ${a.price}.` })),
        ],
      },
      sameAs: ['https://meloair.net', 'https://lexthebarber.com'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://grscales.com/#faq',
      mainEntity: [
        { '@type': 'Question', name: 'How much does GR Scale cost?', acceptedAnswer: { '@type': 'Answer',
          text: `The Front Desk Bundle (website + booking, missed-call text-back, Review Getter) is $${PRICE.setup} setup and $${PRICE.bundle}/month — $${PRICE.founding}/month for the first ${PRICE.foundingSpots} founding businesses. Single agents start at $67/month. No contracts.` } },
        { '@type': 'Question', name: 'Is there a free demo?', acceptedAnswer: { '@type': 'Answer',
          text: 'Yes. GR Scale builds a demo for your business first at grscales.com/book. You only pay if you want it.' } },
        { '@type': 'Question', name: 'How fast is setup?', acceptedAnswer: { '@type': 'Answer',
          text: 'Website live within 48 hours after you approve the demo and pay the setup fee; texting goes live after carrier approval, usually 1-2 weeks.' } },
        { '@type': 'Question', name: 'Do I keep my phone number?', acceptedAnswer: { '@type': 'Answer',
          text: 'Yes. The agents connect to your existing number.' } },
        { '@type': 'Question', name: 'Is there a contract?', acceptedAnswer: { '@type': 'Answer',
          text: 'No. Month to month, cancel anytime with 14 days notice.' } },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  )
}
