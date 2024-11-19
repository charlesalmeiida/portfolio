import Image from "next/image"
import { Button } from "../Button/Button"
import { useTranslations } from "next-intl"

export function TextAbout() {
  const t = useTranslations("About")

  return (
    <div>
      <span className="text-gray03 font-inter text-lg font-semibold">
        {t("hi")}
      </span>
      <h2 className="font-poppins text-4xl md:text-[40px] font-semibold mt-4 text-gray03">
        Charles Almeida
      </h2>
      <h3 className="font-poppins text-lg font-semibold mt-2 text-gray03">
        {t("developer")}
      </h3>
      <p className="font-inter text-base text-gray03 max-w-lg opacity-80 mt-6">
        {t("description")}
      </p>
      <Button
        link="\Currículo Charles Almeida - Desenvolvedor Front-end.pdf"
        className="bg-transparent mt-8 text-gray03 border-[1px] border-blue02"
      >
        {t("download-cv")}
        <Image
          src="/icon-file.svg"
          width={16}
          height={16}
          alt="Logo de Arquivo para download"
        />
      </Button>
    </div>
  )
}
