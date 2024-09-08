import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import { ChartColumnIncreasing } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  cols?: number;
}

const ChartCard = ({ title, children, cols = 2 }: Props) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="border-b pb-4">
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <ChartColumnIncreasing className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent
        className={clsx("text-center grid gap-8 pt-6 flex-grow", {
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
