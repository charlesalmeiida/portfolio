import Link from "next/link"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ItemMenuProps {
  children: ReactNode
  link: string
  className: string
}

export function ItemMenu({ children, link, className }: ItemMenuProps) {
  return (
    <Link
      className={(twMerge("font-normal transition-all"), className)}
      href={link}
    >
      {children}
    </Link>
  )
}
