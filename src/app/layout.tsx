import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'
import { SITE, PRICE, AGENTS } from '@/lib/site'

const LOGO = SITE.logo

export const metadata: Metadata = {
  metadataBase: new URL('https://grscales.com'),
  title: 'GR Scale — AI Front Desk for Local Businesses | Tampa',
  description:
    'AI agents for local businesses: website + booking, Google profile setup, missed-call text-back and review requests. Free demo first. Bundle from $147/mo.',
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
    siteName: 'GR Scale',
    images: [{ url: SITE.ogImage, width: 1200, height: 800, alt: 'GR Scale' }],
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
        'AI agents for local service businesses: website with online booking, Google profile setup, missed-call text-back and Google review requests. An AI receptionist is in early access. Free demo first; website live within 48 hours after we have your setup fee and setup form.',
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
      priceRange: '$67 - $297/mo',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI agents',
        itemListElement: [
          { '@type': 'Offer', name: 'Front Desk Bundle', price: String(PRICE.founding), priceCurrency: 'USD', url: `${SITE.url}/agents/front-desk-bundle`,
            description: `Website + online booking, Google profile setup, missed-call text-back and Review Getter. $${PRICE.setup} setup, then $${PRICE.bundle}/month ($${PRICE.founding}/month founding price for the first ${PRICE.foundingSpots} businesses).` },
          ...AGENTS.map(a => ({ '@type': 'Offer', name: a.name, url: `${SITE.url}/agents/${a.slug}`, description: `${a.does} Price: ${a.price}.${a.status === 'early' ? ' Early access.' : ''}` })),
        ],
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-[#0279b8] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA) }}
        />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  )
}
