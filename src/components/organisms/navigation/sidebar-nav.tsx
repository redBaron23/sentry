"use client";

import { NavItemWithTooltip } from "@/components/molecules/nav-item-with-tooltip";
import { AlertTriangle, BarChart, Home, Settings, Shield } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Shield, label: "Penetration Testing", href: "/dashboard/pentest" },
  {
    icon: AlertTriangle,
    label: "Gestión de Incidentes",
    href: "/dashboard/incidents",
  },
  { icon: Shield, label: "Tablero de Antivirus", href: "/dashboard/antivirus" },
  {
    icon: BarChart,
    label: "Tablero de Ciberseguridad",
    href: "/dashboard/cybersecurity",
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
          label="Settings"
          isActive={pathname === "/dashboard/settings"}
        />
      </nav>
    </>
  );
}
