import { createBrowserClient } from '@supabase/ssr'
import { OAUTH_REDIRECT_URL } from '../constants/global'

const OAUTH_PARAMS = {
  google: {
    options: {
      queryParams: {
        prompt: 'consent',
        access_type: 'offline',
      },
      redirectTo: OAUTH_REDIRECT_URL,
    },
  },
  azure: {
    options: {
      // scopes: "email",
      scopes: 'offline_access',
      redirectTo: OAUTH_REDIRECT_URL,
    },
  },
}

export const createSupabaseBrowserClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

export const oauthClientSignIn = async (provider: 'google' | 'azure') => {
  const supabase = createSupabaseBrowserClient()

  await supabase.auth.signInWithOAuth({
    ...OAUTH_PARAMS[provider],
    provider,
  })
}
