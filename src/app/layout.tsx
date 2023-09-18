import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from "./providers";
import { AppContextProvider } from '../store/AppContext';

const inter = Inter({ subsets: ['latin'] })

import '@/public/css/globals.css'

export const metadata: Metadata = {
  title: 'BoogieTalk',
  description: 'A messenger app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppContextProvider>
          <Providers>
            {children}
          </Providers>
        </AppContextProvider>
      </body>
    </html >
  )
}
