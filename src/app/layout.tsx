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
    'GR Scale builds fast, modern websites for local service businesses nationwide. Website design, local SEO, and Google Business Profile optimization.',
  keywords: 'website design, local business website, HVAC website, barber website, plumbing website, roofing website',
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

const BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'GR Scale',
  description:
    'Website design, redesign, local SEO, and Google Business Profile optimization for local service businesses nationwide.',
  url: 'https://grscales.com',
  logo: 'https://grscales.com' + LOGO,
  image: 'https://grscales.com' + LOGO,
  telephone: '+1-813-869-5917',
  email: 'gio@grscales.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  priceRange: '$99 - $599/mo',
  serviceType: [
    'Website Design',
    'Website Redesign',
    'Landing Pages',
    'Local SEO',
    'Google Business Profile Optimization',
    'Website Maintenance',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_SCHEMA) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  )
}
