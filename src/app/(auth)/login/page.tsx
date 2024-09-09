import { UserAuthForm } from "@/components/organisms/user-auth-form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sentrio - Iniciar sesión",
  description: "Inicia sesión en tu cuenta de Sentrio.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sección de branding para dispositivos grandes */}
      <div className="to-primary-dark relative hidden items-center justify-center overflow-hidden bg-gradient-to-br from-primary p-10 md:flex md:w-1/2">
        <div
          className="absolute inset-0 bg-repeat opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "20px 20px",
          }}
        ></div>
        <div className="relative z-10 max-w-md text-center">
          <div className="mb-8 text-white">
            <svg
              className="mx-auto mb-4 h-24 w-24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <div className="mb-2 text-6xl font-bold">Sentrio</div>
            <div className="text-xl">Todas las métricas en un solo lugar</div>
          </div>
        </div>
      </div>

      {/* Sección de formulario */}
      <div className="flex flex-1 flex-col items-center justify-center bg-background p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-primary">
              Iniciar sesión
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Ingresa tus credenciales para acceder a Sentrio
            </p>
          </div>

          <UserAuthForm mode="login" />

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              ¿No tienes una cuenta?{" "}
              <Link
                href="/register"
                className="font-medium text-primary hover:underline"
              >
                Regístrate aquí
              </Link>
            </p>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Al continuar, aceptas nuestros{" "}
            <Link
              href="/terms"
              className="font-medium text-primary hover:underline"
            >
              Términos de Servicio
            </Link>{" "}
            y{" "}
            <Link
              href="/privacy"
              className="font-medium text-primary hover:underline"
            >
              Política de Privacidad
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
