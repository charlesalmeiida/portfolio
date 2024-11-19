import { ReactNode } from "react"

interface TagTechProps {
  children: ReactNode
}

export function TagTech({ children }: TagTechProps) {
  return (
    <div className="flex items-center gap-2 max-h-8 rounded-full border-[1px] w-fit px-3 py-2 font-inter text-xs font-medium">
      {children}
    </div>
  )
}
