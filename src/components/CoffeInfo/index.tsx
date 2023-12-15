import { ShoppingCartSimple } from 'phosphor-react';
import { CoffeForm, CoffeSpanType, CoffeWrapper } from './styles';

import MocaccinoImg from '../../assets/coffe/Mocaccino.svg';

export function CoffeInfo() {
  return (
    <CoffeWrapper>
      <img src={MocaccinoImg} alt='Imagem de uma xicara de caffe mocaccino'/>
      <CoffeSpanType>Tradicional</CoffeSpanType>
      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <CoffeForm>
        <span>R$ 9,90</span>
        <input type="number" />
        <button>
          <ShoppingCartSimple size={22} />
        </button>
      </CoffeForm>
    </CoffeWrapper>
  )
}
