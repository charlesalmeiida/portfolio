import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface GridContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: GridContainerProps) {
  return (
    <div className={twMerge("max-w-[1248px] mx-auto w-full px-4", className)}>
      {children}
    </div>
  )
}
