'use client'

import { Twitter } from 'lucide-react'
import { Button } from './ui/button'
import { createClient } from '@/utils/supabase/client'

export function TwitterOauth() {
  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    try {
      const supabase = createClient()

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'twitter',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        console.error('OAuth error:', error.message)
        // Handle error appropriately - maybe show a toast or alert
      }
    } catch (err) {
      console.error('Failed to sign in:', err)
      // Handle error appropriately
    }
  }
  return (
    <Button variant="outline" onClick={handleSignIn}>
      <Twitter className="mr-2 h-4 w-4" />
      Twitter
    </Button>
  )
}
