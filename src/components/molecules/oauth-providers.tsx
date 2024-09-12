"use client";

import { GOOGLE_REDIRECT_URL } from "@/lib/constants/globa";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { useState } from "react";
import { ProviderButton } from "../atoms/buttons/provider-button";

export function OAuthProviders() {
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isLoadingAzure, setIsLoadingAzure] = useState(false);
  console.log(GOOGLE_REDIRECT_URL);

  const handleLoginWithProvider = async (provider: "google" | "azure") => {
    const setLoading =
      provider === "google" ? setIsLoadingGoogle : setIsLoadingAzure;
    setLoading(true);
    const supabase = createSupabaseBrowserClient();

    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: provider === "azure" ? "azure" : "google",
      options: {
        redirectTo: GOOGLE_REDIRECT_URL,
      },
    });

    if (error) {
      setLoading(false);
    }
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
