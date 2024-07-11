import { Message, UserData } from '../../types/types'
import { cn } from '../../lib/utils'
import React, { useRef } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import ChatBottomBar from './ChatBottomBar'
import { AnimatePresence, motion } from 'framer-motion'

interface ChatListProps {
  messages?: Message[]
  selectedUser: UserData
  sendMessage: (newMessage: Message) => void
  isMobile: boolean
}

export function ChatList({ messages, selectedUser, sendMessage, isMobile }: ChatListProps) {
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto overflow-x-hidden">
      <div ref={messagesContainerRef} className="flex h-full w-full flex-col overflow-y-auto overflow-x-hidden">
        <AnimatePresence>
          {messages?.map((message, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
              transition={{
                opacity: { duration: 0.1 },
                layout: {
                  type: 'spring',
                  bounce: 0.3,
                  duration: messages.indexOf(message) * 0.05 + 0.2,
                },
              }}
              style={{
                originX: 0.5,
                originY: 0.5,
              }}
              className={cn(
                'flex flex-col gap-2 whitespace-pre-wrap p-4',
                message.user.name !== selectedUser.name ? 'items-end' : 'items-start',
              )}
            >
              <div className="flex items-center gap-3">
                {message.user.name === selectedUser.name && (
                  <Avatar className="flex items-center justify-center">
                    <AvatarImage src={message.user.avatar} alt={message.user.name} width={6} height={6} />
                  </Avatar>
                )}
                <span className=" max-w-xs rounded-md bg-accent p-3">{message.message}</span>
                {message.user.name !== selectedUser.name && (
                  <Avatar className="flex items-center justify-center">
                    <AvatarImage src={message.user.avatar} alt={message.user.name} width={6} height={6} />
                  </Avatar>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <ChatBottomBar sendMessage={sendMessage} isMobile={isMobile} />
    </div>
  )
}
