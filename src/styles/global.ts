import {
  GlobalStyleComponent,
  css,
  createGlobalStyle,
  DefaultTheme,
} from 'styled-components';

export const GlobalStyles = createGlobalStyle<DefaultTheme>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    &::before,
    &::after{
      box-sizing: inherit;
    }
  }

  html, body {
    height: 100%;
  }

  button {
    cursor: pointer;
    border: 0;
    background: transparent;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
  `}
`;
