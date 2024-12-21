'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { createClient } from '@/utils/supabase/server'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

const signUpSchema = z.object({
  full_name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
})

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const result = loginSchema.safeParse({ email, password })

  if (!result.success) {
    console.log('result', JSON.stringify(result.error, null, 2))
    redirect('/error')
  }

  const data = result.data

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signUp(formData: FormData) {
  const supabse = await createClient()

  const name = formData.get('full_name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const result = signUpSchema.safeParse({ full_name: name, email, password })

  if (!result.success) {
    console.log('result', JSON.stringify(result.error, null, 2))
    redirect('/error')
  }

  const data = result.data

  const { error } = await supabse.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  // return a badge to confirm the user has been created and needs to verify their email
  redirect('/verify-email')
}
