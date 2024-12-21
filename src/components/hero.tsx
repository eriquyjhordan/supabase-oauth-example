import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Build your next SaaS{' '}
            <span className="rounded-lg bg-black dark:bg-white text-white dark:text-black px-4">
              faster
            </span>
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
            A complete template with authentication, dashboard, and all the
            essential features you need. Focus on building your product, we
            handle the rest.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/login">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 blur-3xl" />
    </div>
  )
}
