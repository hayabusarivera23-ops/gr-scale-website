import type { MetadataRoute } from 'next'
import { STORE } from '@/lib/agentStore'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://grscales.com'
  const pages = ['', '/agents', ...STORE.map(i => `/agents/${i.slug}`), '/services', '/pricing', '/book', '/demos', '/about', '/faq', '/contact', '/barbershop-websites', '/hvac-marketing', '/roofing-marketing', '/terms', '/privacy']
  return pages.map(p => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : p.startsWith('/agents') ? 0.9 : 0.8,
  }))
}
