import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    transition: transform 0.4s ease, opacity 0.4s ease;
  } 
  
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.color.backgroundPrimary};
    color: ${({ theme }) => theme.color.primary};
    font-family: 'Roboto', serif;
  }
  
  button, input {
    border: none;
    color: transparent;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul, ol {
    padding: 0;
    margin: 0;
  }
  
  p {
    margin: 0;
    padding: 0;
  }

`

export default Global
