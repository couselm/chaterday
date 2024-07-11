import { MoreHorizontal, PenSquare } from 'lucide-react'
import { cn } from '../../lib/utils'
import { buttonVariants } from '../ui/button'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '../ui/tooltip'
import { Avatar, AvatarImage } from '../ui/avatar'

interface SidebarProps {
  isCollapsed: boolean
  chats: Chat[]
  selectedChat: Chat
  setSelectedChat: (chat: Chat) => void
  isMobile: boolean
}

export function Sidebar({ chats, isCollapsed, selectedChat, setSelectedChat, isMobile }: SidebarProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group relative flex h-full flex-col gap-4 p-2 data-[collapsed=true]:p-2 "
    >
      {!isCollapsed && (
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2 text-2xl">
            <p className="font-medium">Chats</p>
            <span className="text-zinc-300">({chats.length})</span>
          </div>

          <div className="flex items-center gap-2">
            <div className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9')}>
              <MoreHorizontal size={20} />
            </div>

            <div className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9')}>
              <PenSquare size={20} />
            </div>
          </div>
        </div>
      )}
      <nav className="grid gap-4 p-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {chats.map((chat) =>
          isCollapsed ? (
            <TooltipProvider key={chat.id}>
              <Tooltip key={chat.id} delayDuration={0}>
                <TooltipTrigger asChild>
                  <div
                    onClick={() => setSelectedChat(chat)}
                    className={cn(
                      'flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl md:h-16 md:w-16', // Flex utilities for centering
                      chat.id === selectedChat.id && 'bg-gray-200 dark:bg-gray-700',
                    )}
                  >
                    <Avatar className="flex items-center justify-center">
                      <AvatarImage
                        src={chat.users[0].avatar}
                        alt={chat.users[0].avatar}
                        width={6}
                        height={6}
                        className="h-10 w-10"
                      />
                    </Avatar>
                    <span className="sr-only">{chat.users[0].name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {chat.users[0].name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`flex cursor-pointer flex-row justify-start gap-4 rounded-xl px-4 duration-300
                ${chat.id === selectedChat.id ? 'bg-gray-200 py-8 dark:bg-gray-700' : 'py-4'}`}
            >
              <Avatar className="flex items-center justify-center">
                <AvatarImage
                  src={chat.users[0].avatar}
                  alt={chat.users[0].avatar}
                  width={6}
                  height={6}
                  className="h-10 w-10"
                />
              </Avatar>
              <div className="max-w-28 flex flex-col">
                <span>{chat.users[0].name}</span>
                {chat.messages.length > 0 && (
                  <span className="truncate text-xs text-zinc-300">
                    {chat.messages[chat.messages.length - 1]?.message}
                  </span>
                )}
              </div>
            </div>
          ),
        )}
      </nav>
    </div>
  )
}
