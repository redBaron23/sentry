import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ExternalLinkIcon, InfoCircledIcon } from '@radix-ui/react-icons'

interface CompanyData {
  company: string
  website: string
  securityScore: {
    score: number
    grade: 'A' | 'B' | 'C' | 'D' | 'F'
  }
  thirtyDayRisk: number
  industry: string
  status: 'Active' | 'Inactive'
  dateAdded: string
  publicTags: string[]
  productsUsed: number
}

const companies: CompanyData[] = [
  {
    company: 'American Airlines',
    website: 'aa.com',
    securityScore: { score: 79, grade: 'C' },
    thirtyDayRisk: 10,
    industry: 'Transportation',
    status: 'Active',
    dateAdded: 'Mar 10, 2023',
    publicTags: ['LON Listed', 'NASDAQ Listed', 'NYSE Listed', 'The Big Three'],
    productsUsed: 1526,
  },
  {
    company: 'Aveloair',
    website: 'aveloair.com',
    securityScore: { score: 90, grade: 'A' },
    thirtyDayRisk: 3,
    industry: 'Information services',
    status: 'Active',
    dateAdded: 'Jan 16, 2024',
    publicTags: [],
    productsUsed: 26,
  },
  {
    company: 'Banco Santander',
    website: 'santander.com',
    securityScore: { score: 95, grade: 'A' },
    thirtyDayRisk: 1,
    industry: 'Banking',
    status: 'Active',
    dateAdded: 'Jan 20, 2024',
    publicTags: ['NYSE Listed', 'Banking Leader', 'EU Bank'],
    productsUsed: 2341,
  },
  {
    company: 'BBVA',
    website: 'bbva.com',
    securityScore: { score: 92, grade: 'A' },
    thirtyDayRisk: 2,
    industry: 'Banking',
    status: 'Active',
    dateAdded: 'Jan 15, 2024',
    publicTags: ['NYSE Listed', 'Digital Banking'],
    productsUsed: 1892,
  },
  {
    company: 'JPMorgan Chase',
    website: 'jpmorgan.com',
    securityScore: { score: 88, grade: 'B' },
    thirtyDayRisk: 4,
    industry: 'Banking',
    status: 'Active',
    dateAdded: 'Dec 05, 2023',
    publicTags: ['NYSE Listed', 'Investment Banking'],
    productsUsed: 3456,
  },
]

const SecurityScoreTable: React.FC = () => {
  const getScoreBadgeColor = (score: number) => {
    if (score >= 90) return 'bg-green-600 text-white'
    if (score >= 80) return 'bg-yellow-600 text-white'
    return 'bg-red-600 text-white'
  }

  const getRiskBadgeColor = (risk: number) => {
    if (risk <= 3) return 'bg-green-100 text-green-800'
    if (risk <= 7) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  return (
    <div className="space-y-4">
      <div className="px-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Scores de Riesgo entre Competidores
        </h2>
        <p className="text-gray-500 mt-1">
          Análisis comparativo de niveles de riesgo y seguridad por empresa
        </p>
      </div>

      <Card className="w-full">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="font-semibold pl-6">Empresa</TableHead>
                <TableHead className="font-semibold">
                  <div className="flex items-center gap-2">
                    Score de Seguridad
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <InfoCircledIcon className="h-4 w-4 text-gray-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Calificación general de seguridad de la empresa</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </TableHead>
                <TableHead className="font-semibold">Riesgo 30 días</TableHead>
                <TableHead className="hidden md:table-cell font-semibold">
                  Industria
                </TableHead>
                <TableHead className="hidden md:table-cell font-semibold">
                  Estado
                </TableHead>
                <TableHead className="hidden md:table-cell font-semibold">
                  Fecha
                </TableHead>
                <TableHead className="hidden lg:table-cell font-semibold">
                  Tags
                </TableHead>
                <TableHead className="font-semibold pr-6 text-right">
                  Productos
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies.map((company) => (
                <TableRow key={company.company} className="hover:bg-gray-50">
                  <TableCell className="font-medium pl-6">
                    <div className="flex flex-col">
                      <span>{company.company}</span>
                      <a
                        href={`https://${company.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                      >
                        {company.website}
                        <ExternalLinkIcon className="h-3 w-3" />
                      </a>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${getScoreBadgeColor(company.securityScore.score)} px-3 py-1`}
                    >
                      {company.securityScore.grade}
                      <span className="ml-1 font-normal">
                        {company.securityScore.score}
                      </span>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${getRiskBadgeColor(company.thirtyDayRisk)} px-3 py-1`}
                    >
                      {company.thirtyDayRisk}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {company.industry}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge
                      variant={
                        company.status === 'Active' ? 'default' : 'secondary'
                      }
                    >
                      {company.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {company.dateAdded}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {company.publicTags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {company.publicTags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{company.publicTags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    {company.productsUsed}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}

export default SecurityScoreTable
