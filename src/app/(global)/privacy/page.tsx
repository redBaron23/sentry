import { PAGES } from '@/lib/constants/pages'
import {
  AlertTriangle,
  Eye,
  Lock,
  RefreshCw,
  Shield,
  Users,
} from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sentrio - Política de Privacidad',
  description:
    'Política de privacidad de la plataforma Sentrio para la gestión de ciberseguridad bancaria en Argentina.',
}

const privacySections = [
  {
    title: 'Recopilación de Información',
    content:
      'Recopilamos información necesaria para proporcionar nuestros servicios de ciberseguridad, en cumplimiento con la Ley de Protección de Datos Personales (Ley 25.326) de Argentina.',
    icon: <Shield className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Uso de la Información',
    content:
      'Utilizamos la información recopilada exclusivamente para los fines declarados, cumpliendo con los principios de calidad de los datos establecidos en la legislación argentina.',
    icon: <Eye className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Protección de Datos',
    content:
      'Implementamos medidas de seguridad técnicas y organizativas conforme a las normativas argentinas, incluyendo las disposiciones de la Dirección Nacional de Protección de Datos Personales.',
    icon: <Lock className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Actualizaciones de la Política',
    content:
      'Actualizaremos esta política de privacidad según sea necesario para cumplir con los cambios en la legislación argentina. Le notificaremos sobre cualquier modificación significativa.',
    icon: <RefreshCw className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Transferencia de Datos',
    content:
      'No realizamos transferencias internacionales de datos personales sin el consentimiento expreso del titular, en cumplimiento con la Ley 25.326 y sus reglamentaciones.',
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Sus Derechos',
    content:
      'Usted tiene los derechos de acceso, rectificación, actualización y supresión de sus datos personales, conforme a lo establecido en la Ley 25.326 de Argentina.',
    icon: <AlertTriangle className="h-8 w-8 text-primary" />,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-primary">
        Política de Privacidad
      </h1>

      <div className="mb-8 text-center text-muted-foreground">
        <p>Última actualización: {new Date().toLocaleDateString('es-AR')}</p>
        <p>
          Esta política de privacidad se aplica a los servicios de Sentrio en
          Argentina.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {privacySections.map((section, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-4 flex items-center">
              {section.icon}
              <h2 className="ml-3 text-xl font-semibold text-primary">
                {section.title}
              </h2>
            </div>
            <p className="text-foreground">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-muted p-6 text-center">
        <p className="text-muted-foreground">
          Para ejercer sus derechos o realizar consultas sobre esta política de
          privacidad, puede contactarnos a través de{' '}
          <a
            href={PAGES.CONTACT}
            className="font-medium text-primary hover:underline"
          >
            nuestro formulario de contacto
          </a>
          .
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Autoridad de Aplicación: Agencia de Acceso a la Información Pública,
          Av. Pte. Julio A. Roca 710, Ciudad de Buenos Aires.
        </p>
      </div>
    </div>
  )
}
