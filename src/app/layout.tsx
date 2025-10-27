import "@/styles/global.css"

import type { Metadata } from "next"
import { Roboto } from "next/font/google"

import { Header } from "@/app/(ui)/header"

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ignite Shop",
  description: "Ignite Shop Next",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} overflow-hidden`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
