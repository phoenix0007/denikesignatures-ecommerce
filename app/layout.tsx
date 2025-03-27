import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from "@/components/cart-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Optimize font loading
})

export const metadata: Metadata = {
  title: "Deni.KeSignature | Luxury Fashion & Accessories",
  description: "Discover unique, handcrafted luxury fashion and accessories at Deni.KeSignature.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'