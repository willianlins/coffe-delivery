import { CoffeInfo } from "../../components/CoffeInfo";
import { WrapperCoffe, WrapperHomeItens, ContentInfoHome, ContainerList, ContentInfoLeft } from "./styles";

import BannerCoffe from '../../assets/Imagem_banner.svg';
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home() {
  return (
    <WrapperHomeItens>
      <ContentInfoHome>
        <ContentInfoLeft>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>Com o coffe Delivery você recebe onde estiver, a qualquer hora</p>
          <ul>
            <li>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </li>
            <li>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Estrega rápida e rastreada
            </li>
            <li>
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </li>
            <li>
              <span>
               <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você?
            </li>
          </ul>
        </ContentInfoLeft>
        <img src={BannerCoffe} alt="" />
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
