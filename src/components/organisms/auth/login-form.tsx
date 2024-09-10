"use client";

import { Icons } from "@/lib/constants/icons";
import { loginAction } from "@/lib/server/actions/auth-actions";
import { cn } from "@/lib/utils";
import { loginSchema } from "@/types/schemas/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import * as React from "react";
import FormInput from "../../atoms/form-inputs/form-input";
import { Button } from "../../ui/button";
import { Form } from "../../ui/form";

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const {
    handleSubmitWithAction,
    action: {
      isExecuting,
      result: { serverError },
    },
    form,
  } = useHookFormAction(loginAction, zodResolver(loginSchema));

  return (
    <div className={cn("space-y-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={handleSubmitWithAction} className="space-y-4">
          <FormInput
            id="email"
            name="email"
            label="Correo electrónico"
            placeholder="me@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isExecuting}
            className="mt-1"
          />
          <FormInput
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            disabled={isExecuting}
            className="mt-1"
          />
          <Button className="w-full" disabled={isExecuting}>
            {isExecuting && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Iniciar sesión
          </Button>

          {serverError && (
            <div className="mt-2 text-sm text-red-500">{serverError}</div>
          )}
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            O continúa con
          </span>
        </div>
      </div>

      <Button
        variant="outline"
        type="button"
        disabled={isExecuting}
        className="w-full"
      >
        {isExecuting ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}
        Google
      </Button>
    </div>
  );
}
