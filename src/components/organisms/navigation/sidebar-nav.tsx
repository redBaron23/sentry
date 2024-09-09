"use client";

import { AlertTriangle, BarChart, Home, Shield } from "lucide-react";
import { usePathname } from "next/navigation";
import { NavItemWithTooltip } from "../../molecules/nav-item-with-tooltip";

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
    <nav className="flex flex-col items-center gap-4 px-2 py-4">
      <NavItemWithTooltip
        href="/dashboard"
        icon={Shield}
        label="Sentrio"
        isActive={false}
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
  );
}
