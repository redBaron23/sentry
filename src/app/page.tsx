import { BarChart } from "@/components/atoms/charts/bar-chart";
import { RadialChart } from "@/components/atoms/charts/radial-chart";
import { VariationChart } from "@/components/atoms/charts/variation-chart";
import TicketCountCard from "@/components/atoms/ticket-count-card";
import ChartCard from "@/components/organisms/charts/chart-card";
import Link from "next/link";

const vulnerabilitiesChartData = {
  critical: {
    label: "Critical",
    color: "hsl(var(--chart-critical))",
    quantity: 40,
  },
  high: { label: "High", color: "hsl(var(--chart-high))", quantity: 60 },
  medium: { label: "Medium", color: "hsl(var(--chart-medium))", quantity: 140 },
  low: { label: "Low", color: "hsl(var(--chart-low))", quantity: 30 },
};

const ticketsChartData = {
  mar: {
    label: "Marzo",
    color: "hsl(var(--chart-low))",
    quantity: 6,
  },
  abr: { label: "Abril", color: "hsl(var(--chart-low))", quantity: 0 },
  may: { label: "Mayo", color: "hsl(var(--chart-low))", quantity: 3 },
  jun: { label: "Junio", color: "hsl(var(--chart-low))", quantity: 0 },
  jul: { label: "Jul", color: "hsl(var(--chart-low))", quantity: 4 },
  ago: { label: "Agosto", color: "hsl(var(--chart-low))", quantity: 6 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 pb-3">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-3">
        <ChartCard title="Vulnerabilidades IT" cols={3}>
          <div className="flex flex-col gap-7 items-center">
            <div className="flex flex-col gap-3">
              <h6>Mes base</h6>
              <p className="text-3xl font-bold">4,049</p>
            </div>
            <div className="flex flex-col gap-3">
              <h6>Octubre</h6>
              <p className="text-3xl font-bold">3,501</p>
            </div>
          </div>

          <BarChart
            title="Vulnerabilidades por Severidad"
            data={vulnerabilitiesChartData}
          />
          <VariationChart value={22.1} title="Porcentaje de variacion" />
        </ChartCard>

        <ChartCard title="Gestion de Incidentes" cols={3}>
          <div className="flex flex-col gap-3 ">
            <h6>Total de Incidentes Alto/Criticos</h6>
            <span className="text-3xl font-bold">0</span>
          </div>

          <div className="flex flex-col gap-3">
            <h6>Alertas Cerradas por Estado</h6>
            <div className="space-y-2">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">348</span>
                <Link href="#" className="text-sm text-blue-600">
                  Falso Positivo
                </Link>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">0</span>
                <Link href="#" className="text-sm text-blue-600">
                  Incidente
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h6>Detalle de Escalamiento</h6>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">5</span>
              <Link href="#" className="text-sm text-blue-600">
                Fuera de Hora
              </Link>
            </div>
          </div>
        </ChartCard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-3">
            <TicketCountCard title="Tickets Creados" count={8} />
            <TicketCountCard title="Tickets Creados" count={6} />
            <TicketCountCard title="Tickets Creados" count={22} />
          </div>
          <ChartCard
            title="Tickets Resueltos por mes (Ultimos 12 meses"
            cols={1}
          >
            <BarChart data={ticketsChartData} />
          </ChartCard>
        </div>
      </div>
    </main>
  );
}
