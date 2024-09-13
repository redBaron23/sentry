import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sentrio - Contacto",
  description:
    "Póngase en contacto con el equipo de Sentrio para cualquier consulta o soporte.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-primary">
        Contacto
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Póngase en contacto con nosotros
          </h2>
          <p className="text-muted-foreground">
            Estamos aquí para ayudarle con cualquier pregunta sobre nuestros
            servicios de ciberseguridad para el sector bancario. No dude en
            contactarnos.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-foreground">soporte@sentrio.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-foreground">+54 (221) 6790804</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-foreground">
                Ciudad Autónoma de Buenos Aires, Argentina
              </span>
            </div>
          </div>
        </div>

        <form className="space-y-6 rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo</Label>
            <Input id="name" placeholder="Juan Pérez" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="me@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              placeholder="Escriba su mensaje aquí..."
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full">
            Enviar mensaje
          </Button>
        </form>
      </div>

      <div className="mt-12 rounded-lg bg-muted p-6 text-center">
        <p className="text-muted-foreground">
          Nuestro equipo de soporte está disponible de lunes a viernes, de 9:00
          a 18:00 (GMT-3). Nos esforzamos por responder a todas las consultas
          dentro de 24 horas hábiles.
        </p>
      </div>
    </div>
  );
}
