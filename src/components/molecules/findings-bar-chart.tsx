'use client'

import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
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
      <ChartContainer config={config}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} layout="horizontal">
            <defs>
              <linearGradient id="highGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="mediumGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
              <linearGradient id="lowGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#bae6fd" />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={true}
              horizontal={false}
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
            />
            <YAxis type="number" />
            <Tooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="High"
              stackId="a"
              fill="url(#highGradient)"
              radius={[10, 10, 0, 0]}
            >
              <LabelList dataKey="High" position="inside" fill="white" />
            </Bar>
            <Bar
              dataKey="Medium"
              stackId="a"
              fill="url(#mediumGradient)"
              radius={[10, 10, 0, 0]}
            >
              <LabelList dataKey="Medium" position="inside" fill="white" />
            </Bar>
            <Bar
              dataKey="Low"
              stackId="a"
              fill="url(#lowGradient)"
              radius={[10, 10, 0, 0]}
            >
              <LabelList dataKey="Low" position="inside" fill="white" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

export default FindingsBarChart
