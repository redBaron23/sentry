import { BarChart } from "@/components/atoms/charts/bar-chart";
import { RadialChart } from "@/components/atoms/charts/radial-chart";
import { VariationChart } from "@/components/atoms/charts/variation-chart";
import ChartCard from "@/components/organisms/charts/chart-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 mb-3">
        <ChartCard title="Parches de seguridad (SCCM)">
          <RadialChart title="Server" name="Server" value={55} />
          <RadialChart title="Work Station" name="Work Station" value={55} />
        </ChartCard>

        <ChartCard title="Antivirus">
          <RadialChart title="Server" name="Server" value={99} />
          <RadialChart title="Work Station" name="Work Station" value={99} />
        </ChartCard>

        <ChartCard title="Bóveda de contraseñas">
          <RadialChart title="Server" name="Server" value={97} />
          <RadialChart title="Work Station" name="Work Station" value={95} />
        </ChartCard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        <ChartCard title="Vulnerabilidades IT" cols={3}>
          <div className="flex flex-col gap-7 items-center">
            <div className="flex flex-col gap-3">
              <h6>Mes base</h6>
              <p className="font-medium text-2xl">4,049</p>
            </div>
            <div className="flex flex-col gap-3">
              <h6>Octubre</h6>
              <p className="font-medium text-2xl">3,501</p>
            </div>
          </div>

          <BarChart title="Vulnerabilidades por Severidad" />
          <VariationChart value={22.1} title="Porcentaje de variacion" />
        </ChartCard>

        <ChartCard title="Vulnerabilidades IT" cols={3}>
          <div className="flex flex-col gap-7 items-center">
            <div className="flex flex-col gap-3">
              <h6>Mes base</h6>
              <p className="font-medium text-2xl">4,049</p>
            </div>
            <div className="flex flex-col gap-3">
              <h6>Octubre</h6>
              <p className="font-medium text-2xl">3,501</p>
            </div>
          </div>

          <BarChart title="Vulnerabilidades por Severidad" />
          <VariationChart value={22.1} title="Porcentaje de variacion" />
        </ChartCard>
      </div>
    </main>
  );
}
