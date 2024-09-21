import Image from "next/image"
import { Button } from "../Button/Button"

export function TextAbout() {
  return (
    <div>
      <span className="text-gray03 font-inter text-lg font-semibold">
        Olá, prazer 👋🏻
      </span>
      <h2 className="font-poppins text-4xl md:text-[40px] font-semibold mt-4 text-gray03">
        Charles Almeida
      </h2>
      <h3 className="font-poppins text-lg font-semibold text-gray03">
        Desenvolvedor Front-end
      </h3>
      <p className="font-inter text-base text-gray03 max-w-lg opacity-80 mt-6">
        Um profissional dedicado com bacharelado em Sistemas de Informação pela
        Universidade Federal de Alagoas. Como desenvolvedor Front-end, trago
        experiência na criação de interfaces intuitivas, ao unir os
        conhecimentos de Design Visual e Design de Experiência do Usuário (UX
        Design). Comprometido em fornecer código de qualidade e solucionar
        problemas.
      </p>
      <Button
        link="/Currículo - Charles Almeida.pdf"
        className="bg-transparent mt-8 text-gray03 border-[1px] border-blue02"
      >
        Baixar CV
        <Image
          src="/icon-file.svg"
          width={16}
          height={16}
          alt="Logo de Arquivo para download"
        />
      </Button>
    </div>
  )
}
