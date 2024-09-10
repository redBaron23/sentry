"use client";

import {
  Bar,
  CartesianGrid,
  LabelList,
  BarChart as RechartBarChart,
  Rectangle,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

interface BarData {
  label: string;
  color: string;
  quantity: number;
}

interface Props {
  title?: string;
  data: Record<string, BarData>;
  showYAxis?: boolean;
}

export function BarChart({ title, data, showYAxis = true }: Props) {
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    ...value,
    fill: value.color,
  }));

  const config = Object.fromEntries(
    Object.entries(data).map(([key, { label, color }]) => [
      key,
      { label, color },
    ]),
  );

  return (
    <div className="flex h-full flex-col">
      {title && <h6 className="mb-2 text-center">{title}</h6>}
      <div className="flex-grow">
        <ChartContainer config={config} className="h-full w-full">
          <RechartBarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => data[value]?.label || value}
            />
            {showYAxis && (
              <YAxis axisLine={false} tickLine={false} tickMargin={10} />
            )}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="quantity"
              strokeWidth={2}
              radius={8}
              activeBar={({ ...props }) => (
                <Rectangle
                  {...props}
                  fillOpacity={0.8}
                  stroke={props.fill}
                  strokeDasharray={4}
                  strokeDashoffset={4}
                />
              )}
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
    </div>
  );
}
