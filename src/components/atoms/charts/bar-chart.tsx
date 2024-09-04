"use client";

import {
  Bar,
  CartesianGrid,
  LabelList,
  BarChart as RechartBarChart,
  Rectangle,
  XAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart with an active bar and labels";

const chartData = [
  { vulnerability: "critical", quantity: 40, fill: "var(--color-critical)" },
  { vulnerability: "high", quantity: 60, fill: "var(--color-high)" },
  { vulnerability: "medium", quantity: 140, fill: "var(--color-medium)" },
  { vulnerability: "low", quantity: 30, fill: "var(--color-low)" },
];

const chartConfig = {
  critical: {
    label: "Critical",
    color: "hsl(var(--chart-critical))",
  },
  high: {
    label: "High",
    color: "hsl(var(--chart-high))",
  },
  medium: {
    label: "Medium",
    color: "hsl(var(--chart-medium))",
  },
  low: {
    label: "Low",
    color: "hsl(var(--chart-low))",
  },
} satisfies ChartConfig;

interface Props {
  title?: string;
}

export function BarChart({ title }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {title && <h5 className="self-center">{title}</h5>}
      <ChartContainer config={chartConfig}>
        <RechartBarChart
          accessibilityLayer
          margin={{ top: 20 }}
          data={chartData}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="vulnerability"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label
            }
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey="quantity"
            strokeWidth={2}
            radius={8}
            activeBar={({ ...props }) => {
              return (
                <Rectangle
                  {...props}
                  fillOpacity={0.8}
                  stroke={props.payload.fill}
                  strokeDasharray={4}
                  strokeDashoffset={4}
                />
              );
            }}
          >
            <LabelList
              dataKey="quantity"
              position="top"
              offset={10}
              fill="var(--foreground)"
              fontSize={12}
            />
          </Bar>
        </RechartBarChart>
      </ChartContainer>
    </div>
  );
}
