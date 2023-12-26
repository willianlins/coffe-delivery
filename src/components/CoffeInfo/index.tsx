import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';
import { CoffeForm, CoffeInputNumber, CoffeSpanType, CoffeWrapper } from './styles';

import MocaccinoImg from '../../assets/coffe/Mocaccino.svg';

export function CoffeInfo() {
  return (
    <CoffeWrapper>
      <img src={MocaccinoImg} alt='Imagem de uma xicara de caffe mocaccino' />
      <CoffeSpanType>Tradicional</CoffeSpanType>
      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <CoffeForm>
        <span>R$ <b>9,90</b></span>
        <CoffeInputNumber>
          <Minus  size={14}  />
          <input type="number" value={1} />
          <Plus size={14} />
        </CoffeInputNumber>
        <button>
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </CoffeForm>
    </CoffeWrapper>
  )
}
