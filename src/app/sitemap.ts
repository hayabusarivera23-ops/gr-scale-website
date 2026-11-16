import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://grscales.com'
  const pages = ['', '/services', '/pricing', '/book', '/demos', '/about', '/faq', '/contact', '/barbershop-websites', '/hvac-marketing', '/roofing-marketing', '/terms', '/privacy']
  return pages.map(p => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.8,
  }))
}
