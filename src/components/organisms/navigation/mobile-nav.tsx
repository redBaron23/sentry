"use client";

import { NavItem } from "@/components/atoms/nav-item";
import { cn } from "@/lib/utils";
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
    <nav className="grid gap-2 text-base font-medium">
      <NavItem href="/dashboard" icon={Shield} label="Sentrio" isLogo />
      {navItems.map((item) => (
        <div
          key={item.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200 ease-in-out",
            pathname === item.href
              ? "bg-accent text-accent-foreground shadow-sm"
              : "text-muted-foreground hover:bg-accent/10 hover:text-accent-foreground",
          )}
        >
          <NavItem
            href={item.href}
            icon={item.icon}
            label={item.label}
            className={cn(
              "h-8 w-8",
              pathname === item.href
                ? "text-accent-foreground"
                : "text-muted-foreground",
            )}
          />
          <span className="text-sm font-medium">{item.label}</span>
        </div>
      ))}
    </nav>
  );
}
