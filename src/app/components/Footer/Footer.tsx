import Link from "next/link"
import { Container } from "../GridContainer"
import { ItemMenu } from "../Header/ItemMenu"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="pt-20 pb-4 bg-blue02">
      <Container>
        <div className="flex justify-between">
          <div>
            <h2 className="font-poppins text-3xl font-semibold text-gray01">
              Entre em contato:
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
                Cases
              </ItemMenu>
              <ItemMenu
                className="text-gray01 hover:text-gray02"
                link="#quem-sou"
              >
                Quem sou
              </ItemMenu>
              <ItemMenu
                className="text-gray01  hover:text-gray02"
                link="#contato"
              >
                Contato
              </ItemMenu>
            </nav>
            <div className="flex gap-14">
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
          Desenvolvido por
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
