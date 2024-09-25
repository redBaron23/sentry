'use client'

import {
  Area,
  CartesianGrid,
  AreaChart as RechartAreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../../ui/chart'

interface AreaData {
  label: string
  value: number
}

interface Props {
  title?: string
  data: Record<string, AreaData>
}

export function AreaChart({ title, data }: Props) {
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    ...value,
  }))

  const config = Object.fromEntries(
    Object.entries(data).map(([key, { label }]) => [
      key,
      { label, color: 'hsl(var(--primary))' },
    ]),
  )

  return (
    <div className="flex h-full flex-col">
      {title && <h6 className="mb-2 text-center">{title}</h6>}
      <div className="flex-grow">
        <ChartContainer config={config} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RechartAreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.3}
              />
            </RechartAreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  )
}
