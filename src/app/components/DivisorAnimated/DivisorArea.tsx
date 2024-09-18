import Image from "next/image"
import { Container } from "../GridContainer"
import { ItemTech } from "./ItemTech"

const ItemsTech = [
  {
    src: "/logo-html.svg",
    text: "HTML5",
  },
  {
    src: "/logo-css.svg",
    text: "CSS3",
  },
  {
    src: "/logo-js.svg",
    text: "JavaScript",
  },
  {
    src: "/logo-ts.svg",
    text: "TypeScript",
  },
  {
    src: "/logo-scss.svg",
    text: "Sass",
  },
  {
    src: "/logo-react.svg",
    text: "ReactJS",
  },
  {
    src: "/logo-next.svg",
    text: "NextJS",
  },
  {
    src: "/logo-tailwind.svg",
    text: "Tailwind",
  },
  {
    src: "/logo-vite.svg",
    text: "Vite",
  },
  {
    src: "/logo-styled.svg",
    text: "Styled",
  },
  {
    src: "/logo-bootstrap.svg",
    text: "Bootstrap",
  },
]

export function DivisorArea() {
  return (
    <div className="py-6 bg-blue">
      <Container>
        <div className="scroll-wrapper">
          <div className="scroll-animation scroll-content">
            {/* Renderiza os itens duas vezes para rolagem contínua */}
            {ItemsTech.map((item, index) => (
              <ItemTech key={index}>
                <Image src={item.src} width={18} height={20} alt="LogoTech" />{" "}
                {item.text}
              </ItemTech>
            ))}
            {ItemsTech.map((item, index) => (
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
