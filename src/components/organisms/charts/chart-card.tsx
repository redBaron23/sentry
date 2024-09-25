import { cn } from '@/lib/utils'
import { ChartColumnIncreasing, LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'

interface ChartCardProps {
  title: string
  children: ReactNode
  cols?: number
  icon?: LucideIcon
  className?: string
}

const ChartCard = ({
  title,
  children,
  cols = 2,
  icon: Icon = ChartColumnIncreasing,
  className,
}: ChartCardProps) => {
  return (
    <Card
      className={cn(
        'flex h-full flex-col shadow-sm transition-shadow duration-300 hover:shadow-md',
        className,
      )}
    >
      <CardHeader className="border-b pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent
        className={cn('grid flex-grow gap-6 pt-6', {
          'grid-cols-1 md:grid-cols-2': cols === 2,
          'grid-cols-1 xl:grid-cols-3': cols === 3,
        })}
      >
        {children}
      </CardContent>
    </Card>
  )
}

export default ChartCard
