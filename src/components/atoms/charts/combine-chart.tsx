"use client";

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

interface DataPoint {
  label: string;
  color: string;
  quantity?: number;
  value?: number;
}

interface BarDataPoint {
  month: string;
  closedFalsePositive: DataPoint;
  inProgress: DataPoint;
  unmanaged: DataPoint;
}

interface LineDataPoint {
  month: string;
  avgResolutionTime: DataPoint;
}

interface Props {
  title?: string;
  description?: string;
  barData: BarDataPoint[];
  lineData: LineDataPoint[];
}

export function CombinedChart({
  title,
  description,
  barData,
  lineData,
}: Props) {
  const combinedData = barData.map((barPoint) => {
    const linePoint = lineData.find((lp) => lp.month === barPoint.month);
    const total =
      (barPoint.closedFalsePositive.quantity ?? 0) +
      (barPoint.inProgress.quantity ?? 0) +
      (barPoint.unmanaged.quantity ?? 0);

    return {
      month: barPoint.month,
      closedFalsePositive: barPoint.closedFalsePositive.quantity,
      inProgress: barPoint.inProgress.quantity,
      unmanaged: barPoint.unmanaged.quantity,
      avgResolutionTime: linePoint?.avgResolutionTime.value,
      total,
    };
  });

  const config = {
    closedFalsePositive: {
      label: "Cerrado como Falso Positivo",
      color: barData[0].closedFalsePositive.color,
    },
    inProgress: { label: "En Progreso", color: barData[0].inProgress.color },
    unmanaged: { label: "Sin Gestionar", color: barData[0].unmanaged.color },
    avgResolutionTime: {
      label: "Tiempo promedio de resolución (horas)",
      color: lineData[0].avgResolutionTime.color,
    },
  };

  const barKeys = ["closedFalsePositive", "inProgress", "unmanaged"];

  return (
    <div className="flex h-full flex-col gap-3">
      {title && <h6>{title}</h6>}
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      <div className="flex-grow">
        <ChartContainer config={config} className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={combinedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.toString().slice(0, 3)}
              />
              <YAxis
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              {barKeys.map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  stackId="a"
                  fill={config[key as keyof typeof config].color}
                  radius={index === 0 ? [0, 0, 8, 8] : [8, 8, 0, 0]}
                  yAxisId="left"
                >
                  {index === barKeys.length - 1 && (
                    <LabelList
                      dataKey="total"
                      position="top"
                      offset={10}
                      fill="var(--foreground)"
                      fontSize={12}
                    />
                  )}
                </Bar>
              ))}
              <Line
                type="monotone"
                dataKey="avgResolutionTime"
                stroke={config.avgResolutionTime.color}
                yAxisId="right"
                name="avgResolutionTime"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
}
