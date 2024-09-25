'use client'

import { NAV_ITEMS, PAGES } from '@/lib/constants/pages'
import { cn } from '@/lib/utils'
import { Shield } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="grid gap-2 text-base font-medium">
      <Link
        href={PAGES.DASHBOARD}
        className="group relative flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 ease-in-out hover:bg-accent/10"
      >
        <Shield className="text-blue-500 group-hover:text-blue-600" />
        <span className="sr-only">Sentrio</span>
      </Link>
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200 ease-in-out',
              isActive
                ? 'bg-accent text-accent-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-accent/10 hover:text-accent-foreground',
            )}
          >
            <div
              className={cn(
                'flex h-8 w-8 items-center justify-center',
                isActive ? 'text-accent-foreground' : 'text-muted-foreground',
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
