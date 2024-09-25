import { LucideIcon } from 'lucide-react'
import { NavItem } from '../atoms/nav-item'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

interface NavItemWithTooltipProps {
  href: string
  icon: LucideIcon
  label: string
  isActive: boolean
  isLogo?: boolean
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
      <TooltipTrigger asChild={isLogo}>
        <NavItem
          href={href}
          icon={icon}
          label={label}
          isActive={isActive}
          isLogo={isLogo}
        />
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  )
}
