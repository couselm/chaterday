export interface Chat {
  id: number
  users: User[]
  messages: Message[]
}

export interface Message {
  id: number
  user: user
  message: string
  time: string
}

export interface User {
  id: number
  avatar: string
  name: string
}
