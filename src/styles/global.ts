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

  html {
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    white-space: nowrap;
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  /* 본문·레이아웃: 공백 단위 줄바꿈 허용 (한국어 keep-all 유지) */
  p,
  div,
  span,
  li,
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  main,
  section,
  article,
  aside,
  footer,
  header,
  nav,
  form,
  label,
  td,
  th,
  dd,
  dt,
  figcaption,
  blockquote,
  pre,
  textarea,
  input,
  button,
  a {
    white-space: normal;
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
    white-space: normal;
    word-break: keep-all;
    overflow-wrap: break-word;
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
