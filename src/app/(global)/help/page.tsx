import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PAGES } from '@/lib/constants/pages'
import {
  Book,
  FileQuestion,
  MessageSquare,
  Search,
  Shield,
  Wrench,
} from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sentrio - Centro de Ayuda',
  description:
    'Centro de ayuda y recursos para usuarios de la plataforma Sentrio de ciberseguridad bancaria.',
}

const helpCategories = [
  {
    title: 'Guías de Uso',
    description:
      'Tutoriales paso a paso sobre cómo usar las funciones de Sentrio.',
    icon: <Book className="h-8 w-8 text-primary" />,
    link: '#',
  },
  {
    title: 'Preguntas Frecuentes',
    description:
      'Respuestas a las preguntas más comunes sobre nuestra plataforma.',
    icon: <FileQuestion className="h-8 w-8 text-primary" />,
    link: '#',
  },
  {
    title: 'Seguridad',
    description:
      'Información sobre nuestras prácticas de seguridad y consejos para usuarios.',
    icon: <Shield className="h-8 w-8 text-primary" />,
    link: '#',
  },
  {
    title: 'Solución de Problemas',
    description: 'Guías para resolver problemas comunes y errores conocidos.',
    icon: <Wrench className="h-8 w-8 text-primary" />,
    link: '#',
  },
]

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-primary">
        Centro de Ayuda
      </h1>

      <div className="mb-12 flex justify-center">
        <div className="relative w-full max-w-2xl">
          <Input
            type="search"
            placeholder="Buscar en el centro de ayuda..."
            className="py-2 pl-10 pr-4"
          />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {helpCategories.map((category, index) => (
          <Link key={index} href={category.link} className="block">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex items-center">
                {category.icon}
                <h2 className="ml-3 text-xl font-semibold text-primary">
                  {category.title}
                </h2>
              </div>
              <p className="text-foreground">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-muted p-6 text-center">
        <h3 className="mb-4 text-lg font-semibold text-primary">
          ¿No encuentra lo que busca?
        </h3>
        <p className="mb-4 text-muted-foreground">
          Si no ha encontrado la respuesta que necesita, nuestro equipo de
          soporte está listo para ayudarle.
        </p>
        <Button asChild>
          <Link href={PAGES.CONTACT} className="inline-flex items-center">
            <MessageSquare className="mr-2 h-4 w-4" />
            Contactar Soporte
          </Link>
        </Button>
      </div>
    </div>
  )
}
