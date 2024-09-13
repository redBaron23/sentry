"use client";

import { PAGES } from "@/lib/constants/pages";
import Link from "next/link";
import { useState } from "react";
import { SignUpForm } from "../../../components/organisms/auth/sign-up-form";
import { VerifyEmailForm } from "../../../components/organisms/auth/verify-email-form";

export default function SignUpPage() {
  const [email, setEmail] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSignUpComplete = (registeredEmail: string) => {
    setEmail(registeredEmail);
    setIsVerifying(true);
  };

  if (isVerifying && email) {
    return <VerifyEmailForm email={email} />;
  }

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Crear una cuenta
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Regístrate para comenzar a usar Sentrio
        </p>
      </div>

      <SignUpForm onSignUpComplete={handleSignUpComplete} />

      <>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href={PAGES.LOGIN}
              className="font-medium text-primary hover:underline"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Al registrarte, aceptas nuestros{" "}
          <Link
            href={PAGES.TERMS}
            className="font-medium text-primary hover:underline"
          >
            Términos de Servicio
          </Link>{" "}
          y{" "}
          <Link
            href={PAGES.PRIVACY}
            className="font-medium text-primary hover:underline"
          >
            Política de Privacidad
          </Link>
          .
        </p>
      </>
    </>
  );
}
