'use client'

import { Message, User } from '../../types'
import ChatTopBar from './ChatTopBar'
import { ChatList } from './ChatList'
import React, { useEffect } from 'react'

interface ChatProps {
  messages?: Message[]
  selectedUser: User
  isMobile: boolean
}

export function Chat({ messages, selectedUser, isMobile }: ChatProps) {
  const [messagesState, setMessages] = React.useState<Message[]>(messages ?? [])

  useEffect(() => {
    setMessages(messages ?? [])
  }, [messages])

  const sendMessage = (newMessage: Message) => {
    setMessages([...messagesState, newMessage])
  }

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-scroll">
      <ChatTopBar selectedUser={selectedUser} />
      <ChatList messages={messagesState} selectedUser={selectedUser} sendMessage={sendMessage} isMobile={isMobile} />
    </div>
  )
}
