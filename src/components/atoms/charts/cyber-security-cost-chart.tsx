'use client'

import { ChartContainer, ChartTooltip } from '@/components/ui/chart'
import { useState } from 'react'
import {
  Area,
  ComposedChart,
  ResponsiveContainer,
  Scatter,
  XAxis,
  YAxis,
} from 'recharts'

const pointsRiskData = [
  {
    x: 1.9,
    y: 0,
    impact: 3.8,
    cost: 2670000,
    label: 'Fraude en línea',
  },
  {
    x: 1,
    y: 0,
    impact: 1,
    cost: 500000,
    label: 'Phishing',
  },
  {
    x: 3,
    y: 0,
    impact: 5,
    cost: 5000000,
    label: 'Malware',
  },
  {
    x: 4.1,
    y: 0,
    impact: 4.5,
    cost: 4500000,
    label: 'Ransomware',
  },
  // ... (other data points)
]

const areaData = [
  { x: 0, areaValue: 0 },
  { x: 0, areaValue: 1 },
  { x: 5, areaValue: 1 },
  { x: 5, areaValue: 0 },
  { x: 10, areaValue: 0 },
]

const chartConfig = {
  impact: {
    label: 'Impacto',
    color: 'hsl(210, 100%, 35%)', // Dark blue
  },
}

interface Props {
  title?: string
  description?: string
}

function CyberSecurityImpactChart({ title, description }: Props) {
  const [selectedPoint, setSelectedPoint] = useState<any>(null)

  const CustomShape = ({ cx, cy, payload }: any) => (
    <g transform={`translate(${cx},${cy})`}>
      <circle
        r={5}
        stroke="hsl(210, 100%, 35%)"
        strokeWidth={2}
        fill={
          selectedPoint === payload
            ? 'hsl(210, 100%, 35%)'
            : 'hsl(210, 100%, 60%)'
        }
        onMouseEnter={() => setSelectedPoint(payload)}
        onMouseLeave={() => setSelectedPoint(null)}
        onClick={() => setSelectedPoint(payload)}
      />
      <text
        x={0}
        y={-10}
        textAnchor="middle"
        fill="hsl(210, 100%, 35%)"
        transform="rotate(-45)"
        fontSize="12"
        fontWeight="bold"
        className="hidden md:block"
      >
        {payload.label}
      </text>
    </g>
  )

  const CustomTooltip = ({ active, payload }: any) => {
    const data = selectedPoint

    if (data) {
      return (
        <div className="custom-tooltip rounded border border-gray-300 bg-white p-2 shadow-md">
          <p className="font-bold">{data.label}</p>
          <p>Impacto: {data.impact}</p>
          <p>Costo: ${(data.cost / 1000000).toFixed(2)}M</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="flex h-full flex-col">
      {title && <h6 className="mb-2 text-center">{title}</h6>}
      {description && (
        <p className="mb-4 text-center text-sm text-muted-foreground">
          {description}
        </p>
      )}
      <div className="flex-grow">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer>
            <ComposedChart data={areaData}>
              <defs>
                <filter x="0" y="0" width="1" height="1" id="solid">
                  <feFlood flood-color="white" result="bg" />
                  <feMerge>
                    <feMergeNode in="bg" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <YAxis
                type="number"
                dataKey="y"
                name="impacto"
                hide
                domain={[0, 6]}
              />
              <XAxis
                type="number"
                dataKey="x"
                name="impacto"
                domain={[0, 10]}
                ticks={[0, 2, 4, 6, 8, 10]}
                label={{ value: 'Impacto', position: 'bottom' }}
              />
              <Area
                type="monotone"
                dataKey="areaValue"
                fill="hsl(210, 100%, 90%)"
                stroke="hsl(210, 100%, 60%)"
                fillOpacity={0.3}
              />
              <ChartTooltip content={<CustomTooltip />} />
              <Scatter
                name="Riesgos"
                data={pointsRiskData}
                shape={<CustomShape />}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <div className="mr-2 h-4 w-4 bg-blue-200"></div>
        <span className="text-sm">Cyber insurance range</span>
      </div>
    </div>
  )
}

export default CyberSecurityImpactChart
