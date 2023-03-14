import { createGlobalStyle } from 'styled-components';
import { Fonts } from '../context/font-context';

interface GlobalStyleProps {
  font: Fonts;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    line-height: 1.4;
    z-index:1;
  }
  body{
    font-family: ${({ font }) =>
      font === 'mono'
        ? 'monospace'
        : font === 'sans-serif'
        ? 'sans-serif'
        : 'serif'}, serif;
    font-size: 1.6rem;
    min-height: 100vh;
    position:relative;
    background-color: ${({ theme }) => theme.background};
    color: var(--white);
    padding-bottom:3rem;
  } 
  img,svg {
    max-width: 100%;
    display: block;
  }
  a{
    color:white;
  }
  input {
    font-family: inherit;
    border: none;
  }
  ul,ol{
    list-style: none;
  }
  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  #root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyle;
