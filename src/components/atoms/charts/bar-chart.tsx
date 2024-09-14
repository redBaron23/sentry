"use client";

import React from "react";
import {
  Bar,
  CartesianGrid,
  LabelList,
  BarChart as RechartBarChart,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { ChartContainer, ChartTooltip } from "../../ui/chart";

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

interface CustomXAxisTickProps {
  x: number;
  y: number;
  payload: { value: string };
  data: Record<string, BarData>;
}

const CustomXAxisTick: React.FC<CustomXAxisTickProps> = ({
  x,
  y,
  payload,
  data,
}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="currentColor"
        transform="rotate(-35)"
        className="text-xs text-gray-600"
      >
        {data[payload.value]?.label || payload.value}
      </text>
    </g>
  );
};

export const BarChart: React.FC<Props> = ({
  title,
  data,
  showYAxis = true,
}) => {
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
          <ResponsiveContainer width="100%" height={400}>
            <RechartBarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 65 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                tickLine={false}
                height={60}
                tick={<CustomXAxisTick data={data} />}
              />
              {showYAxis && (
                <YAxis axisLine={false} tickLine={false} tickMargin={10} />
              )}
              <ChartTooltip
                cursor={false}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const { name, quantity } = payload[0].payload as {
                      name: string;
                      quantity: number;
                    };
                    return (
                      <div className="rounded bg-white p-2 shadow-md dark:bg-gray-800">
                        <p className="font-bold text-gray-900 dark:text-gray-100">
                          {data[name]?.label || name}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          Cantidad: {quantity}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
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
                  className="fill-current text-gray-900 dark:text-gray-100"
                  fontSize={12}
                />
              </Bar>
            </RechartBarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};
