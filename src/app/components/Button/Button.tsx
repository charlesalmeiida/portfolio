import Link from "next/link"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps {
  children: ReactNode
  className: string
  link: string
}

export function Button({ children, className, link }: ButtonProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className={twMerge(
        "rounded-[4px] font-inter py-2 px-4 flex items-center gap-4 w-fit transition-all hover:scale-110",
        className
      )}
    >
      {children}
    </Link>
  )
}
