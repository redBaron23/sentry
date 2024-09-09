import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  className?: string;
  isLogo?: boolean;
}

export function NavItem({
  href,
  icon: Icon,
  label,
  isLogo,
  className,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8",
        "hover:bg-accent/50",
        className,
      )}
    >
      <Icon
        className={cn(
          "transition-colors",
          isLogo
            ? "text-blue-500 group-hover:text-blue-600"
            : "h-5 w-5 text-muted-foreground group-hover:text-accent-foreground",
        )}
      />
      <span className="sr-only">{label}</span>
    </Link>
  );
}
