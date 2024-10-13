import { PanelLeft } from 'lucide-react'
import React from 'react'
import { HeaderActions } from '../organisms/header/header-actions'
import { MobileNav } from '../organisms/navigation/mobile-nav'
import { SidebarNav } from '../organisms/navigation/sidebar-nav'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

interface DashboardTemplateProps {
  children: React.ReactNode
}

export function DashboardTemplate({ children }: DashboardTemplateProps) {
  return (
    <SidebarNav>
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:justify-end sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <MobileNav />
          </SheetContent>
        </Sheet>
        <HeaderActions />
      </header>
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
    </SidebarNav>
  )
}
