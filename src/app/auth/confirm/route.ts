/* eslint-disable camelcase */
import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type') as EmailOtpType | null
    const next = searchParams.get('next') ?? '/dashboard'

    if (!token_hash || !type) {
      console.error('Missing required parameters:', { token_hash, type })
      redirect('/error?reason=missing-params')
    }

    const supabase = await createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })

    if (error) {
      console.error('Error verifying email OTP:', error)
      redirect('/error?reason=verification-failed')
    }

    redirect(next)
  } catch (error) {
    console.error('Unexpected error during email verification:', error)
    redirect('/error?reason=unexpected-error')
  }
}
