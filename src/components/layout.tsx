import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ThemeProvider } from './theme-provider'
import { ThemeToggle } from './theme-toggle'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <header className="border-b border-gray-800">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary" />
              <span className="text-lg font-semibold">SaaS Template</span>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
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
  )
}
