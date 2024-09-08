"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Label,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

interface RadialChartProps {
  name: string;
  value: number;
  title?: string;
  color?: string;
  maxWidth?: number;
  startAngle?: number;
  endAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
}

export function RadialChart({
  name,
  value,
  title,
  color = "hsl(var(--chart-variation-positive))",
  maxWidth = 200,
  startAngle = 180,
  endAngle = 0,
  innerRadius = 70,
  outerRadius = 120,
}: RadialChartProps) {
  const chartData = [
    {
      name,
      value,
    },
  ];

  const chartConfig: ChartConfig = {
    [name]: {
      label: name,
      color: color,
    },
  };

  return (
    <div className="flex flex-col gap-3 w-full text-center">
      {title && <h6>{title}</h6>}
      <div className={`w-full min-w-[${maxWidth}px]`}>
        <ChartContainer
          config={chartConfig}
          className={`mx-auto aspect-square   max-w-[${maxWidth}px]`}
        >
          <RadialBarChart
            data={chartData}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              dataKey="value"
              fill={color}
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent nameKey={name} />}
            />
            <PolarRadiusAxis tick={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <>
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-2xl font-bold"
                          >
                            {value}%
                          </tspan>
                        </text>
                        <text x={viewBox.cx} y={viewBox.cy}>
                          <tspan
                            x={(viewBox.cx || 0) - 80}
                            y={(viewBox.cy || 0) + 20}
                            textAnchor="start"
                            className="fill-muted-foreground text-xs"
                          >
                            0%
                          </tspan>
                          <tspan
                            x={(viewBox.cx || 0) + 90}
                            y={(viewBox.cy || 0) + 20}
                            textAnchor="end"
                            className="fill-muted-foreground text-xs"
                          >
                            100%
                          </tspan>
                        </text>
                      </>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
