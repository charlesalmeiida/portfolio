"use client"

import { useEffect, useState } from "react"
import { Container } from "../GridContainer"
import { ProjectCase } from "./ProjectCase"
import { CasesModal } from "./CasesModal"
import { motion } from "framer-motion"
import projectData from "@/app/data/projectData.json"

interface Project {
  imageSrc: string
  imageAlt: string
  projectName: string
  projectImage: string
  projectDescription: string
  tech1: string
  techName1: string
  tech2: string
  techName2: string
  tech3: string
  techName3: string
  liveLink: string
  repoLink: string
}

export function Cases() {
  const [showAll, setShowAll] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  function disableScroll() {
    document.body.style.overflow = "hidden"
  }

  function enableScroll() {
    document.body.style.overflow = ""
  }

  useEffect(() => {
    if (isModalOpen) {
      disableScroll()
    } else {
      enableScroll()
    }

    return () => enableScroll()
  }, [isModalOpen])

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedProject(null)
  }

  const visibleProjects = showAll ? projectData : projectData.slice(0, 3)

  return (
    <Container>
      <div className="py-14 md:py-28" id="cases">
        <div className="mx-auto w-fit text-center space-y-2">
          <span className="font-poppins text-base text-gray03 tracking-widest">
            PROJETOS
          </span>
          <h2 className="font-poppins text-[40px] font-semibold text-gray03">
            Meus cases
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex justify-center md:justify-between gap-8 md:gap-y-8 md:gap-x-0 flex-wrap max-w-[1216px] "
        >
          {visibleProjects.map((project, index) => (
            <button key={index} onClick={() => openModal(project)}>
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
          {isModalOpen && selectedProject && (
            <CasesModal
              closeModal={closeModal}
              liveLink={selectedProject.liveLink}
              repoLink={selectedProject.repoLink}
              projectName={selectedProject.projectName}
              projectDescription={selectedProject.projectDescription}
              projectImage={selectedProject.projectImage}
            />
          )}
        </motion.div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="rounded-[4px] font-inter py-2 px-4 flex items-center gap-4 w-fit transition-all hover:scale-110 bg-transparent mx-auto mt-14 md:mt-20 text-gray03 border-[1px] border-blue02"
        >
          {showAll ? "Mostrar menos" : "Mostrar mais"}
        </button>
      </div>
    </Container>
  )
}
