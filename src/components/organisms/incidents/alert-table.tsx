import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle } from "lucide-react";
import ChartCard from "../charts/chart-card";

interface AlertItem {
  description: string;
  count: number;
}

interface AlertTableProps {
  alerts: AlertItem[];
  title?: string;
}

export function AlertTable({ alerts, title = "Alertas" }: AlertTableProps) {
  const totalAlerts = alerts.reduce((sum, alert) => sum + alert.count, 0);

  return (
    <ChartCard title={title} icon={AlertCircle} cols={1}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80%]">Alerta</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alerts.map((alert, index) => (
            <TableRow
              key={index}
              className="transition-colors hover:bg-muted/50"
            >
              <TableCell className="font-medium">{alert.description}</TableCell>
              <TableCell className="text-right">{alert.count}</TableCell>
            </TableRow>
          ))}
          <TableRow className="bg-muted/50 font-semibold">
            <TableCell>Total de Alertas</TableCell>
            <TableCell className="text-right">{totalAlerts}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ChartCard>
  );
}
