import CyberSecurityCostChart from '@/components/atoms/charts/cyber-security-cost-chart'
import { RiskMatrix } from '@/components/atoms/charts/risk-matrix'
import { ROIChart } from '@/components/atoms/charts/roi-chart'
import DataTable from '@/components/molecules/data-table'
import FindingsBarChart from '@/components/molecules/findings-bar-chart'
import { SecurityFactorsTable } from '@/components/molecules/security-factors-table'
import ChartCard from '@/components/organisms/charts/chart-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChartBar, Shield } from 'lucide-react'

const pointsRiskData = [
  {
    x: 3.8,
    impact: 3.9,
    label: 'Fraude en línea',
    link: 'https://www.infobae.com/america/tecno/2023/05/16/como-protegerse-del-fraude-bancario-en-linea-en-america-latina/',
  },
  {
    x: 3.5,
    impact: 3.7,
    label: 'Ciberataque a infraestructura',
    link: 'https://www.eset.com/es/seguridad-empresarial/noticias/america-latina-ciberataques-banca/',
  },
  {
    x: 2.8,
    impact: 3.3,
    label: 'Phishing bancario',
    link: 'https://www.kaspersky.es/blog/phishing-bancario-latinoamerica/27984/',
  },
  {
    x: 1.7,
    impact: 3.8,
    label: 'Ransomware',
    link: 'https://www.eset.com/es/seguridad-empresarial/noticias/ransomware-en-latinoamerica/',
  },
  {
    x: 3.2,
    impact: 2.1,
    label: 'Robo de datos internos',
    link: 'https://www.americaeconomia.com/negocios-industrias/bancos-latinoamericanos-sufren-cada-vez-mas-ciberataques',
  },
  {
    x: 2.5,
    impact: 1.8,
    label: 'Malware financiero',
    link: 'https://latam.kaspersky.com/about/press-releases/2021_increase-in-financial-malware-targeting-corporate-users-in-latin-america',
  },
  {
    x: 1.2,
    impact: 2.7,
    label: 'Ataque DDoS',
    link: 'https://www.pandasecurity.com/es/mediacenter/seguridad/ataques-ddos-america-latina/',
  },
  {
    x: 0.8,
    impact: 1.5,
    label: 'Vulnerabilidad de software',
    link: 'https://www.welivesecurity.com/la-es/2022/11/24/vulnerabilidades-software-aumentaron-2022/',
  },
  {
    x: 0.5,
    impact: 3.2,
    label: 'Falla en sistema de pagos',
    link: 'https://www.americaeconomia.com/negocios-industrias/fallas-en-sistemas-de-pago-electronicos-afectan-bancos-en-mexico',
  },
]

const riskData = [
  {
    x: 0,
    low: 4,
    medium: 0,
    high: 0,
    critical: 0,
  },
  {
    x: 1,
    low: 3,
    medium: 1,
    high: 0,
    critical: 0,
  },
  ...pointsRiskData,

  {
    x: 1,
    low: 3,
    medium: 1,
    high: 0,
    critical: 0,
  },
  {
    x: 2,
    low: 2,
    medium: 2,
    high: 0,
    critical: 0,
  },
  { x: 3, low: 1, medium: 2, high: 1, critical: 0 },
  {
    x: 4,
    low: 0,
    medium: 1,
    high: 2,
    critical: 1,
  },
]

const roiData = [
  { name: 'Ene', inversionSeguridad: 50000, perdidasEvitadas: 75000, roi: 50 },
  {
    name: 'Feb',
    inversionSeguridad: 55000,
    perdidasEvitadas: 90000,
    roi: 63.6,
  },
  {
    name: 'Mar',
    inversionSeguridad: 60000,
    perdidasEvitadas: 110000,
    roi: 83.3,
  },
  {
    name: 'Abr',
    inversionSeguridad: 58000,
    perdidasEvitadas: 95000,
    roi: 63.8,
  },
  {
    name: 'May',
    inversionSeguridad: 62000,
    perdidasEvitadas: 120000,
    roi: 93.5,
  },
  {
    name: 'Jun',
    inversionSeguridad: 65000,
    perdidasEvitadas: 135000,
    roi: 107.7,
  },
  {
    name: 'Jul',
    inversionSeguridad: 70000,
    perdidasEvitadas: 160000,
    roi: 128.6,
  },
  {
    name: 'Ago',
    inversionSeguridad: 72000,
    perdidasEvitadas: 170000,
    roi: 136.1,
  },
  {
    name: 'Sep',
    inversionSeguridad: 68000,
    perdidasEvitadas: 145000,
    roi: 113.2,
  },
  {
    name: 'Oct',
    inversionSeguridad: 75000,
    perdidasEvitadas: 180000,
    roi: 140,
  },
  {
    name: 'Nov',
    inversionSeguridad: 80000,
    perdidasEvitadas: 200000,
    roi: 150,
  },
  {
    name: 'Dic',
    inversionSeguridad: 85000,
    perdidasEvitadas: 220000,
    roi: 158.8,
  },
]

const tableData = [
  {
    title: 'Impacto financiero estimado',
    data: {
      'Data breach': { value: '$2.67M' },
      DDoS: { value: '$812.84K' },
      Ransomware: { value: '$2.69M', bold: true },
      Wiper: { value: '$2.49M' },
    },
  },
  {
    title: 'Probabilidad de compromiso',
    data: {
      'Data breach': { value: '9.79%' },
      DDoS: { value: '35.79%', bold: true },
      Ransomware: { value: '10.72%' },
      Wiper: { value: '10.72%' },
    },
  },
  {
    title: 'Frecuencia prevista en años',
    data: {
      'Data breach': { value: '1 de cada 3', bold: true },
      DDoS: { value: '1 de cada 10' },
      Ransomware: { value: '1 de cada 5' },
      Wiper: { value: '1 de cada 5' },
    },
  },
]

export default function ImpactAnalysisPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">ROI</h1>
      <Tabs defaultValue="risk-quantification" className="justify-start">
        <TabsList className="grid w-full max-w-md mb-6 grid-cols-2">
          <TabsTrigger value="risk-quantification">
            <Shield className="w-4 h-4 mr-2" />
            Cuantificación de Riesgo
          </TabsTrigger>
          <TabsTrigger value="other-analysis">
            <ChartBar className="w-4 h-4 mr-2" />
            Otros Análisis
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="risk-quantification"
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ChartCard title="Rango de Impacto" cols={1}>
              <CyberSecurityCostChart />
            </ChartCard>
            <DataTable items={tableData} />
          </div>
          <div>
            <SecurityFactorsTable />
          </div>
          <ChartCard
            title="Impacto Financiero por Prevención de Incidentes"
            cols={1}
          >
            <FindingsBarChart />
          </ChartCard>
        </TabsContent>
        <TabsContent value="other-analysis">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ChartCard
              title="Impacto Financiero por Prevención de Incidentes"
              cols={1}
            >
              <ROIChart data={roiData} />
            </ChartCard>
            <ChartCard
              title="Evolución del Perfil de Riesgo de Ciberseguridad"
              cols={1}
            >
              <RiskMatrix title="Matriz de Riesgo" data={riskData} />
            </ChartCard>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
