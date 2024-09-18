import Link from "next/link"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface LinkLangProps {
  children: ReactNode
  link: string
  className?: string
}

export function LinkLang({ children, link, className }: LinkLangProps) {
  return (
    <Link
      href={link}
      className={twMerge(
        "flex items-center gap-2 text-sm text-gray03",
        className
      )}
    >
      {children}
    </Link>
  )
}
