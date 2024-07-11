'use client'

import { chatData } from '../../data/UserData'
import React, { useEffect, useState } from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../../components/ui/resizable'
import { cn } from '../../lib/utils'
import { Sidebar } from './Sidebar'
import { Chat } from './Chat'

interface ChatLayoutProps {
  defaultLayout?: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function ChatLayout({ defaultLayout = [320, 480], defaultCollapsed = true, navCollapsedSize }: ChatLayoutProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const [selectedChat, setSelectedChat] = React.useState(chatData[0])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkScreenWidth()

    window.addEventListener('resize', checkScreenWidth)

    return () => {
      window.removeEventListener('resize', checkScreenWidth)
    }
  }, [])

  return (
    <div className="flex h-screen flex-col">
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
        }}
        className="flex flex-1 overflow-hidden"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={isMobile ? 0 : 24}
          maxSize={isMobile ? 8 : 30}
          onCollapse={() => {
            setIsCollapsed(true)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
          }}
          onExpand={() => {
            setIsCollapsed(false)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
          }}
          className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out md:min-w-[70px]')}
        >
          <Sidebar
            isCollapsed={isCollapsed || isMobile}
            chats={chatData}
            isMobile={isMobile}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Chat messages={selectedChat.messages} selectedUser={selectedChat.users[0]} isMobile={isMobile} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
