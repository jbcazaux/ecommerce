import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  return {
    locale,
    messages: { ...(await import(`./messages/${locale}.json`)).default },
    timeZone: 'UTC',
    getMessageFallback: ({ key, namespace }) =>
      [namespace, key].filter(Boolean).join('.'),
  }
})
