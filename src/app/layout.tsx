import { Metadata } from "next"
import "./globals.css"
import { Poppins, Inter } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Portfolio - Charles Almeida",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-br"
      style={{ scrollBehavior: "smooth" }}
      className={`${poppins.variable} ${inter.variable}`}
    >
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <body>{children}</body>
    </html>
  )
}
