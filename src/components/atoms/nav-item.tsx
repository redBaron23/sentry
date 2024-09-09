import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  className?: string;
}

export function NavItem({
  href,
  icon: Icon,
  label,
  isActive,
  className,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
        isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground",
        className,
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </Link>
  );
}
