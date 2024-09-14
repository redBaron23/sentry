import { AreaChart } from "@/components/atoms/charts/area-chart";
import { RiskMatrix } from "@/components/atoms/charts/risk-matrix";
import ChartCard from "@/components/organisms/charts/chart-card";

const savingsChartData = {
  Jan: { label: "Enero", value: 50000 },
  Feb: { label: "Febrero", value: 75000 },
  Mar: { label: "Marzo", value: 100000 },
  Apr: { label: "Abril", value: 120000 },
  May: { label: "Mayo", value: 180000 },
  Jun: { label: "Junio", value: 200000 },
};

const riskData = [
  { x: 2, y: 3, name: "Riesgo A" },
  { x: 1, y: 4, name: "Riesgo B" },
  { x: 3, y: 2, name: "Riesgo C" },
  // ... más puntos de riesgo
];

const riskConfig = {
  veryLow: { label: "Very Low", color: "#00FF00" },
  low: { label: "Low", color: "#FFFF00" },
  high: { label: "High", color: "#FFA500" },
  veryHigh: { label: "Very High", color: "#FF0000" },
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
        <RiskMatrix title="Matriz de Riesgo" data={riskData} />
      </ChartCard>
    </div>
  );
}
