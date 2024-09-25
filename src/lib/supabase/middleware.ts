import { createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'
import {
  AUTHENTICATED_PAGES,
  PAGES,
  UNAUTHENTICATED_PAGES,
} from '../constants/pages'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value),
          )
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (request.nextUrl.pathname.startsWith(PAGES.API)) {
    return supabaseResponse
  }

  // if user and don't exist and is navigating in authenticated pages
  if (
    !user &&
    AUTHENTICATED_PAGES.some((page) =>
      request.nextUrl.pathname.startsWith(page),
    )
  ) {
    // no user, potentially respond by redirecting the user to the login page
    return NextResponse.redirect(new URL(PAGES.LOGIN, request.url))
  }

  // if user exists and is navigating in unauthenticated pages
  if (
    user &&
    UNAUTHENTICATED_PAGES.some((page) =>
      request.nextUrl.pathname.startsWith(page),
    )
  ) {
    // const url = request.nextUrl.clone();
    // url.pathname = PAGES.DASHBOARD;
    // return NextResponse.redirect(url);
    return NextResponse.redirect(new URL(PAGES.DASHBOARD, request.url))
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
  // creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return supabaseResponse
}
