import { About } from "./components/About/About"
import { Cases } from "./components/Cases/Cases"
import { DivisorArea } from "./components/DivisorAnimated/DivisorArea"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <DivisorArea />
      <Cases />
      <About />
    </>
  )
}
