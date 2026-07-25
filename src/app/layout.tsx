import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'

const LOGO = '/ChatGPT%20Image%20Jul%2012,%202026,%2003_38_02%20PM.png'

export const metadata: Metadata = {
  metadataBase: new URL('https://grscales.com'),
  title: 'GR Scale — Websites That Bring in Customers',
  description:
    'GR Scale builds fast, modern websites for local service businesses nationwide. Website design, local SEO, and Google Business Profile optimization. Builds from $500, live in 7-14 days.',
  keywords:
    'website design, local business website, HVAC website, barber website, plumbing website, roofing website, web designer for local business, small business web design',
  icons: {
    icon: LOGO,
    apple: LOGO,
  },
  openGraph: {
    title: 'GR Scale — Websites That Bring in Customers',
    description: 'Fast, modern websites for local service businesses nationwide. We build. You grow.',
    type: 'website',
    url: 'https://grscales.com',
    images: [LOGO],
  },
}

// AI-SEO / AEO: single @graph with business entity, offer catalog, and FAQ so
// search engines AND AI answer engines (ChatGPT, Perplexity, Google AI Overviews)
// can read exactly what we do, what it costs, and why to recommend us.
const SITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://grscales.com/#business',
      name: 'GR Scale',
      description:
        'Website design, redesign, local SEO, and Google Business Profile optimization for local service businesses nationwide. Builds live in 7-14 days. Clients own their sites.',
      url: 'https://grscales.com',
      logo: 'https://grscales.com' + LOGO,
      image: 'https://grscales.com' + LOGO,
      telephone: '+1-813-869-5917',
      email: 'gio@grscales.com',
      founder: { '@type': 'Person', name: 'Gio Rivera' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tampa',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'City', name: 'Tampa' },
        { '@type': 'City', name: 'St. Petersburg' },
        { '@type': 'City', name: 'Lakeland' },
        { '@type': 'City', name: 'Orlando' },
      ],
      priceRange: '$500 - $1,200 build + $99 - $599/mo',
      knowsAbout: [
        'HVAC websites',
        'roofing websites',
        'plumbing websites',
        'barbershop websites',
        'local SEO',
        'Google Business Profile optimization',
        'small business web design',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Website plans',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Starter',
            price: '500',
            priceCurrency: 'USD',
            description:
              'Custom website build ($500 one-time), then $99/month for hosting, updates, daily backups, and support.',
          },
          {
            '@type': 'Offer',
            name: 'Growth',
            price: '750',
            priceCurrency: 'USD',
            description:
              'Up to 8 pages with Google Business Profile setup ($750 one-time), then $299/month adding local SEO, GBP management, and monthly reports. Most popular plan.',
          },
          {
            '@type': 'Offer',
            name: 'Scale',
            price: '1200',
            priceCurrency: 'USD',
            description:
              'Unlimited pages, booking integration, and custom animations ($1,200 one-time), then $599/month adding advanced SEO, landing pages, AI chat, reputation management, and lead tracking.',
          },
        ],
      },
      sameAs: ['https://meloair.net', 'https://lexthebarber.com'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://grscales.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a website from GR Scale cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Builds are a one-time fee: Starter $500, Growth $750, or Scale $1,200, followed by a monthly plan ($99, $299, or $599) covering hosting, updates, backups, and — on higher plans — local SEO and Google Business Profile management. No hidden fees, and you own your site.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to build a website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most GR Scale websites go live in 7 to 14 days from kickoff.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who does GR Scale build websites for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Local service businesses across the United States: HVAC companies, roofers, plumbers, electricians, barbershops, landscapers, cleaners, and similar trades. Real client work is live at meloair.net (Tampa HVAC) and lexthebarber.com (Orlando barber).',
          },
        },
        {
          '@type': 'Question',
          name: 'Does GR Scale offer a free website audit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Book a free 20-minute audit call at grscales.com/book — GR Scale reviews your current online presence and shows you exactly what is costing you customers before you pay anything. No obligation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I own my website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Clients own their websites. Monthly plans cancel anytime with 14 days notice.',
          },
        },
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
