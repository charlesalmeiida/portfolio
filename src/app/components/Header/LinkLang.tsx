import { Link, usePathname } from "@/i18n/routing"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface LinkLangProps {
  children: ReactNode
  link: string
  className?: string
}

export function LinkLang({ children, link, className }: LinkLangProps) {
  const pathname = usePathname()

  return (
    <Link
      href={pathname}
      locale={link}
      className={twMerge(
        "flex items-center gap-2 text-sm text-gray03",
        className
      )}
    >
      {children}
    </Link>
  )
}
