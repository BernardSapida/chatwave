"use client"

import Sample from '@/components/Sample'

export default function Home() {
  const changesHandler = () => {
    console.log("Client received changes")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sample />
    </main>
  )
}
