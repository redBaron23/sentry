'use client'

import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

interface DataItem {
  name: string
  High: number
  Medium: number
  Low: number
}

const data: DataItem[] = [
  { name: 'Finance', High: 100, Medium: 0, Low: 0 },
  { name: 'Compliance', High: 0, Medium: 0, Low: 100 },
  { name: 'No Selection', High: 40, Medium: 60, Low: 0 },
]

const config = {
  High: { label: 'High', color: '#1e40af' },
  Medium: { label: 'Medium', color: '#3b82f6' },
  Low: { label: 'Low', color: '#7dd3fc' },
}

const FindingsBarChart: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <h6>Findings by Business Unit</h6>
      <ChartContainer config={config}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="vertical">
            <CartesianGrid horizontal={false} />
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="High" stackId="a" fill={config.High.color}>
              <LabelList dataKey="High" position="center" fill="white" />
            </Bar>
            <Bar dataKey="Medium" stackId="a" fill={config.Medium.color}>
              <LabelList dataKey="Medium" position="center" fill="white" />
            </Bar>
            <Bar dataKey="Low" stackId="a" fill={config.Low.color}>
              <LabelList dataKey="Low" position="center" fill="white" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

export default FindingsBarChart
