import type { Metadata } from 'next'

import './globals.css'
import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import { routing } from '@/i18n/routing'

export const metadata: Metadata = {
  title: 'E-commerce App',
  description: 'E commerce app AI generated',
  icons: {
    icon: '/favicon.ico',
  },
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const LocaleLayout = async ({ children, params }: Props) => {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  )
}

export default LocaleLayout
