import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Africars.io Select Through Mutiple African Cars Trucks Bikes and Heavy Equipment',
    description: 'Find your next automobile in your country in Africa.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
return (
<html lang="en">
  <body className={inter.className}>{children}</body>
</html>
)
}
