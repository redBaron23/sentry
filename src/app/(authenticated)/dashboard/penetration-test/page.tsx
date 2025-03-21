import { VulnerabilitiesOWASP } from '@/components/organisms/vulnerabilities-owasp'
import { BarChart } from '../../../../components/atoms/charts/bar-chart'
import { DonutChart } from '../../../../components/atoms/charts/donut-chart'
import { StackedBarChart } from '../../../../components/atoms/charts/stacked-bar-chart'
import TicketCountCard from '../../../../components/atoms/ticket-count-card'
import ChartCard from '../../../../components/organisms/charts/chart-card'

const vulnerabilitiesChartData = {
  critical: {
    label: 'Critical',
    color: 'hsl(var(--chart-critical))',
    quantity: 40,
  },
  high: { label: 'High', color: 'hsl(var(--chart-high))', quantity: 60 },
  medium: { label: 'Medium', color: 'hsl(var(--chart-medium))', quantity: 140 },
  low: { label: 'Low', color: 'hsl(var(--chart-low))', quantity: 30 },
}

const ticketsChartData = {
  mar: {
    label: 'Marzo',
    color: 'hsl(var(--chart-low))',
    quantity: 6,
  },
  abr: { label: 'Abril', color: 'hsl(var(--chart-low))', quantity: 0 },
  may: { label: 'Mayo', color: 'hsl(var(--chart-low))', quantity: 3 },
  jun: { label: 'Junio', color: 'hsl(var(--chart-low))', quantity: 0 },
  jul: { label: 'Jul', color: 'hsl(var(--chart-low))', quantity: 4 },
  ago: { label: 'Agosto', color: 'hsl(var(--chart-low))', quantity: 6 },
}

const last12MonthTicketsChartData = {
  new: {
    label: 'Tickets Pendientes',
    color: 'hsl(var(--chart-pending-tickets))',
    values: {
      January: 12,
      February: 0,
      March: 0,
      April: 0,
      May: 21,
      June: 8,
    },
  },
  pending: {
    label: 'Tickets Nuevos',
    color: 'hsl(var(--chart-new-tickets))',
    values: {
      January: 6,
      February: 6,
      March: 3,
      April: 3,
      May: 20,
      June: 22,
    },
  },
}

const ticketsRemediationChartData = {
  setup: {
    label: 'Configuracion Insegura',
    color: 'hsl(var(--chart-new-tickets))',
    quantity: 19,
  },
  out: {
    label: 'SO fuera de soporte',
    color: 'hsl(var(--chart-new-tickets))',
    quantity: 3,
  },
}

const ticketsPendingRemediationChartData = {
  setup: {
    label: 'Aplicacion WEB',
    color: 'hsl(var(--chart-new-tickets))',
    quantity: 14,
  },
  out: {
    label: 'Infraestructura Interna',
    color: 'hsl(var(--chart-new-tickets))',
    quantity: 8,
  },
}

const ticketsPendingBySeverityChartData = {
  critical: {
    label: 'Critical',
    color: 'hsl(var(--chart-critical))',
    quantity: 40,
  },
  high: { label: 'High', color: 'hsl(var(--chart-high))', quantity: 60 },
  medium: { label: 'Medium', color: 'hsl(var(--chart-medium))', quantity: 140 },
  low: { label: 'Low', color: 'hsl(var(--chart-low))', quantity: 30 },
}

const ticketsPendingByPenTestChartData = {
  pen: {
    label: 'Penetration test externo',
    quantity: 22,
    color: 'hsl(var(--chart-1))',
  },
}

export default function PenetrationTest() {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 pb-3 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <TicketCountCard count={4} type="created" />
            <TicketCountCard count={3} type="closed" />
            <TicketCountCard count={12} type="pending" />
          </div>
          <ChartCard
            title="Tickets Pendientes y Tickets Nuevos por Mes (últimos 12 meses)"
            cols={1}
          >
            <StackedBarChart data={last12MonthTicketsChartData} />
          </ChartCard>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <ChartCard
            title="Tickets Pendientes por Categoria de Remediacion"
            cols={1}
          >
            <BarChart data={ticketsRemediationChartData} />
          </ChartCard>
          <ChartCard
            title="Tickets Pendientes por Tipo de Analisis de Remediacion"
            cols={1}
          >
            <BarChart data={ticketsPendingRemediationChartData} />
          </ChartCard>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 pb-3">
        <ChartCard
          title="Tickets Resueltos por mes (últimos 12 meses)"
          cols={1}
        >
          <BarChart data={ticketsChartData} />
        </ChartCard>
        <VulnerabilitiesOWASP />
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <ChartCard title="Tickets Pendientes por Severidad" cols={1}>
          <DonutChart data={ticketsPendingBySeverityChartData} />
        </ChartCard>
        <ChartCard title="Tickets Pendientes por Tipo de PenTest" cols={1}>
          <DonutChart data={ticketsPendingByPenTestChartData} />
        </ChartCard>
      </div>
    </>
  )
}
