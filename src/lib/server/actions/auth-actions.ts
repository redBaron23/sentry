import { createClient } from "@/lib/supabase/client";
import { loginSchema, signupSchema } from "@/types/schemas/auth-schemas";
import { baseActionClient } from "../clients/base-action-client";

export const loginAction = baseActionClient
  .metadata({ actionName: "login" })
  .schema(loginSchema)
  .action(async ({ parsedInput, ctx: {} }) => {
    const supabase = createClient();

    const { error, data } = await supabase.auth.signInWithPassword(parsedInput);

    if (error) {
    }

    return data;
  });

export const registerAction = baseActionClient
  .metadata({ actionName: "signup" })
  .schema(signupSchema)
  .action(async ({ parsedInput, ctx: {} }) => {
    const supabase = createClient();

    const { error, data } = await supabase.auth.signUp(parsedInput);

    if (error) {
    }

    return data;
  });
