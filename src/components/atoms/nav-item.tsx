import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface NavItemProps {
  href: string
  icon: LucideIcon
  label: string
  className?: string
  isLogo?: boolean
  isActive?: boolean
  showLabel?: boolean
}

export function NavItem({
  href,
  icon: Icon,
  label,
  isLogo,
  className,
  isActive = false,
  showLabel = false,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex h-10 items-center rounded-lg transition-all duration-300 ease-in-out',
        showLabel ? 'w-full px-3' : 'w-10 justify-center',
        'hover:bg-accent/10',
        isActive ? 'bg-accent/15' : 'hover:shadow-md',
        className,
      )}
    >
      <Icon
        className={cn(
          'transition-all duration-300 ease-in-out',
          isLogo
            ? 'text-blue-500 group-hover:text-blue-600'
            : cn(
                'h-5 w-5',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground group-hover:text-primary/80',
              ),
        )}
      />
      {showLabel && (
        <span
          className={cn(
            'ml-3 text-sm',
            isActive ? 'text-primary' : 'text-muted-foreground',
          )}
        >
          {label}
        </span>
      )}
      {!showLabel && <span className="sr-only">{label}</span>}
      {isActive && !isLogo && (
        <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
      )}
    </Link>
  )
}
