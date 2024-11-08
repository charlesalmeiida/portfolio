import Image from "next/image"
import { Container } from "../GridContainer"
import Link from "next/link"

interface CasesModalProps {
  closeModal: () => void
  liveLink: string
  repoLink: string
  projectName: string
  projectDescription: string
  projectImage: string
}

export function CasesModal({
  closeModal,
  liveLink,
  repoLink,
  projectName,
  projectDescription,
  projectImage,
}: CasesModalProps) {
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <Container>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={handleOverlayClick}
      ></div>
      <div className="hidden md:block">
        <div>
          <div className="fixed mx-2 pt-10 drop-shadow-2xl inset-0 h-fit md:mx-auto top-20 z-20 bg-white border-[1px] rounded-md border-[#DCDCDC] w-fit">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 font-inter text-sm bg-blue text-gray01 px-2 rounded-full"
            >
              X
            </button>
            <Image
              src={`/image-${projectImage}-lg.png`}
              width={744}
              height={286}
              alt={`Imagem do projeto ${projectName}`}
            />
            <h2 className="font-poppins font-semibold pl-4 text-2xl text-gray03 mt-6">
              {projectName}
            </h2>
            <p className="font-inter text-sm text-gray03 pl-4 mt-2 max-w-xl">
              {projectDescription}
            </p>
            <div className="pl-4 space-x-4 mt-6 pb-6">
              <Link
                className="text-blue font-inter text-base font-medium underline"
                href={liveLink}
                target="_blank"
              >
                Projeto online
              </Link>
              <Link
                className="font-inter text-base font-medium underline opacity-80 text-gray03"
                href={repoLink}
                target="_blank"
              >
                Link para o repositório
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="fixed mx-2 pt-10 drop-shadow-2xl inset-0 h-fit md:mx-auto top-40 z-20 bg-white border-[1px] rounded-md border-[#DCDCDC] w-fit">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 font-inter text-sm bg-blue text-gray01 px-2 rounded-full"
          >
            X
          </button>
          <Image
            src={`/image-${projectImage}-lg.png`}
            width={744}
            height={286}
            alt={`Imagem do projeto ${projectName}`}
          />
          <h2 className="font-poppins font-semibold pl-4 text-2xl text-gray03 mt-6">
            {projectName}
          </h2>
          <p className="font-inter text-sm text-gray03 pl-4 mt-2 max-w-xl">
            {projectDescription}
          </p>
          <div className="pl-4 space-x-4 mt-6 pb-6">
            <Link
              className="text-blue font-inter text-base font-medium underline"
              href={liveLink}
              target="_blank"
            >
              Projeto online
            </Link>
            <Link
              className="font-inter text-base font-medium underline opacity-80 text-gray03"
              href={repoLink}
              target="_blank"
            >
              Link para o repositório
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
