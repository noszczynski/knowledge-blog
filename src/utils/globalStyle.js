import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
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
    
  }
  
  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  p {
    margin: 0;
    padding: 0;
  }

`

export default Global
