import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import ChartCard from "./charts/chart-card";

interface IncidentStat {
  label: string;
  value: number;
  link?: string;
}

interface IncidentManagementProps {
  criticalIncidents: number;
  closedAlerts: IncidentStat[];
  escalationDetails: IncidentStat[];
}

const StatBlock = ({
  label,
  value,
  link,
  icon: Icon,
}: IncidentStat & { icon?: React.ElementType }) => (
  <div className="flex flex-col items-center rounded-lg bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md">
    {Icon && <Icon className="mb-2 h-8 w-8 text-primary" />}
    <h6 className="mb-2 text-sm font-medium text-muted-foreground">{label}</h6>
    <span className="mb-1 text-3xl font-bold text-foreground">{value}</span>
    {link && (
      <Link href={link} className="text-sm text-primary hover:underline">
        Ver detalles
      </Link>
    )}
  </div>
);

export function IncidentManagement({
  criticalIncidents,
  closedAlerts,
  escalationDetails,
}: IncidentManagementProps) {
  return (
    <ChartCard title="Gestión de Incidentes" cols={3}>
      <StatBlock
        label="Total de Incidentes Alto/Críticos"
        value={criticalIncidents}
        icon={AlertTriangle}
      />
      <div className="space-y-4">
        <h6 className="text-sm font-medium text-muted-foreground">
          Alertas Cerradas por Estado
        </h6>
        {closedAlerts.map((alert, index) => (
          <StatBlock key={index} {...alert} icon={CheckCircle} />
        ))}
      </div>
      <div className="space-y-4">
        <h6 className="text-sm font-medium text-muted-foreground">
          Detalle de Escalamiento
        </h6>
        {escalationDetails.map((detail, index) => (
          <StatBlock key={index} {...detail} icon={Clock} />
        ))}
      </div>
    </ChartCard>
  );
}
