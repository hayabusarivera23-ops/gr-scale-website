import type { MetadataRoute } from 'next'

// Explicitly welcome AI answer-engine crawlers (AI SEO / AEO) alongside classic search bots.
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bytespider',
  'cohere-ai',
  'meta-externalagent',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map(userAgent => ({ userAgent, allow: '/' })),
    ],
    sitemap: 'https://grscales.com/sitemap.xml',
  }
}
