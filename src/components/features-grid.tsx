'use client'

import { Check, Laptop, Lock, Users, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const features = [
  {
    title: 'Authentication Ready',
    description:
      'Secure authentication with Supabase - includes password, Google, and Twitter login options out of the box.',
    icon: Lock,
    className: 'md:col-span-2',
  },
  {
    title: 'Modern Stack',
    description: 'Built with Next.js 14, TypeScript, and Tailwind CSS.',
    icon: Laptop,
    className: 'md:col-span-1',
  },
  {
    title: 'User Management',
    description: 'Complete user management system with roles and permissions.',
    icon: Users,
    className: 'md:col-span-1',
  },
  {
    title: 'Lightning Fast',
    description:
      'Optimized for speed and performance. Deploy anywhere with zero configuration.',
    icon: Zap,
    className: 'md:col-span-2',
  },
]

interface BentoGridItemProps {
  title: string
  description: string
  icon: React.ElementType
  className?: string
}

function BentoGridItem({
  title,
  description,
  icon: Icon,
  className,
}: BentoGridItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 0.995 }}
      className={cn(
        'group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 p-6 hover:border-gray-300 dark:hover:border-gray-700',
        className,
      )}
    >
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-900 text-primary group-hover:bg-gray-200 dark:group-hover:bg-gray-800">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-br from-gray-100/50 via-gray-100/50 to-gray-200/50 dark:from-gray-900/50 dark:via-gray-900/50 dark:to-gray-800/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  )
}

export function FeaturesGrid() {
  return (
    <section className="bg-gray-50 dark:bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Everything you need to build a SaaS
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Start with a fully-featured template and customize it to your needs.
            No more starting from scratch.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <BentoGridItem key={feature.title} {...feature} />
          ))}
        </div>
        <div className="mt-12 grid gap-4 text-gray-600 dark:text-gray-400 sm:grid-cols-2">
          {[
            'TypeScript/JavaScript',
            'Next.js App Router',
            'Supabase Backend',
            'Discord Community',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
