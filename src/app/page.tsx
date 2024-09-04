import { RadialChart } from "@/components/atoms/charts/radial-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <div className="flex gap-3">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Parches de seguridad (SCCM)</CardTitle>
          </CardHeader>
          <CardContent className="flex">
            <RadialChart title="Server" name="Server" value={55} />
            <RadialChart title="Work Station" name="Work Station" value={55} />
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle>Parches de seguridad (SCCM)</CardTitle>
          </CardHeader>
          <CardContent className="flex">
            <RadialChart name="Server" value={95} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
