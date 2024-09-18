import { Container } from "../GridContainer"
import { ProjectCase } from "./ProjectCase"

export function Cases() {
  return (
    <Container>
      <div className="py-28">
        <div className="mx-auto w-fit text-center space-y-2">
          <span className="font-poppins text-base text-gray03 tracking-widest">
            PROJETOS
          </span>
          <h2 className="font-poppins text-[40px] font-semibold text-gray03">
            Meus cases
          </h2>
        </div>
        <div className="mt-14">
          <ProjectCase />
        </div>
      </div>
    </Container>
  )
}
