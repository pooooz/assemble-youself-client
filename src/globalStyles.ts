import { createGlobalStyle } from 'styled-components';

const FULL = 100;

const DEFAULT_FONT_WEIGHT = 500;

export const GlobalStyles = createGlobalStyle`
  html {
    height: ${FULL}%;
  }
  
  body {
    height: ${FULL}%;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
  }

  * {
    font-family: Roboto, sans-serif;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${DEFAULT_FONT_WEIGHT};
    padding: 0;
    margin: 0;
  }
  
  #root {
    height: ${FULL}%;
    display: flex;
    flex-direction: column;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;
