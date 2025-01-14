import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
                  <Button variant="ghost" asChild>
                    <Link href="/auth">Login</Link>
                  </Button>
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
