import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    scrollbar-gutter: stable;
  } 
  body {
    font-family: Lexend Deca, sans-serif;
    position: relative;
  }

  @media (max-width: 768px) {
    :root {
      font-size: 8px;
    }
  }
`;
