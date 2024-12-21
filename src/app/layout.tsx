/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { createClient } from '@/utils/supabase/server'
import { LogOut } from '@/components/log-out'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Supabase oauth example',
  description:
    'Simple example of how to use Supabase OAuth with Google and Twitter',
}

export const experimental_ppr = true

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const supabase = await createClient()
  const { data: user } = await supabase.auth.getUser()

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
            <header className="border-b border-gray-800">
              <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href={'/'} className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary" />
                  <span className="text-lg font-semibold">SaaS Template</span>
                </Link>
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  {user && user.user ? (
                    <LogOut />
                  ) : (
                    <Button variant="ghost" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                  )}
                  <Button asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                </div>
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
