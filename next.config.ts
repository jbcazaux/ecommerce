import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/requests.ts')

const nextConfig: NextConfig = {
  cacheHandler: require.resolve('./redis-cache-handler'),
  experimental: {
    reactCompiler: true,
  },
}

export default withNextIntl(nextConfig)
