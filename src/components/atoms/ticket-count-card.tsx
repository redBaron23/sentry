import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, PlusCircle } from "lucide-react";

const TICKET_STYLES = {
  created: {
    title: "Tickets Creados",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    icon: PlusCircle,
  },
  closed: {
    title: "Tickets Cerrados",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    icon: CheckCircle,
  },
  pending: {
    title: "Tickets Pendientes",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
    icon: Clock,
  },
};

type TicketType = "created" | "closed" | "pending";

interface Props {
  count: number;
  type: TicketType;
}

const TicketCountCard = ({ count, type }: Props) => {
  const { title, bgColor, textColor, icon: Icon } = TICKET_STYLES[type];

  return (
    <Card
      className={`text-center ${bgColor} border-none shadow-md transition-all duration-300 hover:shadow-lg`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-center text-sm font-medium text-gray-600">
          <Icon className={`h-6 w-6 ${textColor}`} />
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-3xl font-bold ${textColor}`}>{count}</p>
      </CardContent>
    </Card>
  );
};

export default TicketCountCard;
