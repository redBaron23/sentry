'use client'

import { Icons } from '@/lib/constants/icons'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import FormInput from '../../atoms/form-inputs/form-input'
import { Button } from '../../ui/button'
import { Form } from '../../ui/form'

const settingsSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  companyName: z.string().min(1, 'Company name is required'),
  jobTitle: z.string().optional(),
})

type SettingsFormValues = z.infer<typeof settingsSchema>

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function SettingsForm({ className, ...props }: Props) {
  const [isSaving, setIsSaving] = useState(false)

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      fullName: '',
      email: '',
      companyName: '',
      jobTitle: '',
    },
  })

  const onSubmit = (data: SettingsFormValues) => {
    setIsSaving(true)
    // Simulating an API call
    setTimeout(() => {
      console.log(data)
      setIsSaving(false)
    }, 2000)
  }

  return (
    <div className={cn('space-y-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormInput
            id="fullName"
            name="fullName"
            label="Nombre completo"
            placeholder="John Doe"
            disabled={isSaving}
          />
          <FormInput
            id="email"
            name="email"
            label="Correo electrónico"
            placeholder="john@example.com"
            type="email"
            disabled={isSaving}
          />
          <FormInput
            id="companyName"
            name="companyName"
            label="Nombre de la empresa"
            placeholder="Acme Inc."
            disabled={isSaving}
          />
          <FormInput
            id="jobTitle"
            name="jobTitle"
            label="Cargo"
            placeholder="Gerente de Seguridad"
            disabled={isSaving}
          />
          <Button className="w-full" disabled={isSaving}>
            {isSaving && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Guardar cambios
          </Button>
        </form>
      </Form>
    </div>
  )
}
