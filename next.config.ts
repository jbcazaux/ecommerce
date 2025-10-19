import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/requests.ts')

const nextConfig: NextConfig = {
  experimental: {},
}

export default withNextIntl(nextConfig)
