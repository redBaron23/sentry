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
    <Card>
      <CardHeader className="border-b pb-4">
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <ChartColumnIncreasing className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent
        className={clsx("grid grid-cols-1 gap-7 pt-6", {
          "md:grid-cols-2": cols === 2,
          "xl:grid-cols-3": cols === 3,
        })}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default ChartCard;
