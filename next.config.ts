import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['github.com'],
  },
  experimental: {
    ppr: 'incremental',
  },
}

export default nextConfig
