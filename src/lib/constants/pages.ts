import { AlertTriangle, BarChart, Home, Shield } from "lucide-react";

export enum PAGES {
  INDEX = "/",
  LOGIN = "/login",
  SIGN_UP = "/sign-up",
  VERIFY_EMAIL = "/verify-email",
  DASHBOARD = "/dashboard",
  PENETRATION_TEST = "/dashboard/penetration-test",
  INCIDENTS = "/dashboard/incidents",
  CYBERSECURITY = "/dashboard/cybersecurity",
  ANTIVIRUS = "/dashboard/antivirus",
  CONTACT = "/contact",
  RESEND_EMAIL_VERIFICATION = "/resend",
}

export const NAV_ITEMS = [
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
