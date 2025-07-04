"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

const botResponses = {
  greeting: [
    "Hey there! I'm Vibe Coder's AI assistant. I can tell you about Shahariar's projects, skills, and experience. What would you like to know?",
    "Hi! I'm here to help you learn more about Vibe Coder. Feel free to ask about his projects, tech stack, or development journey!",
  ],
  projects: [
    "Shahariar has built some cool projects! His main ones are Temp Box (a temporary email service) and Tele Drive (a Telegram-powered cloud storage). Both showcase his skills in React, Node.js, and API integrations. Which one interests you more?",
    "Great question! Vibe Coder has created two standout projects: Temp Box for temporary emails and Tele Drive for cloud storage via Telegram. Both are live and demonstrate his full-stack capabilities!",
  ],
  skills: [
    "Shahariar's tech stack includes React, Next.js, Node.js, TypeScript, Tailwind CSS, and Supabase. He's particularly strong in frontend development and loves building clean, minimal UIs. He also works with Telegram Bot API for unique integrations!",
    "Vibe Coder specializes in full-stack development with a frontend focus. His main tools are React, Next.js, Node.js, and TypeScript. He's all about building fast, functional apps with clean design!",
  ],
  contact: [
    "You can reach Shahariar through several channels: Email (shovonali885@gmail.com), Telegram (@SHAON_VAI_21), or WhatsApp. He's based in Bangladesh (UTC+6) and loves connecting with fellow developers!",
    "Vibe Coder is active on multiple platforms! Best ways to contact: Telegram @SHAON_VAI_21, email shovonali885@gmail.com, or check out his 4 GitHub profiles. He's always excited to discuss development ideas!",
  ],
  availability: [
    "Currently, Shahariar is a student and not available for paid work. However, he's open to collaborations where contributors get credit but no financial compensation. He prefers working solo but welcomes creative partnerships!",
    "Vibe Coder is focused on his studies right now, so no paid projects. But he's definitely open to collaborations on interesting projects - just note that it's contributor-based, not paid work!",
  ],
  default: [
    "That's an interesting question! While I know a lot about Vibe Coder's work, I might not have that specific info. Feel free to reach out to him directly via Telegram @SHAON_VAI_21 or email!",
    "I'm still learning about all aspects of Shahariar's work! For detailed questions like that, I'd recommend contacting him directly. He's very responsive on Telegram and email!",
  ],
}

function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase()

  if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)]
  }

  if (
    message.includes("project") ||
    message.includes("work") ||
    message.includes("temp box") ||
    message.includes("tele drive")
  ) {
    return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)]
  }

  if (
    message.includes("skill") ||
    message.includes("tech") ||
    message.includes("stack") ||
    message.includes("technology")
  ) {
    return botResponses.skills[Math.floor(Math.random() * botResponses.skills.length)]
  }

  if (
    message.includes("contact") ||
    message.includes("reach") ||
    message.includes("email") ||
    message.includes("telegram")
  ) {
    return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)]
  }

  if (
    message.includes("available") ||
    message.includes("hire") ||
    message.includes("work") ||
    message.includes("job")
  ) {
    return botResponses.availability[Math.floor(Math.random() * botResponses.availability.length)]
  }

  return botResponses.default[Math.floor(Math.random() * botResponses.default.length)]
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Vibe Coder's AI assistant. Ask me anything about Shahariar's projects, skills, or experience!",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(inputValue),
          isBot: true,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-shadow"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96"
          >
            <Card className="h-full flex flex-col shadow-2xl">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Vibe Coder AI</h3>
                    <p className="text-xs text-muted-foreground">Ask me anything!</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                <ScrollArea className="flex-1 px-4">
                  <div className="space-y-4 pb-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                            message.isBot ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
                          }`}
                        >
                          <div className="flex items-start space-x-2">
                            {message.isBot && <Bot className="h-3 w-3 mt-0.5 flex-shrink-0" />}
                            {!message.isBot && <User className="h-3 w-3 mt-0.5 flex-shrink-0" />}
                            <p className="leading-relaxed">{message.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Bot className="h-3 w-3" />
                            <div className="flex space-x-1">
                              <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" />
                              <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce delay-100" />
                              <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce delay-200" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about projects, skills..."
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
