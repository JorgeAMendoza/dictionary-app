import { createGlobalStyle } from 'styled-components';
import { Fonts } from '../context/font-context';
import InterFont from '../assets/fonts/inter/Inter-VariableFont_slnt,wght.ttf';
import InconsolataFont from '../assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.ttf';

interface GlobalStyleProps {
  font: Fonts;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  @font-face {
    font-family: 'Inter';
    src: url(${InterFont});
  }
  @font-face {
    font-family: 'Inconsolata';
    src: url(${InconsolataFont});
  }
  html {
    font-size: 62.5%;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
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
    color: ${({ theme }) => theme.mainText};
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

    &[type="search"]::-webkit-search-decoration,
    &[type="search"]::-webkit-search-cancel-button,
    &[type="search"]::-webkit-search-results-button,
    &[type="search"]::-webkit-search-results-decoration { display: none; }

  }
  ul,ol{
    list-style: none;
  }
  button{
    cursor: pointer;
    background-color: transparent;
    border: none;
    &:disabled{
      cursor: default;
    }
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
