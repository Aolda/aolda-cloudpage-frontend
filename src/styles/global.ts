import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  html[data-theme='light'] {
    color-scheme: light;
  }

  html[data-theme='dark'] {
    color-scheme: dark;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }
`;


