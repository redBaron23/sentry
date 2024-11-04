import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { AlertTriangle, Globe, Info, Server, Shield } from 'lucide-react'

// Interfaces
interface AssetExposureData {
  url: string
  ip: string
  portsOpen: number
}

interface VulnerabilityData {
  url: string
  ip: string
  portService: string
  vuln: string
  kveCisa: boolean
}

interface SupplyChainData {
  url: string
  ip: string
  vendor: string
  country: string
}

interface NewAssetData {
  url: string
  ip: string
  port: number
}

// Datos simulados
const exposureData: AssetExposureData[] = [
  {
    url: 'api.company.com',
    ip: '192.168.1.100',
    portsOpen: 3,
  },
  {
    url: 'admin.company.com',
    ip: '192.168.1.101',
    portsOpen: 5,
  },
  {
    url: 'dashboard.company.com',
    ip: '192.168.1.102',
    portsOpen: 2,
  },
]

const vulnerabilityData: VulnerabilityData[] = [
  {
    url: 'api.company.com',
    ip: '192.168.1.100',
    portService: 'HTTP/80',
    vuln: 'CVE-2023-1234',
    kveCisa: true,
  },
  {
    url: 'admin.company.com',
    ip: '192.168.1.101',
    portService: 'SSH/22',
    vuln: 'CVE-2023-5678',
    kveCisa: false,
  },
  {
    url: 'dashboard.company.com',
    ip: '192.168.1.102',
    portService: 'HTTPS/443',
    vuln: 'CVE-2023-9012',
    kveCisa: true,
  },
]

const supplyChainData: SupplyChainData[] = [
  {
    url: 'cdn.thirdparty.com',
    ip: '203.0.113.1',
    vendor: 'CloudFlare',
    country: 'United States',
  },
  {
    url: 'api.payment.com',
    ip: '203.0.113.2',
    vendor: 'Stripe',
    country: 'United States',
  },
  {
    url: 'cdn.analytics.com',
    ip: '203.0.113.3',
    vendor: 'Google Analytics',
    country: 'United States',
  },
]

const newAssetData: NewAssetData[] = [
  {
    url: 'new.company.com',
    ip: '192.168.1.150',
    port: 443,
  },
  {
    url: 'test.company.com',
    ip: '192.168.1.151',
    port: 80,
  },
]

export const AssetExposure = () => {
  return (
    <Card className="shadow-sm transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg font-medium">
            <Server className="h-5 w-5 text-blue-500" />
            <span>Asset Exposure</span>
          </CardTitle>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-4 w-4 text-gray-400 hover:text-gray-600" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Exposición de activos y puertos abiertos</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow className="hover:bg-gray-50/50">
                <TableHead className="font-semibold">URL</TableHead>
                <TableHead className="font-semibold">IP</TableHead>
                <TableHead className="font-semibold">Ports Open</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exposureData.map((item, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-400" />
                      {item.url}
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{item.ip}</TableCell>
                  <TableCell>
                    <Badge
                      variant={item.portsOpen > 3 ? 'destructive' : 'secondary'}
                      className="w-12 justify-center font-mono"
                    >
                      {item.portsOpen}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

export const VulnerabilityPosture = () => {
  return (
    <Card className="shadow-sm transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg font-medium">
            <Shield className="h-5 w-5 text-red-500" />
            <span>Vulnerability Posture</span>
            <Badge variant="destructive" className="ml-2">
              {vulnerabilityData.length} Issues
            </Badge>
          </CardTitle>
          <Tooltip>
            <TooltipTrigger>
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Vulnerabilidades detectadas en los sistemas</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow className="hover:bg-gray-50/50">
                <TableHead className="font-semibold">URL</TableHead>
                <TableHead className="font-semibold">IP</TableHead>
                <TableHead className="font-semibold">Port/Service</TableHead>
                <TableHead className="font-semibold">Vuln</TableHead>
                <TableHead className="font-semibold">KVE (CISA)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vulnerabilityData.map((item, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-400" />
                      {item.url}
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{item.ip}</TableCell>
                  <TableCell className="font-mono text-sm">
                    {item.portService}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-red-50 text-red-700 hover:bg-red-100"
                    >
                      {item.vuln}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {item.kveCisa ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                        Yes
                      </Badge>
                    ) : (
                      <Badge variant="destructive">No</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

export const ThirdPartyCatalog = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <span>Third Party Catalog</span>
          <span role="img" aria-label="people">
            👥
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>URL</TableHead>
              <TableHead>IP</TableHead>
              <TableHead>Vendor</TableHead>
              <TableHead>Country</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supplyChainData.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.url}</TableCell>
                <TableCell>{item.ip}</TableCell>
                <TableCell>{item.vendor}</TableCell>
                <TableCell>{item.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export const NewAssetDiscovered = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <span>New Asset/Service Discovered</span>
          <Badge variant="secondary">Last 24hs</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>URL</TableHead>
              <TableHead>IP</TableHead>
              <TableHead>Port</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {newAssetData.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.url}</TableCell>
                <TableCell>{item.ip}</TableCell>
                <TableCell>{item.port}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

// Componente principal que une todo
export const SecurityDashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Security Dashboard
          <Shield className="h-6 w-6 text-blue-500" />
        </h1>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="py-1">
            Last Updated: {new Date().toLocaleString()}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetExposure />
        <NewAssetDiscovered />
      </div>

      <VulnerabilityPosture />
      <ThirdPartyCatalog />
    </div>
  )
}

export default SecurityDashboard
