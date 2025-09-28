import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kheri Law Firm | Attorneys at Law – Corporate, IP & Litigation Experts",
  description:
    "Kheri Law Firm provides expert legal services in Corporate Law, Intellectual Property, and Litigation with over 25 years of trusted experience.",
  keywords: "law firm, corporate law, intellectual property, litigation, legal services, attorneys",
  authors: [{ name: "Kheri Law Firm" }],
  openGraph: {
    title: "Kheri Law Firm | Attorneys at Law",
    description:
      "Expert legal services in Corporate Law, Intellectual Property, and Litigation with over 25 years of experience.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
