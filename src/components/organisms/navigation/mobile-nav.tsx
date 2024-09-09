"use client";

import { NavItem } from "@/components/atoms/nav-item";
import { AlertTriangle, BarChart, Home, Shield } from "lucide-react";
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

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="grid gap-6 text-lg font-medium">
      <NavItem
        href="/dashboard"
        icon={Shield}
        label="Sentrio"
        isActive={false}
      />
      {navItems.map((item) => (
        <div key={item.href} className="flex items-center gap-4 px-2.5">
          <NavItem
            href={item.href}
            icon={item.icon}
            label={item.label}
            isActive={pathname === item.href}
          />
          <span
            className={
              pathname === item.href
                ? "text-foreground"
                : "text-muted-foreground"
            }
          >
            {item.label}
          </span>
        </div>
      ))}
    </nav>
  );
}
