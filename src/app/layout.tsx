import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'GR Scale — Websites That Bring in Customers',
  description:
    'GR Scale helps local businesses in Florida get fast, modern websites that generate real leads. Website design, local SEO, and Google Business Profile optimization.',
  keywords: 'website design Florida, local business website, HVAC website, barber website, plumbing website',
  openGraph: {
    title: 'GR Scale — Websites That Bring in Customers',
    description: 'Fast, modern websites for local Florida businesses. We build. You grow.',
    type: 'website',
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
