import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    overflow-y: scroll;
  }
  button {
    padding: 0;
    font-family: 'Montserrat';
    border: none;
    outline: none;
    cursor: pointer;
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;