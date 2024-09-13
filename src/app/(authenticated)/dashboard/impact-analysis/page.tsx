import { AreaChart } from "@/components/atoms/charts/area-chart";
import { LineChart } from "@/components/atoms/charts/line-chart";
import ChartCard from "@/components/organisms/charts/chart-card";

const savingsChartData = {
  Jan: { label: "Enero", value: 50000 },
  Feb: { label: "Febrero", value: 75000 },
  Mar: { label: "Marzo", value: 100000 },
  Apr: { label: "Abril", value: 120000 },
  May: { label: "Mayo", value: 180000 },
  Jun: { label: "Junio", value: 200000 },
};

const riskStatusChartData = {
  high: {
    label: "Alto Riesgo",
    color: "hsl(var(--chart-high))",
    values: {
      Jan: 80,
      Feb: 75,
      Mar: 70,
      Apr: 65,
      May: 60,
      Jun: 55,
    },
  },
  medium: {
    label: "Riesgo Medio",
    color: "hsl(var(--chart-medium))",
    values: {
      Jan: 15,
      Feb: 18,
      Mar: 22,
      Apr: 25,
      May: 28,
      Jun: 30,
    },
  },
  low: {
    label: "Bajo Riesgo",
    color: "hsl(var(--chart-low))",
    values: {
      Jan: 5,
      Feb: 7,
      Mar: 8,
      Apr: 10,
      May: 12,
      Jun: 15,
    },
  },
};

export default function ImpactAnalysisPage() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <ChartCard
        title="Impacto Financiero por Prevención de Incidentes"
        cols={1}
      >
        <AreaChart data={savingsChartData} />
      </ChartCard>
      <ChartCard
        title="Evolución del Perfil de Riesgo de Ciberseguridad"
        cols={1}
      >
        <LineChart data={riskStatusChartData} />
      </ChartCard>
    </div>
  );
}
