import Image from "next/image"
import { Container } from "../GridContainer"

export function Hero() {
  return (
    <Container>
      <div className="pt-20 pb-20 flex items-center justify-between">
        <div>
          <div className="space-y-6">
            <h5 className="text-gray03 text-base font-poppins tracking-wider">
              Olá, eu sou{" "}
              <strong className="font-semibold">Charles Almeida</strong>
              👋🏻
            </h5>
            <h1 className="text-6xl leading-tight font-poppins font-semibold max-w-md">
              Desenvolvedor Front-end
            </h1>
          </div>
          <p className="font-inter text-lg leading-normal mt-4 text-gray03 opacity-70 max-w-[520px]">
            Com formação em Sistemas de Informação e conhecimentos em UX e UI
            Design. Conhecimentos esses que combinados me permitem criar
            experiências digitais que são tanto esteticamente agradáveis quanto
            fáceis de usar.
          </p>
        </div>
        <div>
          <Image
            src="/hero-image.svg"
            width={593}
            height={494}
            alt="Ilustração da seção hero"
          />
        </div>
      </div>
    </Container>
  )
}
