import { FeaturesGrid } from '@/components/features-grid'
import { Hero } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function Page() {
  return (
    <Layout>
      <Hero />
      <FeaturesGrid />
    </Layout>
  )
}
