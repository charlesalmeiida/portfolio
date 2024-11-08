import { Link, usePathname } from "@/i18n/routing"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface LinkLangProps {
  children: ReactNode
  link: string
  className?: string
  handleLangChange?: () => void
}

export function LinkLang({
  children,
  link,
  className,
  handleLangChange,
}: LinkLangProps) {
  const pathname = usePathname()

  return (
    <Link
      onClick={handleLangChange}
      href={pathname}
      locale={link}
      className={twMerge(
        "flex items-center gap-2 text-sm text-gray02 hover:text-gray03",
        className
      )}
    >
      {children}
    </Link>
  )
}
