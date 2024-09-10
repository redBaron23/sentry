import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Custom404() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Página no encontrada</h2>
        <p className="mb-8 text-muted-foreground">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/">
            <Button>Volver al inicio</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contactar soporte</Button>
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <svg
          className="h-24 w-24 text-primary"
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
      </div>
    </div>
  );
}
