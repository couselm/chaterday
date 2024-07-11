import React, { useState } from 'react'
import { cn } from '../../../lib/utils'
import { buttonVariants } from '../../ui/button'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    title: string
    component: React.ReactNode
  }[]
  setActiveComponent: (component: React.ReactNode) => void
}

export function SidebarNav({ className, items, setActiveComponent, ...props }: SidebarNavProps) {
  return (
    <nav className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)} {...props}>
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveComponent(item.component)}
          className={cn(buttonVariants({ variant: 'ghost' }), 'justify-start hover:bg-transparent hover:underline')}
        >
          {item.title}
        </button>
      ))}
    </nav>
  )
}
