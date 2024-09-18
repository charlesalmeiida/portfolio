import { ReactNode } from "react"

interface ItemTechProps {
  children: ReactNode
}

export function ItemTech({ children }: ItemTechProps) {
  return (
    <div className="py-2 pl-4 pr-7 gap-2 h-11 w-fit bg-blue03 flex items-center font-poppins text-lg font-semibold text-gray01">
      {children}
    </div>
  )
}
