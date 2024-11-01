import { Metadata } from "next"
import "./globals.css"
import { poppins, inter } from "../utils/fonts"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"

export const metadata: Metadata = {
  title: "Portfolio - Charles Almeida",
  description:
    "Portfolio de Desenvolvedor Front-end - Charles Almeida - React, Next.js, Tailwind",
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()
  {
    return (
      <html
        lang="pt-br"
        style={{ scrollBehavior: "smooth" }}
        className={`${poppins} ${inter}`}
      >
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <body>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    )
  }
}
