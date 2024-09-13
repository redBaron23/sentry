"use client";

import { useEffect, useRef, useState } from "react";
import {
  Label,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

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

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const chartSize = Math.min(containerWidth, maxWidth);
  const scaleFactor = chartSize / maxWidth;
  const adjustedInnerRadius = innerRadius * scaleFactor;
  const adjustedOuterRadius = outerRadius * scaleFactor;

  return (
    <div className="flex w-full flex-col gap-3 text-center" ref={containerRef}>
      {title && <h6>{title}</h6>}
      <div style={{ width: "100%", height: `${chartSize}px` }}>
        <ChartContainer config={chartConfig} className="mx-auto h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              data={chartData}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={adjustedInnerRadius}
              outerRadius={adjustedOuterRadius}
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
                      const fontSize = Math.max(12, 16 * scaleFactor);
                      const smallFontSize = Math.max(8, 12 * scaleFactor);
                      return (
                        <>
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground font-bold"
                              style={{ fontSize: `${fontSize}px` }}
                            >
                              {value}%
                            </tspan>
                          </text>
                          <text x={viewBox.cx} y={viewBox.cy}>
                            <tspan
                              x={(viewBox.cx || 0) - 80 * scaleFactor}
                              y={(viewBox.cy || 0) + 20 * scaleFactor}
                              textAnchor="start"
                              className="fill-muted-foreground"
                              style={{ fontSize: `${smallFontSize}px` }}
                            >
                              0%
                            </tspan>
                            <tspan
                              x={(viewBox.cx || 0) + 90 * scaleFactor}
                              y={(viewBox.cy || 0) + 20 * scaleFactor}
                              textAnchor="end"
                              className="fill-muted-foreground"
                              style={{ fontSize: `${smallFontSize}px` }}
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
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
}
