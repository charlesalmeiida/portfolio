import { Poppins, Inter } from "next/font/google"

const poppins_font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

const inter_font = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

export const inter = inter_font.variable
export const poppins = poppins_font.variable
