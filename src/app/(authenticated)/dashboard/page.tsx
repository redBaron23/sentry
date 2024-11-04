import { NewsSection } from '@/components/organisms/news-carousel'
import { VulnerabilitiesOWASP } from '@/components/organisms/vulnerabilities-owasp'
import { BarChart } from '../../../components/atoms/charts/bar-chart'
import { DonutChart } from '../../../components/atoms/charts/donut-chart'
import { RadialChart } from '../../../components/atoms/charts/radial-chart'
import { StackedBarChart } from '../../../components/atoms/charts/stacked-bar-chart'
import TicketCountCard from '../../../components/atoms/ticket-count-card'
import ChartCard from '../../../components/organisms/charts/chart-card'
import { IncidentManagement } from '../../../components/organisms/incident-management-card'
import { VulnerabilitiesIT } from '../../../components/organisms/vulnerabilities-it'

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

const cybersecurityNews = [
  {
    title: 'DoJ & Microsoft Seize 100+ Russian Hacker Domains',
    source: 'The Hacker News',
    timeAgo: '1 day ago',
    imageUrl:
      'https://cms.therecord.media/uploads/format_webp/Kremlin_1_e7d4900192.jpg?w=1080',
    link: 'https://therecord.media/doj-microsoft-seize-domains-russian-intelligence',
  },
  {
    title: 'Record-Breaking 3.8 Tbps DDoS Attack Thwarted by Cloudflare',
    source: 'Cloudflare',
    timeAgo: '2 days ago',
    imageUrl:
      'https://eadn-wc01-8182785.nxedge.io/wp-content/uploads/2024/05/cloudflare02-750x375.png',
    link: 'https://convergedigest.com/cloudflare-mitigates-largest-ever-3-8-tbps-ddos-attack/#:~:text=The%20largest%20of%20these%20attacks,%2C%20internet%2C%20and%20telecommunications%20sectors.',
  },
  {
    title: 'North Korean Hackers Deploy New VeilShell Trojan',
    source: 'Bleeping Computer',
    timeAgo: '3 days ago',
    imageUrl:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYEfXN87k4Pzn7PnwX6FKcPhemB4Hfo1Ls4sXTFYzUtwzYMhPUzuyD23AUarS5cLAIOuKJQ43jP350Sop3GJhFSw9FcKALYvzJDh3ThY5ACpYnETQC3Uw2sAJ5UZ6tY_5k0lOHVeL30uf8mURzLaTFb566N22BCTEuxq2sD91Eu0fxVLbJg439CAOU7K_w/s728-rw-e365/malware-code.png',
    link: 'https://thehackernews.com/2024/10/north-korean-hackers-using-new.html',
  },
  {
    title: 'Fake Trading Apps on Apple and Google Stores Defraud Users',
    source: 'Ars Technica',
    timeAgo: '4 days ago',
    link: 'https://timesofindia.indiatimes.com/technology/tech-news/these-fake-trading-apps-on-your-iphones-android-smartphones-are-helping-hackers-to-steal-your-money/articleshow/113946187.cms#:~:text=Hackers%20have%20scammed%20thousands%20using,the%20guise%20of%20high%20returns.',
    imageUrl:
      'https://static.toiimg.com/thumb/msid-113946662,imgsize-9538,width-400,resizemode-4/113946662.jpg',
  },
  {
    title: 'Salt Typhoon Breached AT&T, Verizon, and Lumen Networks',
    source: 'The Wall Street Journal',
    timeAgo: '5 days ago',
    imageUrl: 'https://images.wsj.net/im-859972/social',
    link: '#',
  },
  {
    title: 'U.K. and U.S. Warn of Iranian Spear-Phishing Activity',
    source: 'National Cyber Security Centre',
    timeAgo: '6 days ago',
    imageUrl:
      'https://www.ncsc.gov.uk/images/alert-no-logo-night-mustard@2x.png?mpwidth=545&mlwidth=737&twidth=961&dwidth=635&dpr=1&width=2560',
    link: 'https://www.ncsc.gov.uk/news/uk-us-issue-alert-cyber-actors-behalf-iranian-state-carry-targeted-phishing-attacks',
  },
  {
    title:
      "Telegram's Data Policy Shift Pushes Cybercriminals to Alternative Apps",
    source: 'ZDNet',
    timeAgo: '1 week ago',
    imageUrl:
      'https://cms.therecord.media/uploads/format_webp/Telegram_e1527c82ed.jpg?w=1080',
    link: 'https://therecord.media/telegram-alternatives-for-cybercriminals',
  },
]

export default function DashboardPage() {
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
      <div className="grid grid-cols-1 gap-3 pb-3 lg:grid-cols-2 2xl:grid-cols-3">
        <NewsSection news={cybersecurityNews} />
        <VulnerabilitiesIT
          baseMonth={{ label: 'Mes base', value: 4049 }}
          currentMonth={{ label: 'Octubre', value: 3501 }}
          vulnerabilitiesChartData={vulnerabilitiesChartData}
          variationPercentage={22.1}
        />
        <div className="lg:col-span-2 2xl:col-span-1">
          <IncidentManagement
            criticalIncidents={0}
            closedAlerts={[
              { label: 'Falso Positivo', value: 348, link: '#' },
              { label: 'Incidente', value: 0, link: '#' },
            ]}
            escalationDetails={[
              { label: 'Fuera de Hora', value: 5, link: '#' },
            ]}
          />
        </div>
      </div>
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
