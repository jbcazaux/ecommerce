import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'E-commerce App',
  description: 'E commerce app AI generated',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
)

export default RootLayout
