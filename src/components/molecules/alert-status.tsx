import { Card, CardContent } from "../ui/card";

interface AlertStatusProps {
  title: string;
  value: number;
  variant?: "default" | "success" | "warning" | "danger" | "info";
}

const variantStyles = {
  default: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800",
  info: "bg-blue-100 text-blue-800",
};

export function AlertStatus({
  title,
  value,
  variant = "default",
}: AlertStatusProps) {
  return (
    <Card
      className={`${variantStyles[variant]} transition-all hover:scale-105`}
    >
      <CardContent className="p-4">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="mt-2 text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
