import { styled } from "styled-components";


import imgBackground from '../../assets/Background.svg';


export const WrapperHomeItens = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 6.25rem;
`
export const ContentInfoHome = styled.div`
  background-image: url(${imgBackground});
  background-size: cover;
  background-position: center;
  width: calc(100vw - 20px);
  height: 544px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentInfoLeft = styled.div`

  
  ul{
    list-style: none;
  } 
`;
export const ContainerList = styled.div`
  width: 70rem;
  
  h1{
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle-800']};
    margin: 32px 0 54px 0;  
  }

`;

export const WrapperCoffe = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.125rem;


`;
