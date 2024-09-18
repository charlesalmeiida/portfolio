import Link from "next/link"
import { ReactNode } from "react"

interface ItemMenuProps {
  children: ReactNode
  link: string
}

export function ItemMenu({ children, link }: ItemMenuProps) {
  return (
    <Link className="font-normal" href={link}>
      {children}
    </Link>
  )
}
