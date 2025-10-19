const locales = ['en', 'fr'] as const
type Locale = (typeof locales)[number]

export { locales, type Locale }

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
