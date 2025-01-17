import Link from "next/link"
import { Container } from "../GridContainer"
import { ItemMenu } from "../Header/ItemMenu"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("Header")

  return (
    <footer className="pt-14 md:pt-20 pb-4 bg-blue02" id="contato">
      <Container>
        <div className="flex-col flex items-center md:text-left text-center gap-6 md:flex-row justify-between">
          <div>
            <h2 className="font-poppins text-3xl font-semibold text-gray01">
              {t("email")}
            </h2>
            <Link
              href="mailto:charles.almeida@arapiraca.ufal.br"
              className="font-poppins text-gray01 text-xl underline mt-6 block"
            >
              charles.almeida@arapiraca.ufal.br
            </Link>
          </div>
          <div className="flex flex-col items-end gap-14">
            <nav className="space-x-8">
              <ItemMenu link="#case" className="text-gray01  hover:text-gray02">
                {t("projetos")}
              </ItemMenu>
              <ItemMenu
                className="text-gray01 hover:text-gray02"
                link="#quem-sou"
              >
                {t("quem-sou")}
              </ItemMenu>
              <ItemMenu
                className="text-gray01  hover:text-gray02"
                link="#contato"
              >
                {t("contato")}
              </ItemMenu>
            </nav>
            <div className="flex gap-14 mx-auto md:mx-0">
              <Link
                href="https://linkedin.com/in/charlesalmeiida"
                target="_blank"
              >
                <Image
                  src="/icon-linkedin-white.svg"
                  width={20}
                  height={20}
                  alt="Ícone do Linkedin"
                />
              </Link>
              <Link href="https://github.com/charlesalmeiida" target="_blank">
                <Image
                  src="/icon-github.svg"
                  width={20}
                  height={20}
                  alt="Ícone do GitHub"
                />
              </Link>
            </div>
          </div>
        </div>
        <span className="block mt-14 mx-auto w-fit font-inter text-sm text-gray01 opacity-80">
          {t("developed")}
          <Link
            className="underline mx-1"
            href="https://github.com/charlesalmeiida"
            target="_blank"
          >
            Charles
          </Link>
          © 2024
        </span>
      </Container>
    </footer>
  )
}
