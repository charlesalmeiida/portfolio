import Link from "next/link"
import { ReactNode } from "react"

interface ItemMenuProps {
  children: ReactNode
  link: string
}

export function ItemMenu({ children, link }: ItemMenuProps) {
  return (
    <Link
      className="font-normal text-gray03 transition-all hover:text-gray02 "
      href={link}
    >
      {children}
    </Link>
  )
}
