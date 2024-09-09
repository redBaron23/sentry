import { VariationChart } from "@/components/atoms/charts/variation-chart";
import { ShieldAlert } from "lucide-react";
import { BarChart } from "../atoms/charts/bar-chart";
import ChartCard from "./charts/chart-card";

interface VulnerabilityStatProps {
  label: string;
  value: number;
}

const VulnerabilityStat = ({ label, value }: VulnerabilityStatProps) => (
  <div className="flex h-full flex-col items-center justify-center rounded-lg bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md">
    <h6 className="mb-2 text-sm font-medium text-muted-foreground">{label}</h6>
    <span className="text-3xl font-bold text-foreground">
      {value.toLocaleString()}
    </span>
  </div>
);

interface VulnerabilitiesITProps {
  baseMonth: { label: string; value: number };
  currentMonth: { label: string; value: number };
  vulnerabilitiesChartData: any; // Adjust this type according to your data structure
  variationPercentage: number;
}

export function VulnerabilitiesIT({
  baseMonth,
  currentMonth,
  vulnerabilitiesChartData,
  variationPercentage,
}: VulnerabilitiesITProps) {
  return (
    <ChartCard title="Vulnerabilidades IT" cols={3} icon={ShieldAlert}>
      <div className="flex h-full flex-col justify-between">
        <VulnerabilityStat label={baseMonth.label} value={baseMonth.value} />
        <VulnerabilityStat
          label={currentMonth.label}
          value={currentMonth.value}
        />
      </div>

      <div className="flex h-full flex-col text-center">
        <h6 className="mb-2 text-sm font-medium text-muted-foreground">
          Vulnerabilidades por Severidad
        </h6>
        <div className="flex-grow">
          <BarChart data={vulnerabilitiesChartData} showYAxis={false} />
        </div>
      </div>

      <div className="flex h-full flex-col text-center">
        <h6 className="mb-2 text-sm font-medium text-muted-foreground">
          Porcentaje de variación
        </h6>
        <div className="flex flex-grow items-center justify-center">
          <VariationChart value={variationPercentage} />
        </div>
      </div>
    </ChartCard>
  );
}
