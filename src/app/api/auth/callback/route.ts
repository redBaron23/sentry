import { createServerSideClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
// The client you created from the Server-Side Auth instructions

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";

  if (!code) {
    console.error("No code found");

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`);
  }

  const supabase = await createServerSideClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error(
      `Error on oauth sign in, code error: ${error} for code ${code}`,
    );

    return NextResponse.redirect(`${origin}/auth/auth-no-code-error`);
  }

  const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
  const isLocalEnv = process.env.NODE_ENV === "development";
  if (isLocalEnv) {
    // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
    return NextResponse.redirect(`${origin}${next}`);
  } else if (forwardedHost) {
    return NextResponse.redirect(`https://${forwardedHost}${next}`);
  } else {
    return NextResponse.redirect(`${origin}${next}`);
  }
}
