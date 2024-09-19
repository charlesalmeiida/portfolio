import { Container } from "../GridContainer"
import { ProjectCase } from "./ProjectCase"

export function Cases() {
  return (
    <Container>
      <div className="py-28">
        <div className="mx-auto w-fit text-center space-y-2">
          <span className="font-poppins text-base text-gray03 tracking-widest">
            PROJETOS
          </span>
          <h2 className="font-poppins text-[40px] font-semibold text-gray03">
            Meus cases
          </h2>
        </div>
        <div className="mt-14 flex justify-between" id="cases">
          <ProjectCase
            imageSrc="/image-project-consultacep.png"
            imageAlt="Imagem do projeto ConsultaCEP"
            projectName="ConsultaCEP"
            projectDescription="Desenvolvimento de projeto prático para aprimorar as habilidades em desenvolvimento e em especial a capacidade de fazer consultas a API's externas"
            tech1="react"
            techName1="React"
            tech2="tailwind"
            techName2="Tailwind"
            tech3="js"
            techName3="JavaScript"
          />
          <ProjectCase
            imageSrc="/image-project-quiz.png"
            imageAlt="Imagem do projeto Quiz"
            projectName="Quiz App"
            projectDescription="Quiz desenvolvido durante o curso Dev Sem Limites, com o objetivo de praticar as tecnologias e consolidar o entendimento de SPAs, bem como o conceito de componentização."
            tech1="react"
            techName1="React"
            tech2="vite"
            techName2="Vite"
            tech3="ts"
            techName3="TypeScript"
          />
          <ProjectCase
            imageSrc="/project-image-portfolio.png"
            imageAlt="Imagem do projeto Quiz"
            projectName="Portfolio"
            projectDescription="Meu próprio portfólio, desenvolvido em Next.js com Tailwind para auxiliar na estilização. "
            tech1="next"
            techName1="Next.js"
            tech2="tailwind"
            techName2="Tailwind"
            tech3="ts"
            techName3="TypeScript"
          />
        </div>
        <button className=" rounded-[4px] font-inter py-2 px-4 flex items-center gap-4 w-fit transition-all hover:scale-110 bg-transparent mx-auto mt-20 text-gray03 border-[1px] border-blue02">
          Mostrar mais
        </button>
      </div>
    </Container>
  )
}
