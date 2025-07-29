import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Sujan Das - Data Science Engineer & Python Expert",
    template: "%s | Sujan Das",
  },
  description:
    "Transforming ideas into intelligent digital solutions. Data Science Engineer & Python Expert specializing in ML, AI, and web development.",
  keywords: ["Data Science", "Python", "Machine Learning", "AI", "Web Development", "FastAPI", "Next.js"],
  authors: [{ name: "Sujan Das" }],
  creator: "Sujan Das",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sujandas.info",
    title: "Sujan Das - Data Science Engineer & Python Expert",
    description: "Transforming ideas into intelligent digital solutions",
    siteName: "Sujan Das Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujan Das - Data Science Engineer & Python Expert",
    description: "Transforming ideas into intelligent digital solutions",
    creator: "@sujandas",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/sujan-profile.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  )
}
