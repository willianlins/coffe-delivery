import { ShoppingCartSimple } from 'phosphor-react';
import { CoffeWrapper } from './estyles';

import MocaccinoImg from '../../assets/coffe/Mocaccino.svg';

export function CoffeInfo() {
  return (
    <CoffeWrapper>
      <img src={MocaccinoImg} alt='Imagem de uma xicara de caffe mocaccino'/>
      <span>Tradicional</span>
      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <form>
        <span>R$ 9,90</span>
        <input type="number" />
        <button>
          <ShoppingCartSimple size={22} />
        </button>
      </form>
    </CoffeWrapper>
  )
}
