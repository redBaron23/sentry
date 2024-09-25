'use client'

import {
  Bar,
  CartesianGrid,
  LabelList,
  BarChart as RechartBarChart,
  XAxis,
  YAxis,
} from 'recharts'

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../../ui/chart'

interface BarData {
  label: string
  color: string
  values: Record<string, number>
}

interface Props {
  title?: string
  description?: string
  data: Record<string, BarData>
  showYAxis?: boolean
}

export function StackedBarChart({
  title,
  description,
  data,
  showYAxis = true,
}: Props) {
  const xAxisLabels = Object.keys(Object.values(data)[0].values)

  const chartData = xAxisLabels.map((label) => {
    const values = Object.entries(data).map(([key, { values }]) => [
      key,
      values[label],
    ])

    const total = values.reduce((sum, [, value]) => sum + +value, 0)
    return {
      name: label,
      ...Object.fromEntries(values),
      total,
    }
  })

  const config = Object.fromEntries(
    Object.entries(data).map(([key, { label, color }]) => [
      key,
      { label, color },
    ]),
  )

  const barKeys = Object.keys(data)

  return (
    <div className="flex flex-col gap-3">
      {title && <h6>{title}</h6>}
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      <ChartContainer config={config}>
        <RechartBarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.toString().slice(0, 3)}
          />
          {showYAxis && (
            <YAxis axisLine={false} tickLine={false} tickMargin={10} />
          )}
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <ChartLegend content={<ChartLegendContent />} />
          {barKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              fill={data[key].color}
              radius={index === 0 ? [0, 0, 8, 8] : [8, 8, 0, 0]}
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
        </RechartBarChart>
      </ChartContainer>
    </div>
  )
}
