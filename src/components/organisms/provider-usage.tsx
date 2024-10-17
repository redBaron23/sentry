'use client'

import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  BarChart3,
  Cloud,
  FileWarning,
  Globe,
  Lock,
  ScanLine,
  Search,
  Shield,
  UserCheck,
  Users,
} from 'lucide-react'
import { useState } from 'react'

const ProviderUsageRow = ({
  category,
  provider,
  usage,
  lastAccessed,
  icon: Icon,
}: any) => (
  <tr className="hover:bg-accent/50 transition-colors">
    <td className="py-3">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-primary" />
        <div>
          <p className="font-medium text-sm">{category}</p>
          <p className="text-xs text-muted-foreground">{provider}</p>
        </div>
      </div>
    </td>
    <td className="py-3">
      <div className="flex items-center gap-2">
        <Progress value={usage} className="w-24 h-2" />
        <span className="text-sm font-medium w-8">{usage}%</span>
      </div>
    </td>
    <td className="py-3">
      <span className="text-xs text-muted-foreground">{lastAccessed}</span>
    </td>
  </tr>
)

const ProviderUsage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const providers = [
    {
      category: 'Data Loss Prevention',
      provider: 'Palo Alto DLP',
      usage: 78,
      lastAccessed: 'Hace 2 días',
      icon: Shield,
    },
    {
      category: 'Data Loss Prevention',
      provider: 'Microsoft Purview',
      usage: 65,
      lastAccessed: 'Hace 1 semana',
      icon: Shield,
    },
    {
      category: 'Data Loss Prevention',
      provider: 'Proofpoint',
      usage: 55,
      lastAccessed: 'Hace 3 días',
      icon: Shield,
    },
    {
      category: 'Data Loss Prevention',
      provider: 'OneTrust',
      usage: 70,
      lastAccessed: 'Hace 4 días',
      icon: Shield,
    },
    {
      category: 'Endpoint Security',
      provider: 'Crowdstrike Falcon',
      usage: 92,
      lastAccessed: 'Hace 1 hora',
      icon: Lock,
    },
    {
      category: 'Endpoint Security',
      provider: 'Sentinel One Singularity',
      usage: 88,
      lastAccessed: 'Hace 5 horas',
      icon: Lock,
    },
    {
      category: 'Endpoint Security',
      provider: 'Microsoft Defender',
      usage: 75,
      lastAccessed: 'Hace 2 días',
      icon: Lock,
    },
    {
      category: 'Endpoint Security',
      provider: 'Red Canary',
      usage: 80,
      lastAccessed: 'Hace 1 día',
      icon: Lock,
    },
    {
      category: 'IAM & PAM',
      provider: 'Cyberark',
      usage: 85,
      lastAccessed: 'Hace 3 horas',
      icon: UserCheck,
    },
    {
      category: 'IAM & PAM',
      provider: 'Okta',
      usage: 80,
      lastAccessed: 'Hace 1 día',
      icon: UserCheck,
    },
    {
      category: 'IAM & PAM',
      provider: 'BeyondTrust',
      usage: 70,
      lastAccessed: 'Hace 4 días',
      icon: UserCheck,
    },
    {
      category: 'MSSP',
      provider: 'Deloitte',
      usage: 70,
      lastAccessed: 'Hace 1 semana',
      icon: Globe,
    },
    {
      category: 'MSSP',
      provider: 'Crowdstrike MDR',
      usage: 82,
      lastAccessed: 'Hace 2 días',
      icon: Globe,
    },
    {
      category: 'MSSP',
      provider: 'BlueVoyant MDR',
      usage: 68,
      lastAccessed: 'Hace 5 días',
      icon: Globe,
    },
    {
      category: 'Pen-testing',
      provider: 'Cobalt',
      usage: 65,
      lastAccessed: 'Hace 1 mes',
      icon: Search,
    },
    {
      category: 'Pen-testing',
      provider: 'BreachLock',
      usage: 60,
      lastAccessed: 'Hace 3 semanas',
      icon: Search,
    },
    {
      category: 'Pen-testing',
      provider: 'Rapid7',
      usage: 72,
      lastAccessed: 'Hace 2 semanas',
      icon: Search,
    },
    {
      category: 'SASE',
      provider: 'Palo Alto',
      usage: 88,
      lastAccessed: 'Hace 6 horas',
      icon: Cloud,
    },
    {
      category: 'SASE',
      provider: 'ZScaler',
      usage: 82,
      lastAccessed: 'Hace 1 día',
      icon: Cloud,
    },
    {
      category: 'SASE',
      provider: 'Cisco',
      usage: 75,
      lastAccessed: 'Hace 3 días',
      icon: Cloud,
    },
    {
      category: 'Security Awareness Training',
      provider: 'KnowBe4',
      usage: 90,
      lastAccessed: 'Hace 12 horas',
      icon: Users,
    },
    {
      category: 'Security Awareness Training',
      provider: 'Proofpoint',
      usage: 85,
      lastAccessed: 'Hace 1 día',
      icon: Users,
    },
    {
      category: 'SIEM',
      provider: 'Splunk',
      usage: 95,
      lastAccessed: 'Hace 30 minutos',
      icon: BarChart3,
    },
    {
      category: 'SIEM',
      provider: 'LogRhythm',
      usage: 87,
      lastAccessed: 'Hace 4 horas',
      icon: BarChart3,
    },
    {
      category: 'Third Party Risk Management',
      provider: 'OneTrust',
      usage: 78,
      lastAccessed: 'Hace 2 días',
      icon: FileWarning,
    },
    {
      category: 'Third Party Risk Management',
      provider: 'Security Scorecard',
      usage: 72,
      lastAccessed: 'Hace 4 días',
      icon: FileWarning,
    },
    {
      category: 'Vulnerability Management',
      provider: 'Wiz',
      usage: 89,
      lastAccessed: 'Hace 8 horas',
      icon: ScanLine,
    },
    {
      category: 'Vulnerability Management',
      provider: 'Qualys',
      usage: 84,
      lastAccessed: 'Hace 1 día',
      icon: ScanLine,
    },
    {
      category: 'Vulnerability Management',
      provider: 'Tenable',
      usage: 91,
      lastAccessed: 'Hace 3 horas',
      icon: ScanLine,
    },
  ]

  const categories = Array.from(
    new Set(providers.map((provider) => provider.category)),
  )

  const filteredProviders =
    selectedCategory === 'all'
      ? providers
      : providers.filter((provider) => provider.category === selectedCategory)

  return (
    <div>
      <div className="mb-4">
        <Select onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Seleccionar categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorías</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className="h-[500px] pr-4">
        <table className="w-full">
          <thead>
            <tr className="text-sm font-medium text-muted-foreground">
              <th className="text-left py-2">Categoría / Proveedor</th>
              <th className="text-left py-2">Uso</th>
              <th className="text-left py-2">Último acceso</th>
            </tr>
          </thead>
          <tbody>
            {filteredProviders.map((provider, index) => (
              <ProviderUsageRow key={index} {...provider} />
            ))}
          </tbody>
        </table>
      </ScrollArea>
    </div>
  )
}

export default ProviderUsage
