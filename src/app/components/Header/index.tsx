import Image from "next/image"
import { Container } from "../GridContainer"
import Link from "next/link"
import { ItemMenu } from "./ItemMenu"

export function Header() {
  return (
    <header className="drop-shadow-lg bg-white">
      <Container className="flex justify-between py-8">
        <div>
          <Link href="#">
            <Image src="/logo.svg" width={168} height={29} alt="Logo" />
          </Link>
        </div>
        <nav className="font-inter flex gap-12">
          <ItemMenu link="#cases">Cases</ItemMenu>
          <ItemMenu link="#cases">Quem sou</ItemMenu>
          <ItemMenu link="#cases">Contato</ItemMenu>
          <span>|</span>
        </nav>
      </Container>
    </header>
  )
}
