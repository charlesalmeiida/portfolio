"use client"

import Image from "next/image"
import { Container } from "../GridContainer"
import { Button } from "../Button/Button"
import Typed from "typed.js"
import { useEffect, useRef } from "react"

function MyComponent() {
  const el = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "Desenvolvedor Front-end",
          "Desenvolvedor React",
          "Desenvolvedor Next.js",
        ],
        typeSpeed: 70,
        loop: true,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  return <span ref={el} />
}

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
              <MyComponent />
            </h1>
          </div>
          <p className="font-inter text-lg leading-normal mt-4 text-gray03 opacity-70 max-w-[520px]">
            Com formação em Sistemas de Informação e conhecimentos em UX e UI
            Design. Conhecimentos esses que combinados me permitem criar
            experiências digitais que são tanto esteticamente agradáveis quanto
            fáceis de usar.
          </p>
          <div className="flex items-center gap-6 mt-10">
            <Button
              link="https://github.com/charlesalmeiida"
              className="bg-blue text-gray01"
            >
              <Image
                src="/icon-github.svg"
                width={16}
                height={16}
                alt="Logo do GitHub"
              />
              GitHub
            </Button>
            <Button
              link="https://www.linkedin.com/in/charlesalmeiida"
              className="bg-transparent text-gray03 border-[1px] border-blue02"
            >
              <Image
                src="/icon-linkedin.svg"
                width={16}
                height={16}
                alt="Logo do LinkedIn"
              />
              LinkedIn
            </Button>
          </div>
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
