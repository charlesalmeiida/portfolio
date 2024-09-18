import Image from "next/image"
import { Container } from "../GridContainer"
import Link from "next/link"
import { ItemMenu } from "./ItemMenu"
import { LinkLang } from "./LinkLang"

export function Header() {
  return (
    <header className="drop-shadow-lg bg-white sticky top-0">
      <Container className="flex justify-between py-8">
        <div>
          <Link href="#">
            <Image src="/logo.svg" width={168} height={29} alt="Logo" />
          </Link>
        </div>
        <nav className="font-inter flex gap-12">
          <ItemMenu link="#cases">Cases</ItemMenu>
          <ItemMenu link="#cases">Quem sou</ItemMenu>
          <ItemMenu link="#contato">Contato</ItemMenu>
          <span>|</span>
          <div className="flex items-center gap-2">
            <LinkLang link="/">
              <Image
                src="/flag-brazil.svg"
                width={16}
                height={16}
                alt="Bandeira do Brasil"
              />
              PT
            </LinkLang>
            <span>/</span>
            <LinkLang
              link="/"
              className="text-gray02 transition-all hover:text-gray03"
            >
              <Image
                src="/flag-eua.svg"
                width={16}
                height={16}
                alt="Bandeira dos EUA"
              />
              EN
            </LinkLang>
          </div>
        </nav>
      </Container>
    </header>
  )
}
