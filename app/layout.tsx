import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingChatButton from "@/components/floating-chat-button"
import { UserProvider } from "@/contexts/UserContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={notoSansArabic.className}>
        <UserProvider>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingChatButton />
        </UserProvider>
      </body>
    </html>
  )
}

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
      title: "Al-Azhar School - Learn Quran & Arabic Online",
  description:
    "Learn the Holy Quran from Al-Azhar scholars anywhere in the world. Online Quran memorization, Arabic language, and Islamic studies courses.",
    generator: 'v0.dev'
}
