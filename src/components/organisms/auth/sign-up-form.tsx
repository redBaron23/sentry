'use client'

import { Icons } from '@/lib/constants/icons'
import { signUpAction } from '@/lib/server/actions/auth-actions'
import { cn } from '@/lib/utils'
import { signUpSchema } from '@/types/schemas/auth-schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useHookFormAction } from '@next-safe-action/adapter-react-hook-form/hooks'
import { HTMLAttributes, useState } from 'react'
import FormInput from '../../atoms/form-inputs/form-input'
import { Button } from '../../ui/button'
import { Form } from '../../ui/form'

interface Props extends HTMLAttributes<HTMLDivElement> {
  onSignUpComplete: (email: string) => void
}

export function SignUpForm({ onSignUpComplete, className, ...props }: Props) {
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false)

  const {
    handleSubmitWithAction,
    action: {
      isExecuting,
      result: { serverError },
    },
    form,
  } = useHookFormAction(signUpAction, zodResolver(signUpSchema), {
    actionProps: {
      onSuccess: ({ input }) => {
        onSignUpComplete(input.email)
      },
    },
  })

  const isSigningUp = isLoadingGoogle || isExecuting

  return (
    <div className={cn('space-y-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={handleSubmitWithAction} className="space-y-4">
          <FormInput
            id="name"
            label="Nombre completo"
            name="name"
            placeholder="John Doe"
            type="text"
            autoCapitalize="words"
            autoComplete="name"
            autoCorrect="off"
            className="mt-1"
            disabled={isSigningUp}
          />
          <FormInput
            id="email"
            name="email"
            label="Correo electrónico"
            placeholder="me@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isSigningUp}
            className="mt-1"
          />
          <FormInput
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            disabled={isSigningUp}
            className="mt-1"
          />
          <Button className="w-full" disabled={isSigningUp}>
            {isSigningUp && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Registrarse
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
        disabled={isSigningUp}
        className="w-full"
      >
        {isSigningUp ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}
        Google
      </Button>
    </div>
  )
}
