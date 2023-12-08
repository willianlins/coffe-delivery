import { styled } from "styled-components";


export const CoffeWrapper = styled.section`
  width: 16rem;
  height: 19.375rem; 
  border-radius: 6px 36px;
  background: ${props => props.theme['base-card-200']};
  padding: 0 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  img{
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -70px;
  }
`
