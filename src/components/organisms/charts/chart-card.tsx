import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChartColumnIncreasing } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  cols?: number;
}

const ChartCard = ({ title, children, cols = 2 }: Props) => {
  return (
    <Card className="flex h-full flex-col shadow-sm transition-shadow duration-300 hover:shadow-md">
      <CardHeader className="border-b pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <ChartColumnIncreasing className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent
        className={cn("grid flex-grow gap-6 pt-6 text-center", {
          "grid-cols-1 md:grid-cols-2": cols === 2,
          "grid-cols-1 xl:grid-cols-3": cols === 3,
        })}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default ChartCard;
