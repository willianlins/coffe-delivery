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

  line-height: 130%;

  img{
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -70px;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    
    color: ${props => props.theme['base-subtitle-800']};
  }

  p{
    color: ${props => props.theme['base-label-600']};
    font-size: 0.875rem;
    text-align: center;
  }
`

export const CoffeSpanType = styled.span`
  background: ${props => props.theme['yellow-100']};
  border-radius: 100px;
  padding: 4px 8px;
  font-size: 0.625rem;
  font-weight: 700;

  text-transform: uppercase;
  color: ${props => props.theme['yellow-900']};
  margin: 0.75rem 0 1rem 0;
`

export const CoffeForm = styled.form`


`
