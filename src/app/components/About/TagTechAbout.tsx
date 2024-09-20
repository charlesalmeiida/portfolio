import Image from "next/image"

interface TagTechAboutProps {
  techName: string
  tech: string
}

export function TagTechAbout({ techName, tech }: TagTechAboutProps) {
  return (
    <div className="flex h-14 items-center gap-2 py-3 px-4 rounded-full border-[1px] border-gray02 transition-all hover:border-blue w-fit border-opacity-80">
      <div className="bg-blue w-8 h-8 rounded-full flex items-center justify-center">
        <Image
          src={`/logo-${techName}.svg`}
          width={12}
          height={20}
          alt={`Logo ${techName}`}
        />
      </div>
      <span className="text-gray03 font-medium text-sm font-inter">{tech}</span>
    </div>
  )
}
