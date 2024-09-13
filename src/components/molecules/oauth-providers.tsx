"use client";

import { oauthClientSignIn } from "@/lib/supabase/client";
import { useState } from "react";
import { ProviderButton } from "../atoms/buttons/provider-button";

export function OAuthProviders() {
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isLoadingAzure, setIsLoadingAzure] = useState(false);

  const handleLoginWithProvider = async (provider: "google" | "azure") => {
    const setLoading =
      provider === "google" ? setIsLoadingGoogle : setIsLoadingAzure;
    setLoading(true);

    await oauthClientSignIn(provider);

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
        onClick={() => handleLoginWithProvider("azure")}
        isLoading={isLoadingAzure}
      />
    </div>
  );
}
