"use client";

import { Icons } from "@/lib/constants/icons";
import { PAGES } from "@/lib/constants/pages";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  mode: "login" | "register";
}

export function UserAuthForm({ className, mode, ...props }: UserAuthFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push(PAGES.DASHBOARD);
    }, 3000);
  }

  return (
    <div className={cn("space-y-6", className)} {...props}>
      <form onSubmit={onSubmit} className="space-y-4">
        {mode === "register" && (
          <div>
            <Label htmlFor="name" className="block text-sm font-medium">
              Nombre completo
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              type="text"
              autoCapitalize="words"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              className="mt-1"
            />
          </div>
        )}
        <div>
          <Label htmlFor="email" className="block text-sm font-medium">
            Correo electrónico
          </Label>
          <Input
            id="email"
            placeholder="me@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="password" className="block text-sm font-medium">
            Contraseña
          </Label>
          <Input
            id="password"
            type="password"
            disabled={isLoading}
            className="mt-1"
          />
        </div>
        <Button className="w-full" disabled={isLoading}>
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          {mode === "login" ? "Iniciar sesión" : "Registrarse"}
        </Button>
      </form>

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
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}
        Google
      </Button>
    </div>
  );
}
