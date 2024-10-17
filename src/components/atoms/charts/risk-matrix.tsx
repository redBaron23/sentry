'use client'

import { useCallback, useState } from 'react'
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Label,
  ResponsiveContainer,
  Scatter,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import useDimensions from '@/hooks/use-dimensions'

interface RiskData {
  x: number
  impact?: number
  label?: string
  link?: string
  low?: number
  medium?: number
  high?: number
  critical?: number
}

interface Props {
  title?: string
  data: RiskData[]
}

const CustomShape = ({ cx, cy, payload, onPointClick }: any) => {
  if (!payload.label) {
    return null
  }

  const handlePointClick = () => {
    onPointClick(payload)
  }

  return (
    <g onClick={handlePointClick} style={{ cursor: 'pointer' }}>
      <circle
        cx={cx}
        cy={cy}
        r={8}
        stroke="hsl(var(--foreground))"
        strokeWidth={2}
        fill="hsl(var(--chart-threat))"
      />
    </g>
  )
}

const CustomTooltip = ({
  active,
  payload,
  label,
  activePoint,
}: TooltipProps<number, string> & { activePoint: any }) => {
  const { isMobile } = useDimensions()

  if ((active && payload && payload.length) || activePoint) {
    const data = activePoint || (payload && payload[0].payload)
    if (data && data.label) {
      return (
        <div className="custom-tooltip rounded border border-gray-300 bg-white p-2 shadow-md">
          <p className="font-bold">{data.label}</p>
          <p>Impacto: {data.impact}</p>
          <p>Probabilidad: {data.x}</p>
          {isMobile && data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-500 underline"
              onClick={(e) => e.stopPropagation()}
            >
              Más información
            </a>
          )}
        </div>
      )
    }
    return (
      <ChartTooltipContent active={active} payload={payload} label={label} />
    )
  }
  return null
}

const chartConfig: ChartConfig = {
  low: { label: 'Bajo', color: 'hsl(120, 100%, 35%)' },
  medium: { label: 'Medio', color: 'hsl(40, 100%, 50%)' },
  high: { label: 'Alto', color: 'hsl(30, 100%, 50%)' },
  critical: { label: 'Crítico', color: 'hsl(0, 100%, 50%)' },
}

export function RiskMatrix({ title, data }: Props) {
  const [activePoint, setActivePoint] = useState<RiskData | null>(null)
  const { isMobile } = useDimensions()

  const handlePointClick = useCallback(
    (point: RiskData) => {
      if (isMobile) {
        setActivePoint(point)
      } else {
        window.open(point.link, '_blank')
      }
    },
    [isMobile],
  )

  const handleChartClick = useCallback(
    (event: React.MouseEvent) => {
      if (!activePoint || (event.target as SVGElement).tagName !== 'circle') {
        setActivePoint(null)
      }
    },
    [activePoint],
  )

  return (
    <div className="flex h-full flex-col">
      {title && <h6 className="mb-2 text-center font-bold">{title}</h6>}

      <div
        className={`flex-grow ${activePoint ? 'pointer-events-none' : ''}`}
        onClick={handleChartClick}
      >
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer>
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="x"
                type="number"
                domain={[0, 4]}
                tickCount={5}
                label={{
                  value: 'Probabilidad',
                  position: 'insideBottom',
                  offset: 0,
                }}
              />
              <YAxis
                type="number"
                domain={[0, 4]}
                tickCount={5}
                label={{
                  value: 'Impacto',
                  angle: -90,
                  position: 'insideLeft',
                  offset: 20,
                }}
              />
              <ChartTooltip
                content={<CustomTooltip activePoint={activePoint} />}
                cursor={{ strokeDasharray: '3 3' }}
              />
              <Area
                type="monotone"
                dataKey="low"
                stackId="1"
                stroke={chartConfig.low.color}
                fill={chartConfig.low.color}
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="medium"
                stackId="1"
                stroke={chartConfig.medium.color}
                fill={chartConfig.medium.color}
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="high"
                stackId="1"
                stroke={chartConfig.high.color}
                fill={chartConfig.high.color}
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="critical"
                stackId="1"
                stroke={chartConfig.critical.color}
                fill={chartConfig.critical.color}
                fillOpacity={0.6}
              />
              <Scatter
                dataKey="impact"
                shape={<CustomShape onPointClick={handlePointClick} />}
              />

              {/* Risk level labels */}
              <Label
                content={
                  <text x={50} y={50}>
                    Bajo
                  </text>
                }
                position="center"
              />
              <Label
                content={
                  <text x={150} y={150}>
                    Medio
                  </text>
                }
                position="center"
              />
              <Label
                content={
                  <text x={250} y={250}>
                    Alto
                  </text>
                }
                position="center"
              />
              <Label
                content={
                  <text x={350} y={350}>
                    Crítico
                  </text>
                }
                position="center"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Los puntos en el gráfico representan riesgos específicos.</p>
        <p>
          {isMobile
            ? 'Toque un punto para ver detalles y acceder a más información.'
            : 'Pase el cursor sobre un punto para ver detalles y haga clic para obtener información completa.'}
        </p>
      </div>
    </div>
  )
}
