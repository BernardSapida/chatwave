import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

import { Providers } from "./providers";
import { UserContextProvider } from '../store/UserContext';

// const inter = Inter({ subsets: ['latin'] })

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
      <body
      // className={inter.className}
      >
        <UserContextProvider>
          <Providers>
            {children}
          </Providers>
        </UserContextProvider>
      </body>
    </html >
  )
}
