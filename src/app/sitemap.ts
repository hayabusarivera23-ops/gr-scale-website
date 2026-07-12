import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://grscales.com'
  const pages = ['', '/services', '/pricing', '/demos', '/about', '/faq', '/contact', '/book']
  return pages.map(p => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.8,
  }))
}
