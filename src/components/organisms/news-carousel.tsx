import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import * as React from 'react'

interface NewsItemProps {
  title: string
  source: string
  timeAgo: string
  imageUrl?: string
  link: string
}

interface NewsScrollProps {
  news: NewsItemProps[]
}

function NewsItem({ title, source, timeAgo, imageUrl, link }: NewsItemProps) {
  return (
    <div className="flex items-start space-x-4 py-2">
      <div className="flex-1">
        <h3 className="text-sm font-medium leading-snug">
          <a
            href={link}
            className="hover:underline text-primary"
            target="_blank"
          >
            {title}
          </a>
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          {source} • {timeAgo}
        </p>
      </div>
      {imageUrl && (
        <img src={imageUrl} alt="" className="w-16 h-16 object-cover rounded" />
      )}
    </div>
  )
}

export function NewsScroll({ news }: NewsScrollProps) {
  return (
    <ScrollArea className="h-[500px] w-full">
      <div className="space-y-4">
        {news.map((item, index) => (
          <React.Fragment key={index}>
            <NewsItem {...item} />
            {index < news.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}
