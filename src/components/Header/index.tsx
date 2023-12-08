import { MapPin, ShoppingCart } from "phosphor-react";

import { ButtonHeaderCart, ButtonHeaderCity, HeaderContainer } from "./styles";

import LogoCoffeDelivery from '../../assets/Logo-coffe-delivery.svg';


export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeDelivery} alt="" />
      <div>
        <ButtonHeaderCity>
          <MapPin size={22} weight="fill"/>
          Jundiaí, SP
        </ButtonHeaderCity>
        <ButtonHeaderCart>
          <ShoppingCart size={22} weight="fill"/>
          <span>2</span>
        </ButtonHeaderCart>
      </div>
    </HeaderContainer>
  )

}
