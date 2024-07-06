import { Message, UserData } from '../../data/UserData'
import ChatTopBar from './ChatTopBar'
import { ChatList } from './ChatList'
import React from 'react'

interface ChatProps {
  messages?: Message[]
  selectedUser: UserData
  isMobile: boolean
}

export function Chat({ messages, selectedUser, isMobile }: ChatProps) {
  const [messagesState, setMessages] = React.useState<Message[]>(messages ?? [])

  const sendMessage = (newMessage: Message) => {
    setMessages([...messagesState, newMessage])
  }

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <ChatTopBar selectedUser={selectedUser} />

      <ChatList messages={messagesState} selectedUser={selectedUser} sendMessage={sendMessage} isMobile={isMobile} />
    </div>
  )
}
