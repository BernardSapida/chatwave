'use client'

import { ThemeProvider } from 'next-themes'

import { NextUIProvider } from '@nextui-org/react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class">
            <NextUIProvider>
                {children}
                <ProgressBar
                    height="4px"
                    color="#61677A"
                    options={{ showSpinner: false }}
                    shallowRouting
                />
            </NextUIProvider>
        </ThemeProvider>
    )
}