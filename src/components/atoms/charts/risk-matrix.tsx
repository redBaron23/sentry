"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface RiskData {
  x: number;
  y: number;
  name: string;
}

interface Props {
  title: string;
  data: RiskData[];
}

const CustomShape = (props: any) => {
  const { cx, cy, payload } = props;
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={8}
        stroke="hsl(var(--foreground))"
        strokeWidth={2}
        fill="hsl(var(--chart-1))"
      />
      <text
        x={cx}
        y={cy - 15}
        textAnchor="middle"
        fill="hsl(var(--foreground))"
        fontSize="12"
        fontWeight="bold"
      >
        {payload.name}
      </text>
    </g>
  );
};

const chartConfig: ChartConfig = {
  low: { label: "Bajo", color: "hsl(var(--chart-low))" },
  medium: { label: "Medio", color: "hsl(var(--chart-medium))" },
  high: { label: "Alto", color: "hsl(var(--chart-high))" },
  critical: { label: "Crítico", color: "hsl(var(--chart-threat))" },
};

export function RiskMatrix({ title, data }: Props) {
  const areaData = [
    { x: 0, low: 4, medium: 0, high: 0, critical: 0 },
    { x: 1, low: 3, medium: 1, high: 0, critical: 0 },
    { x: 2, low: 2, medium: 2, high: 0, critical: 0 },
    { x: 3, low: 1, medium: 2, high: 1, critical: 0 },
    { x: 4, low: 0, medium: 1, high: 2, critical: 1 },
  ];

  return (
    <div className="flex h-full flex-col">
      {title && <h6 className="mb-2 text-center font-bold">{title}</h6>}

      <div className="flex-grow">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={areaData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="x"
                type="number"
                domain={[0, 4]}
                tickCount={5}
                label={{ value: "Probabilidad", position: "bottom", offset: 0 }}
              />
              <YAxis
                type="number"
                domain={[0, 4]}
                tickCount={5}
                label={{
                  value: "Impacto",
                  angle: -90,
                  position: "insideLeft",
                  offset: 10,
                }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="low"
                stackId="1"
                stroke={chartConfig.low.color}
                fill={chartConfig.low.color}
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="medium"
                stackId="1"
                stroke={chartConfig.medium.color}
                fill={chartConfig.medium.color}
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="high"
                stackId="1"
                stroke={chartConfig.high.color}
                fill={chartConfig.high.color}
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="critical"
                stackId="1"
                stroke={chartConfig.critical.color}
                fill={chartConfig.critical.color}
                fillOpacity={0.6}
              />
              <Scatter name="Riesgos" fill="#8884d8" shape={<CustomShape />} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
}
