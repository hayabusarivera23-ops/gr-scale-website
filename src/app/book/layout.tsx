import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Free Demo — GR Scale',
  description: 'Tell us about your business and we build a free demo first: your name, your services, your booking link. No card. You only pay if you want it.',
  alternates: { canonical: '/book' },
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children
}
