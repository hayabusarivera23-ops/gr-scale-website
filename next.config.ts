import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/free-website-audit', destination: '/book', permanent: false },
      // Static product demos live in public/demos/<name>/index.html
      { source: '/demos/barbershop', destination: '/demos/barbershop/index.html', permanent: false },
      { source: '/demos/review-getter', destination: '/demos/review-getter/index.html', permanent: false },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
