"use client"

import Image from "next/image"
import { Container } from "../GridContainer"
import { Button } from "../Button/Button"
import Typed from "typed.js"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"

function MyComponent() {
  const el = useRef<HTMLSpanElement | null>(null)
  const locale = useLocale()

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          `${
            locale === "en" ? "Front-end Developer" : "Desenvolvedor Front-end"
          }`,
          `${locale === "en" ? "React Developer" : "Desenvolvedor React"}`,
          `${locale === "en" ? "Next.js Developer" : "Desenvolvedor Next.js"}`,
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
  const t = useTranslations("Hero")

  return (
    <main>
      <section>
        <Container>
          <div className="py-14 overflow-hidden md:py-20 flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <h5 className="text-gray03 text-base font-poppins tracking-wider">
                  {t("hello")}{" "}
                  <strong className="font-semibold">Charles Almeida</strong>
                  👋🏻
                </h5>
                <h1 className="text-5xl md:text-6xl leading-tight font-poppins font-semibold max-w-md">
                  <MyComponent />
                </h1>
              </div>
              <p className="font-inter text-base md:text-lg leading-normal mt-4 text-gray03 opacity-70 max-w-[520px]">
                {t("description")}
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="mt-10 md:mt-0"
            >
              <Image
                src="/hero-image.svg"
                width={593}
                height={494}
                alt="Ilustração da seção hero"
              />
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  )
}
