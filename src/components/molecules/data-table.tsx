import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils' // Asegúrate de tener esta utilidad de shadcn
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
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {items.map((item, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(item.data).map(([key, { value, bold }], idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center py-2"
                >
                  <span
                    className={cn(
                      'text-sm text-center mb-1',
                      bold ? 'font-bold' : 'font-normal text-muted-foreground',
                    )}
                  >
                    {key}
                  </span>
                  <span
                    className={cn(
                      'text-foreground text-center',
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
