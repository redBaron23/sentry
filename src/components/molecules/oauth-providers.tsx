"use client";

import { GOOGLE_REDIRECT_URL } from "@/lib/constants/global";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { useState } from "react";
import { ProviderButton } from "../atoms/buttons/provider-button";

export function OAuthProviders() {
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isLoadingAzure, setIsLoadingAzure] = useState(false);

  const handleLoginWithProvider = async (provider: "google" | "azure") => {
    const setLoading =
      provider === "google" ? setIsLoadingGoogle : setIsLoadingAzure;
    setLoading(true);
    const supabase = createSupabaseBrowserClient();

    await supabase.auth.signInWithOAuth({
      provider: provider === "azure" ? "azure" : "google",
      options: {
        queryParams: {
          prompt: "consent",
          access_type: "offline",
        },
        redirectTo: GOOGLE_REDIRECT_URL,
      },
    });

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
