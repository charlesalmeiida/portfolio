import Image from "next/image"
import { ItemMenu } from "./ItemMenu"
import { LinkLang } from "./LinkLang"

export function MenuMobile() {
  return (
    <div className="flex flex-col gap-10 absolute inset-0 top-20 text-center w-full h-fit py-8 bg-blue">
      <ItemMenu className="text-gray01 hover:text-gray02" link="#cases">
        Cases
      </ItemMenu>
      <ItemMenu className="text-gray01 hover:text-gray02" link="#quem-sou">
        Quem sou
      </ItemMenu>
      <ItemMenu className="text-gray01 hover:text-gray02" link="#contato">
        Contato
      </ItemMenu>
      <div className="items-center gap-2 flex justify-center">
        <LinkLang className="text-gray01" link="/">
          <Image
            src="/flag-brazil.svg"
            width={16}
            height={16}
            alt="Bandeira do Brasil"
          />
          PT
        </LinkLang>
        <span className="text-gray01">/</span>
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
    </div>
  )
}
