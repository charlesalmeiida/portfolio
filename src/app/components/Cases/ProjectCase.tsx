import Image from "next/image"
import { TagTech } from "./TagTechProject"
import { useTranslations } from "next-intl"

interface ProjectCaseProps {
  projectName: string
  projectDescription: string
  image: string
  techs: string[]
}

export function ProjectCase({
  projectName,
  projectDescription,
  image,
  techs,
}: ProjectCaseProps) {
  const t = useTranslations("Cases")

  return (
    <div className="w-fit h-[485px] text-left border-[1px] rounded-md border-[#DCDCDC] cursor-pointer transition-all hover:scale-105">
      <Image
        src={image}
        width={383}
        height={229}
        alt={`Imagem do ${projectName}`}
      />
      <div className="pt-4 pl-4 flex gap-2">
        {techs.map((tech) => (
          <div key={tech}>
            <TagTech>
              <Image
                src={`/logo-${tech}-black.svg`}
                width={18}
                height={20}
                alt={`Logo do ${tech}`}
              />
              {tech === "ts"
                ? "TypeScript"
                : tech === "scss"
                ? "Sass"
                : tech === "vite"
                ? "Vite"
                : tech === "styled"
                ? "Styled-components"
                : tech === "next"
                ? "Next.js"
                : tech === "react"
                ? "React"
                : tech === "tailwind"
                ? "Tailwind"
                : tech === "js"
                ? "JavaScript"
                : tech}
            </TagTech>
          </div>
        ))}
      </div>
      <div className="mt-5 pl-4">
        <h3 className="font-poppins text-2xl font-semibold text-gray03">
          {projectName}
        </h3>
        <p className="font-inter text-sm mt-3 line-clamp-3 text-gray03 opacity-80 max-w-[333px]">
          {projectDescription}
        </p>
        <span className="font-inter text-base font-medium text-blue03 underline block mt-3">
          {t("seeMore")}
        </span>
      </div>
    </div>
  )
}
