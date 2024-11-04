'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Newspaper } from 'lucide-react'
import React, { useMemo, useState } from 'react'

interface NewsItemProps {
  title: string
  source: string
  timeAgo: string
  imageUrl?: string
  link: string
}

interface NewsSectionProps {
  news: NewsItemProps[]
}

function NewsItem({ title, source, timeAgo, imageUrl, link }: NewsItemProps) {
  return (
    <div className="flex items-start space-x-4 py-4">
      <div className="flex-1">
        <h3 className="text-sm font-medium leading-snug">
          <a
            href={link}
            className="hover:underline text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          {source} • {timeAgo}
        </p>
      </div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="w-20 h-20 object-cover rounded-md"
        />
      )}
    </div>
  )
}

function parseTimeAgo(timeAgo: string): Date {
  const now = new Date()
  const number = parseInt(timeAgo.split(' ')[0])
  const unit = timeAgo.split(' ')[1]

  switch (unit) {
    case 'day':
    case 'days':
      return new Date(now.setDate(now.getDate() - number))
    case 'week':
    case 'weeks':
      return new Date(now.setDate(now.getDate() - number * 7))
    default:
      return now
  }
}

export function NewsSection({ news }: NewsSectionProps) {
  const [filter, setFilter] = useState('all')

  const filteredNews = useMemo(() => {
    const now = new Date()
    return news.filter((item) => {
      const itemDate = parseTimeAgo(item.timeAgo)
      const diffTime = Math.abs(now.getTime() - itemDate.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      switch (filter) {
        case 'day':
          return diffDays <= 1
        case 'week':
          return diffDays <= 7
        case 'month':
          return diffDays <= 30
        default:
          return true
      }
    })
  }, [news, filter])

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between flex-col sm:flex-row">
          <div className="flex items-center space-x-2">
            <Newspaper className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg font-semibold">Noticias</CardTitle>
          </div>
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList>
              <TabsTrigger value="all">Todas</TabsTrigger>
              <TabsTrigger value="day">Hoy</TabsTrigger>
              <TabsTrigger value="week">Esta Semana</TabsTrigger>
              <TabsTrigger value="month">Este Mes</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-4">
          <div className="space-y-4">
            {filteredNews.map((item, index) => (
              <React.Fragment key={index}>
                <NewsItem {...item} />
                {index < filteredNews.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
        {filteredNews.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">
              No se encontraron noticias para el período seleccionado.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
