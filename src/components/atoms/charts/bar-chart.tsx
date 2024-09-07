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
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface BarData {
  label: string;
  color: string;
  quantity: number;
}

interface Props {
  title?: string;
  data: Record<string, BarData>;
}

export function BarChart({ title, data }: Props) {
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    ...value,
    fill: value.color,
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
        <RechartBarChart
          accessibilityLayer
          margin={{ top: 20 }}
          data={chartData}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => data[value]?.label || value}
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
                  stroke={props.fill}
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
