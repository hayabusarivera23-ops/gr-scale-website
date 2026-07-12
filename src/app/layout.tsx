import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
