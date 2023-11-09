import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import Bottombar from '@/components/shared/Bottombar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Threads',
	description: 'A Next.js clone app of Meta Threads'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          <body className={inter.className}>
            <Topbar />
            <main className='flex flex-row'>
              <LeftSidebar />
              <section className='main-container'>
                <div className='w-full max-w-4xl'>
                  {children}
                </div>
              </section>
              <RightSidebar />
            </main>
            {children}
            <Bottombar />
          </body>
        </body>
      </html>
    </ClerkProvider>
  )
}
