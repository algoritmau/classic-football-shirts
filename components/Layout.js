import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('./static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    --colorPrimaryBackground: #fefefe;
    --colorPrimaryForeground: #292929;
    --colorSecondaryForeground: #767676;
    
    --colorPrimaryGreenLight80: #d7e1d9;
    --colorPrimaryGreen: #396740;
    --colorPrimaryGreenMedium: #2b4e31;

    --colorBlack: #393939;
    --colorWhite: #FEFEFE;
    --colorOffWhite: #EDEDED;
    --colorRed: #FF0000;
    --colorGrey: #3a3a3a;
    --colorGray: var(--colorGrey);
    --colorLightGrey: #E1E1E1;
    --colorLightGray: var(--colorLightGrey);

    --maxWidth: 960px;
    --boxShadow: 0 12px 24px rgba(0, 0, 0, 0.09);
    --boxShadowHover: 0 12px 24px rgba(0, 0, 0, 0.2);

    --fontDisplay: 'radnika_next', sans-serif;
    --fontBodyCopy: 'radnika_next', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--colorWhite);
    color: var(--colorBlack);
    font-family: var(--fontBodyCopy), sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2;
    min-width: 36rem;
    min-height: 100vh;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--fontDisplay);
  }

  a {
    color: var(--colorBlack);
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      text-decoration: underline;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  *::selection {
    background-color: var(--colorBlack);
    color: var(--colorWhite);
  }

  /* Custom scrollbar styles */
  body::-webkit-scrollbar {
    inline-size: 8px;
    background: var(--colorBlack);
  }

  body::-webkit-scrollbar-track {
    inline-size: 8px;
    background: var(--colorBlack);
    border: 1px solid #08080840;
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: var(--colorRed);
    border: 1px solid #08080840;
  }
`

// Styles for the layout component's children
const MainStyles = styled.main`
  /* max-width: var(--maxWidth); */
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 4rem;
  margin: 0 auto;
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainStyles>{children}</MainStyles>
    </>
  )
}
