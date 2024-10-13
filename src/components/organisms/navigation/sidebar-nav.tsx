'use client'

import { NAV_ITEMS, PAGES } from '@/lib/constants/pages'
import { cn } from '@/lib/utils'
import { Settings, Shield } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { NavItemWithTooltip } from '../../molecules/nav-item-with-tooltip'

interface SidebarNavProps {
  children: React.ReactNode
}

export function SidebarNav({ children }: SidebarNavProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen w-full">
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background transition-all duration-300 ease-in-out sm:flex',
          isExpanded ? 'w-[200px]' : 'w-14',
        )}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <nav className="flex flex-col items-start gap-4 px-2 py-4">
          <NavItemWithTooltip
            key="sentrio"
            href={PAGES.DASHBOARD}
            icon={Shield}
            label="Sentrio"
            isActive={false}
            isLogo
            isExpanded={isExpanded}
          />
          {NAV_ITEMS.map((item) => (
            <NavItemWithTooltip
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={pathname === item.href}
              isExpanded={isExpanded}
            />
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-start gap-4 px-2 py-4">
          <NavItemWithTooltip
            key="settings"
            href={PAGES.SETTINGS}
            icon={Settings}
            label="Configuración"
            isActive={pathname === PAGES.SETTINGS}
            isExpanded={isExpanded}
          />
        </nav>
      </aside>
      <div
        className={cn(
          'flex flex-1 flex-col transition-all duration-300 ease-in-out',
          isExpanded ? 'sm:ml-[200px]' : 'sm:ml-14',
        )}
      >
        {children}
      </div>
    </div>
  )
}
