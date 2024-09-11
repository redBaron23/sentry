"use client";

import { toast } from "@/hooks/use-toast";
import { PAGES } from "@/lib/constants/pages";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";

const schema = z.object({
  token: z.string().length(6, "El código debe tener exactamente 6 caracteres"),
});

interface Props {
  email: string;
}

export function VerifyEmailForm({ email }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      token: "",
    },
  });

  const onSubmit = async ({ token }: z.infer<typeof schema>) => {
    if (!email) return;

    setIsLoading(true);
    try {
      const supabaseClient = createSupabaseBrowserClient();

      const { error } = await supabaseClient.auth.verifyOtp({
        email,
        token: token,
        type: "signup",
      });

      if (error) throw error;

      toast({
        title: "Email verificado",
        description: "Tu cuenta ha sido verificada exitosamente.",
        variant: "default",
      });

      router.push(PAGES.DASHBOARD);
    } catch (error) {
      console.error("Error al validar el email:", error);
      toast({
        title: "Error de verificación",
        description:
          error instanceof Error
            ? error.message
            : "Ha ocurrido un error al verificar tu email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Validar Email
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Por favor, ingresa el código que te enviamos a tu correo electrónico
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Ingresa el código de verificación enviado a {email}
          </p>
          <FormField
            control={form.control}
            name="token"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código de verificación</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="123456"
                    disabled={isLoading}
                    maxLength={6}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Validando..." : "Validar Email"}
          </Button>
        </form>
      </Form>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          ¿No recibiste el código?{" "}
          <Link
            href={PAGES.RESEND_EMAIL_VERIFICATION}
            className="font-medium text-primary hover:underline"
          >
            Reenviar código
          </Link>
        </p>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Si tienes problemas para validar tu email, por favor{" "}
        <Link
          href={PAGES.CONTACT}
          className="font-medium text-primary hover:underline"
        >
          contáctanos
        </Link>
        .
      </p>
    </>
  );
}
