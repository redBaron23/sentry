import {
  AlertTriangle,
  BarChart,
  BugOff,
  Home,
  LucideShieldAlert,
  TrendingDown,
} from 'lucide-react'

export enum PAGES {
  /** Globa */
  CONTACT = '/contact',
  TERMS = '/terms',
  PRIVACY = '/privacy',
  HELP = '/help',

  /** Unauthenticated */
  INDEX = '/',
  API = '/api',
  LOGIN = '/login',
  SIGN_UP = '/sign-up',
  RESEND_EMAIL_VERIFICATION = '/resend',

  /** Authenticated */
  SETTINGS = '/settings',
  MY_ACCOUNT = '/my-account',
  DASHBOARD = '/dashboard',
  PENETRATION_TEST = '/dashboard/penetration-test',
  INCIDENTS = '/dashboard/incidents',
  CYBERSECURITY = '/dashboard/cybersecurity',
  ANTIVIRUS = '/dashboard/antivirus',
  IMPACT_ANALYSIS = '/dashboard/impact-analysis',
}

export const UNAUTHENTICATED_PAGES = [PAGES.LOGIN, PAGES.SIGN_UP]
export const AUTHENTICATED_PAGES = [PAGES.DASHBOARD, PAGES.SETTINGS]

export const NAV_ITEMS = [
  { icon: Home, label: 'Dashboard', href: PAGES.DASHBOARD },
  {
    icon: BarChart,
    label: 'Tablero de Ciberseguridad',
    href: PAGES.CYBERSECURITY,
  },
  {
    icon: TrendingDown,
    label: 'Análisis de Impacto',
    href: PAGES.IMPACT_ANALYSIS,
  },
  {
    icon: AlertTriangle,
    label: 'Gestión de Incidentes',
    href: PAGES.INCIDENTS,
  },
  {
    icon: LucideShieldAlert,
    label: 'Penetration Testing',
    href: PAGES.PENETRATION_TEST,
  },
  { icon: BugOff, label: 'Tablero de Antivirus', href: PAGES.ANTIVIRUS },
]
