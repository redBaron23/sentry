'use client'

import { NAV_ITEMS, PAGES } from '@/lib/constants/pages'
import { Settings, Shield } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { NavItemWithTooltip } from '../../molecules/nav-item-with-tooltip'

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <>
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <NavItemWithTooltip
          key="sentrio"
          href={PAGES.DASHBOARD}
          icon={Shield}
          label="Sentrio"
          isActive={false}
          isLogo
        />
        {NAV_ITEMS.map((item) => (
          <NavItemWithTooltip
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <NavItemWithTooltip
          key="settings"
          href={PAGES.SETTINGS}
          icon={Settings}
          label="Configuración"
          isActive={pathname === PAGES.SETTINGS}
        />
      </nav>
    </>
  )
}
