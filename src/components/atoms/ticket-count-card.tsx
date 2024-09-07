import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TicketCountCardProps {
  title: string;
  count: number;
}

const TicketCountCard = ({ title, count }: TicketCountCardProps) => {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{count}</p>
      </CardContent>
    </Card>
  );
};

export default TicketCountCard;
