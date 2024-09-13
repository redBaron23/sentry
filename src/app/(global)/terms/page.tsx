import { PAGES } from "@/lib/constants/pages";
import { Book, Globe, Lock, RefreshCw, Scale, Shield } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sentrio - Términos y Condiciones",
  description: "Términos y condiciones de uso de la plataforma Sentrio.",
};

const sections = [
  {
    title: "Aceptación de los Términos",
    content:
      "Al acceder y utilizar la plataforma Sentrio, usted acepta estar sujeto a estos Términos y Condiciones, así como a todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, está prohibido utilizar o acceder a este sitio.",
    icon: <Shield className="h-8 w-8 text-primary" />,
  },
  {
    title: "Uso de la Plataforma",
    content:
      "Sentrio es una plataforma diseñada exclusivamente para gerentes de ciberseguridad de bancos en Latinoamérica. El uso de esta plataforma está restringido a usuarios autorizados y para fines profesionales relacionados con la gestión de la ciberseguridad en instituciones bancarias.",
    icon: <Lock className="h-8 w-8 text-primary" />,
  },
  {
    title: "Privacidad y Seguridad",
    content:
      "Nos comprometemos a proteger su privacidad y la seguridad de la información. Para más detalles, consulte nuestra Política de Privacidad.",
    icon: <Book className="h-8 w-8 text-primary" />,
  },
  {
    title: "Propiedad Intelectual",
    content:
      "Todo el contenido presente en Sentrio, incluyendo pero no limitado a textos, gráficos, logotipos, íconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de Sentrio o de sus proveedores de contenido y está protegido por las leyes internacionales de derechos de autor.",
    icon: <Scale className="h-8 w-8 text-primary" />,
  },
  {
    title: "Modificaciones",
    content:
      "Nos reservamos el derecho de modificar estos términos en cualquier momento. Es su responsabilidad revisar periódicamente estos términos para estar al tanto de cualquier cambio.",
    icon: <RefreshCw className="h-8 w-8 text-primary" />,
  },
  {
    title: "Ley Aplicable",
    content:
      "Estos términos se regirán e interpretarán de acuerdo con las leyes del país donde Sentrio tenga su sede principal, sin dar efecto a ningún principio de conflictos de leyes.",
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
];

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-primary">
        Términos y Condiciones
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {sections.map((section, index) => (
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
          Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor
          contáctenos a través de{" "}
          <Link
            href={PAGES.CONTACT}
            className="font-medium text-primary hover:underline"
          >
            nuestro formulario de contacto
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
