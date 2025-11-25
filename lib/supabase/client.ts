// lib/supabaseClient.ts (your current code - KEEP IT)
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export function isDUEmail(email: string) {
  const duPatterns = [
    /@du\.ac\.in$/,
    /@[a-z]+\.du\.ac\.in$/,
    /@south\.du\.ac\.in$/,
    /@north\.du\.ac\.in$/,
    /@cluster\.du\.ac\.in$/,
    /@sol\.du\.ac\.in$/
  ];
  return duPatterns.some(p => p.test(email.toLowerCase()))
}

export async function getCurrentUser() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user
}
