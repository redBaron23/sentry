"use client";

import { NavItemWithTooltip } from "@/components/molecules/nav-item-with-tooltip";
import { PAGES } from "@/lib/constants/pages";
import { AlertTriangle, BarChart, Home, Settings, Shield } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: Home, label: "Dashboard", href: PAGES.DASHBOARD },
  { icon: Shield, label: "Penetration Testing", href: PAGES.PENETRATION_TEST },
  {
    icon: AlertTriangle,
    label: "Gestión de Incidentes",
    href: PAGES.INCIDENTS,
  },
  { icon: Shield, label: "Tablero de Antivirus", href: PAGES.ANTIVIRUS },
  {
    icon: BarChart,
    label: "Tablero de Ciberseguridad",
    href: PAGES.CYBERSECURITY,
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <NavItemWithTooltip
          href="/dashboard"
          icon={Shield}
          label="Sentrio"
          isActive={false}
          isLogo
        />
        {navItems.map((item) => (
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
          href="/dashboard/settings"
          icon={Settings}
          label="Configuración"
          isActive={pathname === "/dashboard/settings"}
        />
      </nav>
    </>
  );
}
