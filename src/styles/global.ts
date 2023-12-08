import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
  }

  body{
    background: ${props => props.theme['background-100']};
    color: ${props=> props.theme['base-text-700']};
    -webkit-font-smoothing: antialiased;
  }

  button{
    border: 0;
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
