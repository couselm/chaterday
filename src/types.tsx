export interface Chat {
  id: number
  users: User[]
  messages: Message[]
}

export interface Message {
  id: number
  user: User
  message: string
  time: string
}

export interface User {
  id: number
  avatar: string
  name: string
}
