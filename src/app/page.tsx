import { BarChart } from "@/components/atoms/charts/bar-chart";
import { RadialChart } from "@/components/atoms/charts/radial-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartColumnIncreasing } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 mb-3">
        <Card>
          <CardHeader className="border-b pb-4">
            <div className="flex justify-between items-center">
              <CardTitle>Parches de seguridad (SCCM)</CardTitle>
              <ChartColumnIncreasing className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4 pt-6">
            <RadialChart title="Server" name="Server" value={55} />
            <RadialChart title="Work Station" name="Work Station" value={55} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b pb-4">
            <div className="flex justify-between items-center">
              <CardTitle>Antivirus</CardTitle>
              <ChartColumnIncreasing className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4 pt-6">
            <RadialChart title="Server" name="Server" value={99} />
            <RadialChart title="Work Station" name="Work Station" value={99} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b pb-4">
            <div className="flex justify-between items-center">
              <CardTitle>Bóveda de contraseñas</CardTitle>
              <ChartColumnIncreasing className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4 pt-6">
            <RadialChart title="Server" name="Server" value={97} />
            <RadialChart title="Work Station" name="Work Station" value={95} />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card>
          <CardHeader className="border-b pb-4">
            <div className="flex justify-between items-center">
              <CardTitle>Parches de seguridad (SCCM)</CardTitle>
              <ChartColumnIncreasing className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4 pt-6">
            <BarChart title="Vulnerabilidades por severidad" />
            <RadialChart title="Work Station" name="Work Station" value={55} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b pb-4">
            <div className="flex justify-between items-center">
              <CardTitle>Antivirus</CardTitle>
              <ChartColumnIncreasing className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4 pt-6">
            <RadialChart title="Server" name="Server" value={99} />
            <RadialChart title="Work Station" name="Work Station" value={99} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
