import Image from "next/image"
import { Container } from "../GridContainer"
import Link from "next/link"

interface CasesModalProps {
  closeModal: () => void
}

export function CasesModal({ closeModal }: CasesModalProps) {
  return (
    <Container>
      <div className="fixed pt-10 drop-shadow-2xl inset-0 h-fit mx-auto top-40 z-20 bg-white border-[1px] rounded-md border-[#DCDCDC] w-fit">
        <button
          onClick={() => closeModal()}
          className="absolute top-4 right-4 font-inter text-sm bg-blue text-gray01 px-2 rounded-full"
        >
          X
        </button>
        <Image
          src="/image-portfolio-lg.png"
          width={744}
          height={286}
          alt="Imagem do projeto Portfolio"
        />
        <h2 className="font-poppins font-semibold pl-4 text-2xl text-gray03 mt-6">
          Portfolio
        </h2>
        <p className="font-inter text-sm text-gray03 pl-4 mt-2 max-w-xl">
          Desenvolvi meu portfólio pessoal utilizando Next.js para garantir alto
          desempenho e otimização SEO, aproveitando recursos como renderização
          do lado do servidor e geração de sites estáticos. Para a estilização,
          utilizei Tailwind CSS, que me permitiu criar uma interface responsiva
          e atraente.
        </p>
        <div className="pl-4 space-x-4 mt-6 pb-6">
          <Link
            className="text-blue font-inter text-base font-medium underline"
            href="/"
          >
            Projeto online
          </Link>
          <Link
            className="font-inter text-base font-medium underline opacity-80 text-gray03"
            href="/"
          >
            Link para o repositório
          </Link>
        </div>
      </div>
    </Container>
  )
}
