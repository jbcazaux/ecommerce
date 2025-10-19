import { defineRouting } from 'next-intl/routing'

import { locales } from './locale'

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
})
