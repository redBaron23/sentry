"use client";

import {
  Label,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface Props {
  value: number;
  title?: string;
}

export function VariationChart({ title, value }: Props) {
  const chartData = [{ variation: value }];

  const currentBackgroundColor =
    value >= 0 ? "variation-positive" : "variation-negative";

  const chartConfig = {
    variation: {
      label: "variation",
      color: `hsl(var(--chart-${currentBackgroundColor}))`,
    },
  } satisfies ChartConfig;

  return (
    <div className="flex w-full flex-col text-center">
      {title && <h6>{title}</h6>}
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-full max-w-[250px]"
      >
        <RadialBarChart
          data={chartData}
          startAngle={180}
          endAngle={0}
          innerRadius={70}
          outerRadius={120}
        >
          <PolarAngleAxis
            type="number"
            domain={[-100, 100]}
            angleAxisId={0}
            tick={false}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarRadiusAxis
            tick={false}
            tickLine={false}
            axisLine={false}
            type="number"
            domain={[0, 100]}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 16}
                        className="fill-foreground text-2xl font-bold"
                      >
                        {value} %
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 4}
                        className="fill-muted-foreground"
                      >
                        Variacion
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
          <RadialBar
            background
            dataKey="variation"
            stackId="a"
            cornerRadius={5}
            fill="var(--color-variation)"
            className="stroke-transparent stroke-2"
          />
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
}
