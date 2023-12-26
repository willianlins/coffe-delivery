import { CoffeInfo } from "../../components/CoffeInfo";
import { WrapperCoffe, WrapperHomeItens, ContentInfoHome, ContainerList } from "./styles";

export function Home() {
  return (
    <WrapperHomeItens>
      <ContentInfoHome>

      </ContentInfoHome>

      <ContainerList>
        <h1>Nossos cafés</h1>


        <WrapperCoffe>

          <CoffeInfo />
          <CoffeInfo />
          <CoffeInfo />
          <CoffeInfo />
          <CoffeInfo />
          <CoffeInfo />
          <CoffeInfo />
          <CoffeInfo />
        </WrapperCoffe>
      </ContainerList>
    </WrapperHomeItens>
  )
}
