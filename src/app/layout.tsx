import '@/styles/globals.css'
import { Metadata } from 'next'
import { Providers } from './providers'

const title = 'Novo projeto'
const description = ''

export const metadata: Metadata = {
  title,
  description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
