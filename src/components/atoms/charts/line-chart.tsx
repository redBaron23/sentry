'use client'

import {
  CartesianGrid,
  Line,
  LineChart as RechartLineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../../ui/chart'

interface LineData {
  label: string
  color: string
  values: Record<string, number>
}

interface Props {
  title?: string
  data: Record<string, LineData>
}

export function LineChart({ title, data }: Props) {
  const chartData = Object.keys(data[Object.keys(data)[0]].values).map(
    (month) => ({
      name: month,
      ...Object.fromEntries(
        Object.entries(data).map(([key, { values }]) => [key, values[month]]),
      ),
    }),
  )

  const config = Object.fromEntries(
    Object.entries(data).map(([key, { label, color }]) => [
      key,
      { label, color },
    ]),
  )

  return (
    <div className="flex h-full flex-col">
      {title && <h6 className="mb-2 text-center">{title}</h6>}
      <div className="flex-grow">
        <ChartContainer config={config} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RechartLineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              {Object.entries(data).map(([key, { color }]) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={color}
                  strokeWidth={2}
                />
              ))}
            </RechartLineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  )
}
