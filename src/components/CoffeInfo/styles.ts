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
  position:relative;

  line-height: 130%;

  img{
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -115px;
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
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content:space-around;
  position: absolute;
  bottom: 0;
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  width: 16rem;

  span {
    margin-left: 1.2rem;
    margin-right: 0.9rem;
  }
  
  b{
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem
  }



  button{
    width: 2.375rem;
    height: 2.375rem;
    margin-right: 1.2rem;
    border-radius: 6px;

    background: ${props => props.theme['purple-900']};

    svg {
      color: ${props => props.theme['base-card-200']};
    }

    transition: background 0.2s;
    cursor: pointer;

  }
  button:hover{
    background: ${props => props.theme['purple-500']};
  }

`

export const CoffeInputNumber = styled.div`
  width: 4.5rem;
  height: 2.375rem; 
  border-radius: 6px;
  background-color: ${props => props.theme['base-button-400']};
  padding: 0 8px;

  input {
    width: 1.75rem;
    height: 2.375rem;
    border: 0;
    background: transparent;
    text-align:center;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  svg {
    color: ${props => props.theme['purple-900']};
    cursor: pointer;
    transition: background 0.2s;
  }

  svg:hover {
    color: ${props => props.theme['purple-500']};
  }
`
