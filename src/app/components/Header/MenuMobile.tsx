import Image from "next/image"
import { ItemMenu } from "./ItemMenu"
import { LinkLang } from "./LinkLang"
import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"

export function MenuMobile() {
  const t = useTranslations("Header")
  const locale = useLocale()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex sm:hidden flex-col gap-10 absolute inset-0 top-20 text-center w-full h-fit py-8 bg-blue"
    >
      <ItemMenu className="text-gray01 hover:text-gray02" link="#cases">
        {t("projetos")}
      </ItemMenu>
      <ItemMenu className="text-gray01 hover:text-gray02" link="#quem-sou">
        {t("quem-sou")}
      </ItemMenu>
      <ItemMenu className="text-gray01 hover:text-gray02" link="#contato">
        {t("contato")}
      </ItemMenu>
      <div className="items-center gap-2 flex justify-center">
        <LinkLang className={`${locale === "pt" && "text-gray01"}`} link="pt">
          <Image
            src="/flag-brazil.svg"
            width={16}
            height={16}
            alt="Bandeira do Brasil"
          />
          PT
        </LinkLang>
        <span className="text-gray01">/</span>
        <LinkLang link="en" className={`${locale === "en" && "text-gray01"}`}>
          <Image
            src="/flag-eua.svg"
            width={16}
            height={16}
            alt="Bandeira dos EUA"
          />
          EN
        </LinkLang>
      </div>
    </motion.div>
  )
}
