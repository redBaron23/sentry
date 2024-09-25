import { RadialChart } from '../../../../components/atoms/charts/radial-chart'
import ChartCard from '../../../../components/organisms/charts/chart-card'
import { IncidentManagement } from '../../../../components/organisms/incident-management-card'
import { VulnerabilitiesIT } from '../../../../components/organisms/vulnerabilities-it'

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

export default function AntivirusPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 pb-3 md:grid-cols-2 xl:grid-cols-3">
        <ChartCard title="Parches de seguridad (SCCM)">
          <RadialChart title="Server" name="Server" value={55} />
          <RadialChart title="Work Station" name="Work Station" value={55} />
        </ChartCard>

        <ChartCard title="Antivirus">
          <RadialChart title="Server" name="Server" value={99} />
          <RadialChart title="Work Station" name="Work Station" value={99} />
        </ChartCard>

        <ChartCard title="Bóveda de contraseñas">
          <RadialChart title="Server" name="Server" value={97} />
          <RadialChart title="Work Station" name="Work Station" value={95} />
        </ChartCard>
      </div>
      <div className="grid grid-cols-1 gap-3 pb-3 md:grid-cols-2">
        <VulnerabilitiesIT
          baseMonth={{ label: 'Mes base', value: 4049 }}
          currentMonth={{ label: 'Octubre', value: 3501 }}
          vulnerabilitiesChartData={vulnerabilitiesChartData}
          variationPercentage={22.1}
        />
        <IncidentManagement
          criticalIncidents={0}
          closedAlerts={[
            { label: 'Falso Positivo', value: 348, link: '#' },
            { label: 'Incidente', value: 0, link: '#' },
          ]}
          escalationDetails={[{ label: 'Fuera de Hora', value: 5, link: '#' }]}
        />
      </div>
    </>
  )
}
