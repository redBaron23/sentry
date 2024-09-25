'use client'

import { Bell } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface NotificationBellProps {
  initialCount: number
}

export function NotificationBell({ initialCount }: NotificationBellProps) {
  const [count, setCount] = useState(initialCount)

  const handleClearNotifications = () => {
    setCount(0)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-secondary"
        >
          <Bell className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              {count}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {count > 0 ? (
          <>
            <DropdownMenuItem>Notificación 1</DropdownMenuItem>
            <DropdownMenuItem>Notificación 2</DropdownMenuItem>
            <DropdownMenuItem>Notificación 3</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleClearNotifications}>
              Marcar todas como leídas
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem disabled>No hay notificaciones</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
