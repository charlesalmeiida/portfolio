import Image from "next/image"
import { Container } from "../GridContainer"
import { ItemTech } from "./ItemTech"
import itemsTech from "@/app/data/itemsTech.json"

export function DivisorArea() {
  return (
    <div className="py-6 bg-blue">
      <Container>
        <div className="scroll-wrapper">
          <div className="scroll-animation scroll-content">
            {itemsTech.map((item, index) => (
              <ItemTech key={index}>
                <Image src={item.src} width={18} height={20} alt="LogoTech" />{" "}
                {item.text}
              </ItemTech>
            ))}
            {itemsTech.map((item, index) => (
              <ItemTech key={`duplicate-${index}`}>
                <Image src={item.src} width={18} height={20} alt="LogoTech" />{" "}
                {item.text}
              </ItemTech>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
