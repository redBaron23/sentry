"use client";

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ROIData {
  name: string;
  inversionSeguridad: number;
  perdidasEvitadas: number;
  roi: number;
}

interface Props {
  title: string;
  description: string;
  data: ROIData[];
}

const chartConfig: ChartConfig = {
  inversionSeguridad: {
    label: "Inversión en Seguridad",
    color: "hsl(var(--chart-investment))",
  },
  perdidasEvitadas: {
    label: "Pérdidas Evitadas",
    color: "hsl(var(--chart-savings))",
  },
  roi: { label: "ROI", color: "hsl(var(--chart-roi))" },
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const formatPercentage = (value: number) => `${value.toFixed(1)}%`;

export function ROIChart({ title, description, data }: Props) {
  return (
    <div className="flex h-full flex-col">
      {title && <h6 className="mb-2 text-center font-bold">{title}</h6>}
      {description && (
        <p className="mb-4 text-center text-sm text-muted-foreground">
          {description}
        </p>
      )}
      <div className="flex-grow">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" scale="band" />
              <YAxis
                yAxisId="left"
                orientation="left"
                stroke={chartConfig.inversionSeguridad.color}
                tickFormatter={formatCurrency}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke={chartConfig.roi.color}
                tickFormatter={formatPercentage}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="inversionSeguridad"
                name="Inversión en Seguridad"
                fill={chartConfig.inversionSeguridad.color}
                barSize={20}
              />
              <Bar
                yAxisId="left"
                dataKey="perdidasEvitadas"
                name="Pérdidas Evitadas"
                fill={chartConfig.perdidasEvitadas.color}
                barSize={20}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="roi"
                name="ROI"
                stroke={chartConfig.roi.color}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
}
