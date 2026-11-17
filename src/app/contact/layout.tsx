import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — GR Scale | Tampa, FL',
  description: 'Send GR Scale a message. Gio gets it on his phone and replies within one business day. Based in Tampa, Florida.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
