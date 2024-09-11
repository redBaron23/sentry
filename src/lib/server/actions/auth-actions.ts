"use server";

import { PAGES } from "@/lib/constants/pages";
import { createServerSideClient } from "@/lib/supabase/server";
import { ActionError } from "@/types/errors";
import {
  loginSchema,
  signUpSchema,
  verifyEmailSchema,
} from "@/types/schemas/auth-schemas";
import { redirect } from "next/navigation";
import { baseActionClient } from "../clients/base-action-client";

export const loginAction = baseActionClient
  .metadata({ actionName: "login" })
  .schema(loginSchema)
  .action(async ({ parsedInput, ctx: {} }) => {
    const supabase = await createServerSideClient();

    const { error } = await supabase.auth.signInWithPassword(parsedInput);

    if (error) {
      throw new ActionError(error.message);
    }

    redirect(PAGES.DASHBOARD);
  });

export const signUpAction = baseActionClient
  .metadata({ actionName: "signUp" })
  .schema(signUpSchema)
  .action(async ({ parsedInput: { email, password, name }, ctx: {} }) => {
    const supabase = await createServerSideClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      throw new ActionError(error.message);
    }
  });

export const verifyEmailAction = baseActionClient
  .metadata({ actionName: "verifyEmail" })
  .schema(verifyEmailSchema)
  .action(async ({ parsedInput, ctx: {} }) => {
    const supabase = await createServerSideClient();

    const { error } = await supabase.auth.verifyOtp({
      email: parsedInput.email,
      token: parsedInput.token,
      type: "signup",
    });

    if (error) {
      throw new ActionError(error.message);
    }

    redirect(PAGES.DASHBOARD);
  });
