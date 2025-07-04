"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Moon,
  Sun,
  Menu,
  X,
  ExternalLink,
  Github,
  Send,
  Mail,
  Twitter,
  Facebook,
  Code2,
  Sparkles,
  Zap,
  MapPin,
  Calendar,
  Coffee,
  Briefcase,
  GraduationCap,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import { toast } from "sonner"

// Navigation Component
function Navigation({
  activeSection,
  setActiveSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  activeSection: string
  setActiveSection: (section: string) => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold text-blue-600">
          Vibe Coder
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === item.id ? "text-blue-600" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                />
              )}
            </motion.button>
          ))}

          {mounted && (
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {mounted && (
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-blue-600" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20" />

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-4 sm:left-20 text-blue-500/20"
        >
          <Code2 size={30} className="sm:w-10 sm:h-10" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-4 sm:right-20 text-indigo-500/20"
        >
          <Sparkles size={25} className="sm:w-8 sm:h-8" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-40 left-8 sm:left-40 text-blue-500/20"
        >
          <Zap size={20} className="sm:w-7 sm:h-7" />
        </motion.div>
      </div>

      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="font-display text-balance mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            MD. Shahariar Ahmmed <span className="text-blue-600 block sm:inline">Shovon</span>
          </motion.h1>

          <motion.p
            className="text-large text-muted-foreground mb-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Vibe Coder — Full-Stack Developer
          </motion.p>

          <motion.p
            className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Building fast, functional, and minimal web apps that solve real-world problems. Clean UI, straightforward
            UX, and shipping projects that just work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="text-base px-8 py-6 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// About Section with Bento Cards
function AboutSection() {
  const techStack = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "Supabase",
    "Vercel",
    "Render",
    "Netlify",
    "Git",
    "Telegram Bot API",
  ]

  const stats = [
    { icon: Coffee, label: "Cups of Coffee", value: "500+" },
    { icon: Code2, label: "Lines of Code", value: "10K+" },
    { icon: Star, label: "Projects Built", value: "15+" },
    { icon: Heart, label: "Happy Clients", value: "25+" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-balance mb-4">About Me</h2>
          <p className="text-large text-muted-foreground font-medium">Learning, experimenting, and building solo</p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Profile Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-0 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-blue-100 dark:border-blue-900 shadow-xl">
                        <motion.img
                          src="/images/profile-photo.jpg"
                          alt="MD. Shahariar Ahmmed Shovon"
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background animate-pulse" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-2xl text-blue-600 mb-3">Hey there! 👋</h3>
                      <p className="text-base text-muted-foreground text-pretty">
                        I'm Shahariar, but you can call me Vibe Coder. I'm a passionate developer from Bangladesh
                        (UTC+6) who loves building things that actually work.
                      </p>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Bangladesh</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GraduationCap className="w-4 h-4" />
                        <span>Student</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-green-600 font-medium">Available for collaborations</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 bg-blue-50 dark:bg-blue-950/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-display text-lg text-blue-600 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Description Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 bg-card/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <h3 className="font-display text-lg">What I Do</h3>
                </div>
                <p className="text-base text-muted-foreground text-pretty">
                  I specialize in building fast, functional, and minimal web apps that solve real-world problems. My
                  approach is simple: clean UI, straightforward UX, and working solo to ship projects without
                  unnecessary complexity.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 bg-card/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <h3 className="font-display text-lg">Current Focus</h3>
                </div>
                <p className="text-base text-muted-foreground text-pretty">
                  I'm currently a student and love working independently, building things from the ground up. While I'm
                  open to collaborators (listed as contributors), I prefer maintaining creative control over my
                  projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-display text-xl text-blue-600 mb-6">Tech Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="secondary"
                      className="w-full justify-center text-sm py-2 px-3 font-medium bg-blue-50 dark:bg-blue-950/20 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors border-blue-200 dark:border-blue-800"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Projects Section with Bento Layout
function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "📩 Temp Box",
      description:
        "A fast, no-BS tool to generate and manage temporary email addresses. Privacy-first and easy to use with instant email generation, real-time inbox, auto-cleanup, and no registration required.",
      image: "/images/temp-box-screenshot.png",
      technologies: ["React", "Node.js", "Third-Party API"],
      liveDemo: "https://tempbox.netlify.app",
      github: "https://github.com/ShovonSheikh/temp-box",
      featured: true,
    },
    {
      id: 2,
      name: "📁 Tele Drive",
      description:
        "A cloud storage system powered by a Telegram channel. Works like a lightweight Google Drive with upload & manage files functionality and unlimited Telegram storage capacity.",
      image: "/images/tele-drive-screenshot.png",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Telegram Bot API"],
      liveDemo: "https://tele-drive.netlify.app",
      github: "#", // Private repo
      featured: true,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-balance mb-4">Featured Projects</h2>
          <p className="text-large text-muted-foreground font-medium">Solo projects built with passion and purpose</p>
        </motion.div>

        {/* Bento Grid for Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={project.featured ? "lg:col-span-1" : ""}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm shadow-lg group h-full">
                <div className="aspect-video overflow-hidden relative">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white font-medium">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl text-blue-600 mb-3">{project.name}</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-medium border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 font-medium">
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    {project.github !== "#" && (
                      <Button asChild variant="outline" size="icon">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More Projects Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="border-0 bg-blue-50 dark:bg-blue-950/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="font-display text-xl text-blue-600 mb-2">More Projects Coming Soon!</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                I'm constantly working on new projects. Follow my GitHub to stay updated!
              </p>
              <Button
                variant="outline"
                asChild
                className="border-blue-200 dark:border-blue-800 bg-transparent font-medium"
              >
                <a href="https://github.com/ShovonSheikh" target="_blank" rel="noopener noreferrer">
                  Follow on GitHub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Section with Telegram Integration
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendToTelegram = async (data: typeof formData) => {
    const botToken = "8139829189:AAE9JBrjz7SdqLtdY6VaPooS7QTA_29F53A"
    const chatId = "-1002629987533"

    const message = `
🔔 New Contact Form Submission

👤 Name: ${data.name}
📧 Email: ${data.email}
💬 Message: ${data.message}

📅 Time: ${new Date().toLocaleString()}
🌐 From: Portfolio Website
    `.trim()

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      return true
    } catch (error) {
      console.error("Error sending to Telegram:", error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const success = await sendToTelegram(formData)

      if (success) {
        toast.success("Message sent successfully! I'll get back to you soon.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast.error("Failed to send message. Please try again or contact me directly.")
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:shovonali885@gmail.com" },
    { icon: Github, label: "ShovonSheikh", href: "https://github.com/ShovonSheikh" },
    { icon: Github, label: "SwagCoder18", href: "https://github.com/SwagCoder18" },
    { icon: Github, label: "airdropcodex", href: "https://github.com/airdropcodex" },
    { icon: Github, label: "YouTubeDLPro", href: "https://github.com/YouTubeDLPro" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/ali_shovon_2007" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com/ShovonAli2007" },
    { icon: Send, label: "WhatsApp", href: "https://wa.me/8801306657153" },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-balance mb-4">Get In Touch</h2>
          <p className="text-large text-muted-foreground font-medium">Let's connect and discuss ideas</p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - Large */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-lg h-full">
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Send className="w-5 h-5 text-blue-600" />
                  <h3 className="font-display text-xl text-blue-600">Send a Message</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="border-0 bg-muted/50 focus:bg-muted/70 transition-colors"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-0 bg-muted/50 focus:bg-muted/70 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="border-0 bg-muted/50 focus:bg-muted/70 transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="flex items-center space-x-2 text-blue-600 mb-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Message delivered via Telegram</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your message will be sent directly to my Telegram for faster response times.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg text-blue-600 mb-4">Connect With Me</h3>
                  <p className="text-muted-foreground mb-4 text-small text-pretty">
                    I'm always excited to discuss new ideas, potential collaborations, or just chat about development.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>Bangladesh (UTC+6)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>shovonali885@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-display font-bold mb-4">Social Links</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-2 rounded-lg border border-border/50 hover:bg-muted/50 transition-all duration-300 hover:shadow-sm text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <link.icon className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">{link.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Status Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-blue-50 dark:bg-blue-950/20 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-display font-bold mb-3 text-blue-600">Current Status</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-blue-600" />
                      <span>Student & Solo Developer</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span>Not available for work right now</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Open to collaborations (contributor basis)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main App Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground font-medium text-small">
            © 2024 Vibe Coder. Built with passion for clean, functional code.
          </p>
        </div>
      </footer>
    </div>
  )
}
