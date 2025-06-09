import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import AosInit from "@/components/aos-init"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KoleksiQyu - Template Undangan Pernikahan Digital Terbaik",
  description:
    "Buat undangan pernikahan digital yang memukau dengan template premium kami. Mudah dikustomisasi, responsive, dan siap pakai dalam hitungan menit.",
  keywords: "undangan digital, template pernikahan, undangan online, wedding invitation, indonesia",
  authors: [{ name: "KoleksiQyu Team" }],
  openGraph: {
    title: "KoleksiQyu - Template Undangan Pernikahan Digital Terbaik",
    description: "Buat undangan pernikahan digital yang memukau dengan template premium kami.",
    type: "website",
    locale: "id_ID",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="koleksiqyu-ui-theme">
          <AosInit />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
