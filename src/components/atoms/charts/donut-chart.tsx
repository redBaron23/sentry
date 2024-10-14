'use client'

import {
  Cell,
  Pie,
  PieChart as RechartPieChart,
  ResponsiveContainer,
} from 'recharts'

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../../ui/chart'

interface PieData {
  label: string
  color: string
  quantity: number
}

interface Props {
  title?: string
  data: Record<string, PieData>
}

const renderCustomizedLabel = ({ percent, quantity }: any) => {
  return `${quantity} (${(percent * 100).toFixed(2)}%)`
}

export function DonutChart({ title, data }: Props) {
  const totalQuantity = Object.values(data).reduce(
    (sum, item) => sum + item.quantity,
    0,
  )

  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    ...value,
    percentage: ((value.quantity / totalQuantity) * 100).toFixed(1),
  }))

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
            <RechartPieChart>
              <ChartLegend
                content={<ChartLegendContent nameKey="name" />}
                verticalAlign="bottom"
                align="center"
              />
              <Pie
                data={chartData}
                dataKey="quantity"
                nameKey="name"
                innerRadius="50%"
                outerRadius="80%"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </RechartPieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  )
}
