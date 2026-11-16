import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client setup — GR Scale',
  description: 'New GR Scale clients: send your business details so we can set everything up.',
  robots: { index: false, follow: false },
}

export default function StartLayout({ children }: { children: React.ReactNode }) {
  return children
}
