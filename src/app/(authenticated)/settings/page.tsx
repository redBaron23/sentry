import { SettingsForm } from "@/components/organisms/settings/settings-form";
import { PAGES } from "@/lib/constants/pages";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";

export const metadata: Metadata = {
  title: "Sentrio - Configuración",
  description: "Administra la configuración de tu cuenta Sentrio.",
};

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-primary">
        Configuración de cuenta
      </h1>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="security">Seguridad</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Información del perfil</CardTitle>
            </CardHeader>
            <CardContent>
              <SettingsForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de seguridad</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Cambiar contraseña</h3>
                  <p className="text-sm text-muted-foreground">
                    Actualiza tu contraseña para mantener tu cuenta segura.
                  </p>
                  <Button variant="outline" className="mt-2">
                    Cambiar contraseña
                  </Button>
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Autenticación de dos factores
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Añade una capa adicional de seguridad a tu cuenta.
                  </p>
                  <Button variant="outline" className="mt-2">
                    Configurar 2FA
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Preferencias de notificaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Configura cómo y cuándo quieres recibir notificaciones.
              </p>
              {/* Add notification preferences options here */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        ¿Necesitas ayuda? Consulta nuestra{" "}
        <Link
          href={PAGES.HELP}
          className="font-medium text-primary hover:underline"
        >
          página de ayuda
        </Link>{" "}
        o{" "}
        <Link
          href={PAGES.CONTACT}
          className="font-medium text-primary hover:underline"
        >
          contáctanos
        </Link>
        .
      </p>
    </div>
  );
}
