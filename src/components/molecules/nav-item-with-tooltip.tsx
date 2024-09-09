import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";
import { NavItem } from "../atoms/nav-item";

interface NavItemWithTooltipProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  isLogo?: boolean;
}

export function NavItemWithTooltip({
  href,
  icon,
  label,
  isActive,
  isLogo = false,
}: NavItemWithTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <NavItem href={href} icon={icon} label={label} isLogo={isLogo} />
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
}
