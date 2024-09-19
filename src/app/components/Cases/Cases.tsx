"use client"

import { useState } from "react"
import { Container } from "../GridContainer"
import { ProjectCase } from "./ProjectCase"
import { CasesModal } from "./CasesModal"

export function Cases() {
  const [showAll, setShowAll] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  const projects = [
    {
      imageSrc: "/project-image-portfolio.png",
      imageAlt: "Imagem do projeto Portfolio",
      projectName: "Portfolio",
      projectDescription:
        "Meu próprio portfólio, desenvolvido em Next.js com Tailwind para auxiliar na estilização.",
      tech1: "next",
      techName1: "Next.js",
      tech2: "tailwind",
      techName2: "Tailwind",
      tech3: "ts",
      techName3: "TypeScript",
    },
    {
      imageSrc: "/image-project-consultacep.png",
      imageAlt: "Imagem do projeto ConsultaCEP",
      projectName: "ConsultaCEP",
      projectDescription:
        "Desenvolvimento de projeto prático para aprimorar as habilidades em desenvolvimento e em especial a capacidade de fazer consultas a API's externas",
      tech1: "react",
      techName1: "React",
      tech2: "tailwind",
      techName2: "Tailwind",
      tech3: "js",
      techName3: "JavaScript",
    },
    {
      imageSrc: "/image-project-quiz.png",
      imageAlt: "Imagem do projeto Quiz",
      projectName: "Quiz App",
      projectDescription:
        "Quiz desenvolvido durante o curso Dev Sem Limites, com o objetivo de praticar as tecnologias e consolidar o entendimento de SPAs, bem como o conceito de componentização.",
      tech1: "react",
      techName1: "React",
      tech2: "vite",
      techName2: "Vite",
      tech3: "ts",
      techName3: "TypeScript",
    },
    {
      imageSrc: "/image-project-devbooks.png",
      imageAlt: "Imagem do projeto DevBooks",
      projectName: "Devbooks",
      projectDescription:
        "Projeto Devbooks em React, realizado durante o curso Dev Sem Limites. Com consulta a API de livros do Google.",
      tech1: "react",
      techName1: "React",
      tech2: "ts",
      techName2: "TypeScript",
      tech3: "styled",
      techName3: "Styled-components",
    },
  ]

  const visibleProjects = showAll ? projects : projects.slice(0, 3)

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
        <div
          className="mt-14 flex justify-between flex-wrap max-w-[1216px] gap-y-8"
          id="cases"
        >
          {visibleProjects.map((project, index) => (
            <button key={index} onClick={openModal}>
              <ProjectCase
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                tech1={project.tech1}
                techName1={project.techName1}
                tech2={project.tech2}
                techName2={project.techName2}
                tech3={project.tech3}
                techName3={project.techName3}
              />
            </button>
          ))}
          {isModalOpen && <CasesModal closeModal={closeModal} />}
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="rounded-[4px] font-inter py-2 px-4 flex items-center gap-4 w-fit transition-all hover:scale-110 bg-transparent mx-auto mt-20 text-gray03 border-[1px] border-blue02"
        >
          {showAll ? "Mostrar menos" : "Mostrar mais"}
        </button>
      </div>
    </Container>
  )
}
