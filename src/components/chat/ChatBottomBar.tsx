import { FileImage, Mic, Paperclip, PlusCircle, SendHorizontal, ThumbsUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { buttonVariants } from '../ui/button'
import { cn } from '../../lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Message } from '../../types'
import { Textarea } from '../ui/textarea'
import { EmojiPicker } from './EmojiPicker'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { loggedInUser } from 'src/data/UserData'

interface ChatBottombarProps {
  sendMessage: (newMessage: Message) => void
  isMobile: boolean
}

export const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }]

export default function ChatBottombar({ sendMessage, isMobile }: ChatBottombarProps) {
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)

    // Adjust the height of the textarea
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`
    }
  }

  const handleThumbsUp = () => {
    const newMessage: Message = {
      id: message.length + 1,
      name: loggedInUser.name,
      avatar: loggedInUser.avatar,
      message: '👍',
    }
    sendMessage(newMessage)
    setMessage('')
  }

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: message.length + 1,
        user: loggedInUser,
        message: message.trim(),
        time: new Date().toLocaleTimeString(),
      }
      sendMessage(newMessage)
      setMessage('')

      if (inputRef.current) {
        inputRef.current.focus()
        inputRef.current.style.height = 'auto' // Reset height after sending the message
      }
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex w-full items-center justify-between gap-2 p-2">
      <div className="flex">
        <Popover>
          <PopoverTrigger asChild>
            <Link
              to="#"
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'h-9 w-9',
                'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
              )}
            >
              <PlusCircle size={20} className="text-muted-foreground" />
            </Link>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-full p-2">
            {message.trim() || isMobile ? (
              <div className="flex gap-2">
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'h-9 w-9',
                    'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
                  )}
                >
                  <Mic size={20} className="text-muted-foreground" />
                </Link>
                {BottombarIcons.map((icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'h-9 w-9',
                      'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
                    )}
                  >
                    <icon.icon size={20} className="text-muted-foreground" />
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'h-9 w-9',
                  'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
                )}
              >
                <Mic size={20} className="text-muted-foreground" />
              </Link>
            )}
          </PopoverContent>
        </Popover>
        {!message.trim() && !isMobile && (
          <div className="flex">
            {BottombarIcons.map((icon, index) => (
              <Link
                key={index}
                href="#"
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'h-9 w-9',
                  'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
                )}
              >
                <icon.icon size={20} className="text-muted-foreground" />
              </Link>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key="input"
          className="relative w-full"
          layout
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            opacity: { duration: 0.05 },
            layout: {
              type: 'spring',
              bounce: 0.15,
            },
          }}
        >
          <Textarea
            autoComplete="off"
            value={message}
            ref={inputRef}
            onKeyDown={handleKeyPress}
            onChange={handleInputChange}
            name="message"
            placeholder="Aa"
            rows={1}
            className="auto-resize flex w-full resize-none overflow-y-auto rounded-lg border bg-background"
          ></Textarea>
          <div className="absolute bottom-0.5 right-2">
            <EmojiPicker
              onChange={(value) => {
                setMessage(message + value)
                if (inputRef.current) {
                  inputRef.current.focus()
                }
              }}
            />
          </div>
        </motion.div>

        {message.trim() ? (
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'h-9 w-9',
              'shrink-0 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
            )}
            onClick={handleSend}
          >
            <SendHorizontal size={20} className="text-muted-foreground" />
          </Link>
        ) : (
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'h-9 w-9',
              'shrink-0 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
            )}
            onClick={handleThumbsUp}
          >
            <ThumbsUp size={20} className="text-muted-foreground" />
          </Link>
        )}
      </AnimatePresence>
    </div>
  )
}
