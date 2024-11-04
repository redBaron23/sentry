'use client'

import { BarChart } from '../atoms/charts/bar-chart'
import ChartCard from './charts/chart-card'

const vulnerabilitiesData = {
  access: {
    label: 'Access Control',
    color: 'hsl(var(--chart-critical))', // Rojo intenso para crítico
    quantity: 6,
  },
  crypto: {
    label: 'Crypto Failures',
    color: 'hsl(var(--chart-high))', // Naranja para alto
    quantity: 3,
  },
  inject: {
    label: 'Injection',
    color: 'hsl(var(--chart-medium))', // Amarillo para medio
    quantity: 5,
  },
  design: {
    label: 'Insecure Design',
    color: 'hsl(var(--chart-low))', // Verde para bajo
    quantity: 11,
  },
  config: {
    label: 'Security Config',
    color: 'hsl(var(--chart-1))', // Azul
    quantity: 2,
  },
  outdated: {
    label: 'Outdated Comp.',
    color: 'hsl(var(--chart-2))', // Azul verdoso
    quantity: 1,
  },
  auth: {
    label: 'Auth Failures',
    color: 'hsl(var(--chart-3))', // Verde azulado
    quantity: 4,
  },
  data: {
    label: 'Data Integrity',
    color: 'hsl(var(--chart-4))', // Verde
    quantity: 2,
  },
  logs: {
    label: 'Logging Fails',
    color: 'hsl(var(--chart-5))', // Verde amarillento
    quantity: 1,
  },
  ssrf: {
    label: 'SSRF',
    color: 'hsl(var(--chart-roi))', // Púrpura
    quantity: 1,
  },
}

export const VulnerabilitiesOWASP = () => {
  const total = Object.values(vulnerabilitiesData).reduce(
    (acc, curr) => acc + curr.quantity,
    0,
  )

  return (
    <ChartCard title="Vulnerabilidades OWASP" cols={1}>
      <BarChart data={vulnerabilitiesData} showYAxis={true} />
    </ChartCard>
  )
}
