"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { ProviderButton } from "../atoms/buttons/provider-button";

export function OAuthProviders() {
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isLoadingAzure, setIsLoadingAzure] = useState(false);
  const [origin, setOrigin] = useState<string>("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const googleRedirectUrl = `${origin}/api/auth/callback`;

  const handleLoginWithProvider = async (provider: "google" | "azure") => {
    const setLoading =
      provider === "google" ? setIsLoadingGoogle : setIsLoadingAzure;
    setLoading(true);
    const supabase = createSupabaseBrowserClient();

    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: provider === "azure" ? "azure" : "google",
      options: {
        redirectTo: googleRedirectUrl,
      },
    });

    console.log({ error, data });
    setLoading(false);
  };

  return (
    <div className="space-y-2">
      <ProviderButton
        provider="google"
        onClick={() => handleLoginWithProvider("google")}
        isLoading={isLoadingGoogle}
      />
      <ProviderButton
        provider="azure"
        onClick={() => {}}
        // onClick={() => handleLoginWithProvider("azure")}
        isLoading={isLoadingAzure}
      />
    </div>
  );
}
