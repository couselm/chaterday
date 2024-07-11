import { Chat } from '../types'

const users: User[] = [
  {
    id: 1,
    avatar: '../assets/chat/User1.png',
    name: 'Jane Doe',
  },
  {
    id: 2,
    avatar: '../assets/chat/User2.png',
    name: 'John Doe',
  },
  {
    id: 3,
    avatar: '../assets/chat/User3.png',
    name: 'Elizabeth Smith',
  },
  {
    id: 4,
    avatar: '../assets/chat/User4.png',
    name: 'John Smith',
  },
]

export const loggedInUser: User = {
  id: 5,
  avatar: '../assets/chat/LoggedInUser.jpg',
  name: 'Jakob Hoeg',
}

export const chatData: Chat[] = [
  {
    id: 1,
    users: [users[0]],
    messages: [
      {
        id: 1,
        user: users[0],
        message: 'Hey, Jakob',
      },
      {
        id: 2,
        user: loggedInUser,
        message: 'Hey!',
      },
      {
        id: 3,
        user: users[0],
        message: 'How are you?',
      },
      {
        id: 4,
        user: loggedInUser,
        message: 'I am good, you?',
      },
      {
        id: 5,
        user: users[0],
        message: 'I am good too!',
      },
      {
        id: 6,
        user: loggedInUser,
        message: 'That is good to hear!',
      },
      {
        id: 7,
        user: users[0],
        message: 'How has your day been so far?',
      },
      {
        id: 8,
        user: loggedInUser,
        message: 'It has been good. I went for a run this morning and then had a nice breakfast. How about you?',
      },
      {
        id: 9,
        user: users[0],
        message: 'I had a relaxing day. Just catching up on some reading.',
      },
    ],
  },
  {
    id: 2,
    users: [users[1]],
    messages: [
      {
        id: 1,
        user: users[1],
        message: 'Hey, Jakob',
      },
      {
        id: 2,
        user: loggedInUser,
        message: 'Hey there!',
      },
    ],
  },
  {
    id: 3,
    users: [users[2]],
    messages: [
      {
        id: 1,
        user: users[2],
        message: 'Hey, Jakob',
      },
      {
        id: 2,
        user: loggedInUser,
        message: 'Hows it going?',
      },
      {
        id: 3,
        user: users[2],
        message: 'I am good, how about you?',
      },
    ],
  },
  {
    id: 4,
    users: [users[3]],
    messages: [
      {
        id: 1,
        user: users[3],
        message: 'Hey, Jakob',
      },
      {
        id: 2,
        user: loggedInUser,
        message: 'Hey!',
      },
    ],
  },
]
