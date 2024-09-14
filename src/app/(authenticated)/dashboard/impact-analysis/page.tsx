import { RiskMatrix } from "@/components/atoms/charts/risk-matrix";
import { ROIChart } from "@/components/atoms/charts/roi-chart";
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
  { x: 0, y: null, name: null, low: 4, medium: 0, high: 0, critical: 0, cn: 1 },
  { x: 1, y: null, name: null, low: 3, medium: 1, high: 0, critical: 0, cn: 1 },
  { x: 2, y: null, name: null, low: 2, medium: 2, high: 0, critical: 0, cn: 3 },
  { x: 3, y: null, name: null, low: 1, medium: 2, high: 1, critical: 0 },
  { x: 4, y: null, name: null, low: 0, medium: 1, high: 2, critical: 1, cn: 2 },
];

const roiData = [
  { name: "Ene", inversionSeguridad: 50000, perdidasEvitadas: 75000, roi: 50 },
  {
    name: "Feb",
    inversionSeguridad: 55000,
    perdidasEvitadas: 90000,
    roi: 63.6,
  },
  {
    name: "Mar",
    inversionSeguridad: 60000,
    perdidasEvitadas: 110000,
    roi: 83.3,
  },
  {
    name: "Abr",
    inversionSeguridad: 58000,
    perdidasEvitadas: 95000,
    roi: 63.8,
  },
  {
    name: "May",
    inversionSeguridad: 62000,
    perdidasEvitadas: 120000,
    roi: 93.5,
  },
  {
    name: "Jun",
    inversionSeguridad: 65000,
    perdidasEvitadas: 135000,
    roi: 107.7,
  },
  {
    name: "Jul",
    inversionSeguridad: 70000,
    perdidasEvitadas: 160000,
    roi: 128.6,
  },
  {
    name: "Ago",
    inversionSeguridad: 72000,
    perdidasEvitadas: 170000,
    roi: 136.1,
  },
  {
    name: "Sep",
    inversionSeguridad: 68000,
    perdidasEvitadas: 145000,
    roi: 113.2,
  },
  {
    name: "Oct",
    inversionSeguridad: 75000,
    perdidasEvitadas: 180000,
    roi: 140,
  },
  {
    name: "Nov",
    inversionSeguridad: 80000,
    perdidasEvitadas: 200000,
    roi: 150,
  },
  {
    name: "Dic",
    inversionSeguridad: 85000,
    perdidasEvitadas: 220000,
    roi: 158.8,
  },
];

export default function ImpactAnalysisPage() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <ChartCard
        title="Impacto Financiero por Prevención de Incidentes"
        cols={1}
      >
        <ROIChart
          title="Análisis Anual de Inversión en Ciberseguridad"
          description="Inversión mensual, pérdidas evitadas y ROI para el año fiscal"
          data={roiData}
        />
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
