import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import React from 'react'

export interface DataItem {
  value: string
  bold?: boolean
}

interface DataTableProps {
  items: {
    title: string
    data: { [key: string]: DataItem }
  }[]
}

const DataTable: React.FC<DataTableProps> = ({ items }) => {
  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-4 h-full">
      {items.map((item, index) => (
        <Card key={index} className="w-full flex flex-col h-full">
          <CardHeader className="flex-shrink-0">
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {Object.entries(item.data).map(([key, { value, bold }], idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center py-4"
                >
                  <span
                    className={cn(
                      'text-sm text-center mb-2',
                      bold ? 'font-bold' : 'font-normal text-muted-foreground',
                    )}
                  >
                    {key}
                  </span>
                  <span
                    className={cn(
                      'text-foreground text-center text-lg',
                      bold ? 'font-bold' : 'font-normal',
                    )}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default DataTable
