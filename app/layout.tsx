import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import Script from "next/script"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "MD. Shahariar Ahmmed Shovon - Vibe Coder | Full-Stack Developer",
  description:
    "Vibe Coder - Building fast, functional, and minimal web apps that solve real-world problems. Full-stack developer specializing in React, Next.js, and clean UI/UX design.",
  keywords:
    "full-stack developer, React, Next.js, Node.js, TypeScript, Tailwind CSS, Supabase, Telegram Bot API, web development, Bangladesh developer",
  authors: [{ name: "MD. Shahariar Ahmmed Shovon" }],
  openGraph: {
    title: "Vibe Coder - Full-Stack Developer Portfolio",
    description: "Building fast, functional, and minimal web apps that solve real-world problems",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Coder - Full-Stack Developer Portfolio",
    description: "Building fast, functional, and minimal web apps that solve real-world problems",
    creator: "@ali_shovon_2007",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>

        {/* Chatbase Integration */}
        <Script
          id="chatbase-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                  window.chatbase=(...arguments)=>{
                    if(!window.chatbase.q){window.chatbase.q=[]}
                    window.chatbase.q.push(arguments)
                  };
                  window.chatbase=new Proxy(window.chatbase,{
                    get(target,prop){
                      if(prop==="q"){return target.q}
                      return(...args)=>target(prop,...args)
                    }
                  })
                }
                const onLoad=function(){
                  const script=document.createElement("script");
                  script.src="https://www.chatbase.co/embed.min.js";
                  script.id="B-IUzm7czplq21PaYCAm3";
                  script.domain="www.chatbase.co";
                  document.body.appendChild(script)
                };
                if(document.readyState==="complete"){
                  onLoad()
                }else{
                  window.addEventListener("load",onLoad)
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
