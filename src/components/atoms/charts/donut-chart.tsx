"use client";

import { Cell, Pie, PieChart as RechartPieChart } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface PieData {
  label: string;
  color: string;
  quantity: number;
}

interface Props {
  title?: string;
  data: Record<string, PieData>;
}

const renderCustomizedLabel = ({ percent, quantity }: any) => {
  return `${quantity} (${(percent * 100).toFixed(0)}%)`;
};

export function DonutChart({ title, data }: Props) {
  const totalQuantity = Object.values(data).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    ...value,
    percentage: ((value.quantity / totalQuantity) * 100).toFixed(1),
  }));

  const config = Object.fromEntries(
    Object.entries(data).map(([key, { label, color }]) => [
      key,
      { label, color },
    ])
  );

  return (
    <div className="flex flex-col gap-3 text-center">
      {title && <h6>{title}</h6>}
      <ChartContainer config={config}>
        <RechartPieChart>
          <ChartLegend content={<ChartLegendContent nameKey="name" />} />
          <Pie
            data={chartData}
            dataKey="quantity"
            nameKey="name"
            innerRadius={80}
            labelLine={true}
            label={renderCustomizedLabel}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </RechartPieChart>
      </ChartContainer>
    </div>
  );
}
