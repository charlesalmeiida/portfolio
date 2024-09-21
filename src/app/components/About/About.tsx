import { Container } from "../GridContainer"
import { TagTechAbout } from "./TagTechAbout"
import { TextAbout } from "./TextAbout"

export function About() {
  return (
    <Container>
      <div
        className="pb-20 flex flex-col items-center gap-8 md:gap-0 md:flex-row justify-between"
        id="quem-sou"
      >
        <TextAbout />
        <div className="flex flex-wrap max-w-[460px] gap-2">
          <TagTechAbout techName="html" tech="HTML5" />
          <TagTechAbout techName="css" tech="CSS3" />
          <TagTechAbout techName="js" tech="JavaScript" />
          <TagTechAbout techName="ts" tech="TypeScript" />
          <TagTechAbout techName="tailwind" tech="Tailwind" />
          <TagTechAbout techName="bootstrap" tech="Bootstrap" />
          <TagTechAbout techName="next" tech="Next.js" />
          <TagTechAbout techName="react" tech="React" />
          <TagTechAbout techName="vite" tech="Vite" />
          <TagTechAbout techName="scss" tech="SCSS" />
          <TagTechAbout techName="styled" tech="Styled-components" />
        </div>
      </div>
    </Container>
  )
}
