import { BarChart } from "@/components/atoms/charts/bar-chart";
import { CombinedChart } from "@/components/atoms/charts/combine-chart";
import { DonutChart } from "@/components/atoms/charts/donut-chart";
import { AlertStatus } from "@/components/molecules/alert-status";
import ChartCard from "@/components/organisms/charts/chart-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartColors } from "@/lib/constants/charts";

const ALERT_ORIGIN_DATA = {
  microsoftWindows: {
    label: "Microsoft Windows",
    color: ChartColors.BLUE, // Se mantiene BLUE
    quantity: 78,
  },
  phishingReport: {
    label: "Botón de reporte de phishing",
    color: ChartColors.ORANGE, // Cambiado de GREEN a ORANGE
    quantity: 67,
  },
  microsoftDefender: {
    label: "Microsoft 365 Defender",
    color: ChartColors.PURPLE, // Se mantiene PURPLE
    quantity: 57,
  },
  trendMicro: {
    label: "Trend Micro Antivirus",
    color: ChartColors.GREEN, // Cambiado de ORANGE a GREEN
    quantity: 41,
  },
  clarity: {
    label: "Clarity",
    color: ChartColors.LIGHT_BLUE, // Cambiado de PINK a LIGHT_BLUE
    quantity: 32,
  },
  other: {
    label: "Otro",
    color: ChartColors.GRAY, // Se mantiene GRAY
    quantity: 14,
  },
};

const ALERT_STATUS_DATA = {
  closedFalsePositive: {
    label: "Cerrado como Falso Positivo",
    color: ChartColors.GREEN, // Cambiado de GRAY a GREEN
    quantity: 235,
  },
  unmanaged: {
    label: "Sin Gestionar",
    color: ChartColors.ORANGE, // Cambiado de YELLOW a ORANGE
    quantity: 60,
  },
  inProgress: {
    label: "En Progreso",
    color: ChartColors.BLUE, // Se mantiene BLUE
    quantity: 11,
  },
  closedIncident: {
    label: "Cerrado como Incidente",
    color: ChartColors.RED, // Se mantiene RED
    quantity: 0,
  },
};

export const MANAGED_ALERTS_DATA = {
  barData: [
    {
      month: "Jul-24",
      closedFalsePositive: {
        label: "Cerrado como Falso Positivo",
        color: ChartColors.GRAY,
        quantity: 348,
      },
      inProgress: {
        label: "En Progreso",
        color: ChartColors.BLUE,
        quantity: 30,
      },
      unmanaged: {
        label: "Sin Gestionar",
        color: ChartColors.YELLOW,
        quantity: 0,
      },
    },
    {
      month: "Ago-24",
      closedFalsePositive: {
        label: "Cerrado como Falso Positivo",
        color: ChartColors.GRAY,
        quantity: 235,
      },
      inProgress: {
        label: "En Progreso",
        color: ChartColors.BLUE,
        quantity: 0,
      },
      unmanaged: {
        label: "Sin Gestionar",
        color: ChartColors.YELLOW,
        quantity: 60,
      },
    },
  ],
  lineData: [
    {
      month: "Jul-24",
      avgResolutionTime: {
        label: "Tiempo promedio de resolución (horas)",
        color: ChartColors.GREEN,
        value: 30.5,
      },
    },
    {
      month: "Ago-24",
      avgResolutionTime: {
        label: "Tiempo promedio de resolución (horas)",
        color: ChartColors.GREEN,
        value: 23.21,
      },
    },
  ],
};

export default function AlertDashboardPage() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Panel de Alertas</h1>

      {/* Resumen de Alertas */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <AlertStatus title="Alertas Totales" value={306} />
        <AlertStatus
          title="Cerrado como Incidente"
          value={0}
          variant="warning"
        />
        <AlertStatus
          title="Cerrado como Falso Positivo"
          value={235}
          variant="success"
        />
        <AlertStatus title="En progreso" value={11} variant="info" />
        <AlertStatus title="Sin Gestionar" value={60} variant="danger" />
      </div>

      {/* Gráficos principales */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ChartCard title="Alertas Gestionadas" cols={1}>
          <CombinedChart
            title="Alertas Gestionadas"
            barData={MANAGED_ALERTS_DATA.barData}
            lineData={MANAGED_ALERTS_DATA.lineData}
          />
        </ChartCard>

        <ChartCard title="Alertas por estado" cols={1}>
          <DonutChart title="Alertas por estado" data={ALERT_STATUS_DATA} />
        </ChartCard>
      </div>

      {/* Tabla de Alertas y Gráfico de Origen */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Alertas</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Alerta</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    - TEC - WIN - User created, modified or deleted on server
                    locally
                  </td>
                  <td className="text-right">39</td>
                </tr>
                {/* Añade más filas aquí */}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <ChartCard title="Alertas por Origen de Detección" cols={1}>
          <BarChart
            title="Alertas por Origen de Detección"
            data={ALERT_ORIGIN_DATA}
            showYAxis={true}
          />
        </ChartCard>
      </div>
    </div>
  );
}
