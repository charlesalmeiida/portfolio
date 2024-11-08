import Image from "next/image"
import { TagTech } from "./TagTechProject"

interface ProjectCaseProps {
  projectName: string
  projectDescription: string
  imageSrc: string
  imageAlt: string
  tech1: string
  techName1: string
  tech2: string
  techName2: string
  tech3: string
  techName3: string
}

export function ProjectCase({
  projectName,
  projectDescription,
  imageSrc,
  imageAlt,
  tech1,
  techName1,
  tech2,
  techName2,
  tech3,
  techName3,
}: ProjectCaseProps) {
  return (
    <div className="w-fit h-[485px] text-left border-[1px] rounded-md border-[#DCDCDC] cursor-pointer transition-all hover:scale-105">
      <Image src={imageSrc} width={383} height={229} alt={imageAlt} />
      <div className="pt-4 pl-4 flex gap-2">
        <TagTech>
          <Image
            src={`/logo-${tech1}-black.svg`}
            width={18}
            height={20}
            alt={`Logo do ${techName1}`}
          />
          {techName1}
        </TagTech>
        <TagTech>
          <Image
            src={`/logo-${tech2}-black.svg`}
            width={18}
            height={20}
            alt={`Logo do ${techName2}`}
          />
          {techName2}
        </TagTech>
        <TagTech>
          <Image
            src={`/logo-${tech3}-black.svg`}
            width={18}
            height={20}
            alt={`Logo do ${techName3}`}
          />
          {techName3}
        </TagTech>
      </div>
      <div className="mt-5 pl-4">
        <h3 className="font-poppins text-2xl font-semibold text-gray03">
          {projectName}
        </h3>
        <p className="font-inter text-sm mt-3 line-clamp-3 text-gray03 opacity-80 max-w-[333px]">
          {projectDescription}
        </p>
        <span className="font-inter text-base font-medium text-blue03 underline block mt-3">
          Saiba mais
        </span>
      </div>
    </div>
  )
}
