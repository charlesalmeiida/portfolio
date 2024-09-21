"use client"

import Image from "next/image"
import { Container } from "../GridContainer"
import Link from "next/link"
import { ItemMenu } from "./ItemMenu"
import { LinkLang } from "./LinkLang"
import { useState } from "react"
import { MenuMobile } from "./MenuMobile"
import Hamburger from "hamburger-react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="drop-shadow-lg bg-white sticky top-0 z-10" id="home">
      <Container className="flex justify-between py-8">
        <div className="flex items-center justify-between w-full sm:w-fit sm:block ">
          <Link href="#home">
            <Image src="/logo.svg" width={168} height={29} alt="Logo" />
          </Link>
          <div className="sm:hidden">
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
          </div>
        </div>
        <nav className="font-inter flex gap-12">
          {menuOpen && <MenuMobile />}
          <div className="sm:flex gap-8 md:gap-12 hidden">
            <ItemMenu className="text-gray03 hover:text-gray02" link="#cases">
              Cases
            </ItemMenu>
            <ItemMenu
              className="text-gray03 hover:text-gray02"
              link="#quem-sou"
            >
              Quem sou
            </ItemMenu>
            <ItemMenu className="text-gray03 hover:text-gray02" link="#contato">
              Contato
            </ItemMenu>
          </div>
          <span className="hidden md:block">|</span>
          <div className="sm:flex items-center gap-2 hidden">
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
