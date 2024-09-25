import { PAGES } from '@/lib/constants/pages'
import { Metadata } from 'next'
import Link from 'next/link'
import { LoginForm } from '../../../components/organisms/auth/login-form'

export const metadata: Metadata = {
  title: 'Sentrio - Iniciar sesión',
  description: 'Inicia sesión en tu cuenta de Sentrio.',
}

export default function LoginPage() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Iniciar sesión
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ingresa tus credenciales para acceder a Sentrio
        </p>
      </div>

      <LoginForm />

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          ¿No tienes una cuenta?{' '}
          <Link
            href={PAGES.SIGN_UP}
            className="font-medium text-primary hover:underline"
          >
            Regístrate aquí
          </Link>
        </p>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Al continuar, aceptas nuestros{' '}
        <Link
          href={PAGES.TERMS}
          className="font-medium text-primary hover:underline"
        >
          Términos de Servicio
        </Link>{' '}
        y{' '}
        <Link
          href={PAGES.PRIVACY}
          className="font-medium text-primary hover:underline"
        >
          Política de Privacidad
        </Link>
        .
      </p>
    </>
  )
}
