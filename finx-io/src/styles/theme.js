import { createGlobalStyle, css } from 'styled-components'

const MEDIA_WIDTHS = {
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  accumulator[size] = (...args) => css`
    @media (max-width: ${MEDIA_WIDTHS[size]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

const white = '#FFFFFF'
const black = '#000000'

export const theme = darkMode => ({
  white,
  black,
  textColor: darkMode ? white : '#010101',
  invertedTextColor: darkMode ? '#010101' : white,
  greyText: darkMode ? white : '#6C7284',
  buttonBorder: darkMode ? `#B6E2EA` : '#506366',

  heroBG: darkMode
    ? 'radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%)'
    : 'radial-gradient(76.02% 75.41% at 1.84% 0%, #FF3696 0%, #FFD8EB 100%);',
  gradientBG: darkMode
    ? 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 31.19%, rgba(0, 0, 0, 0) 100%)'
    : 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 31.19%, rgba(0, 0, 0, 0) 100%)',
  invertImage: darkMode ? 'filter: invert(0);' : 'filter: invert(1);',

  // for setting css on <html>
  backgroundColor: darkMode ? '#0f1013' : '#F7F8FA',

  modalBackground: darkMode ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.5)',
  cardBG: darkMode ? 'rgba(0, 0, 0, .5)' : 'rgba(255, 255, 255, .5)',
  menuBG: darkMode ? 'black' : 'white',
  marqueeBG: darkMode ? '#010101' : '#010101',

  inputBackground: darkMode ? '#202124' : white,
  placeholderGray: darkMode ? '#5F5F5F' : '#E1E1E1',
  shadowColor: darkMode ? '#000' : '#6ED4E6',

  // grays
  concreteGray: darkMode ? '#292C2F' : '#FAFAFA',
  mercuryGray: darkMode ? '#333333' : '#E1E1E1',
  silverGray: darkMode ? '#737373' : '#C4C4C4',
  chaliceGray: darkMode ? '#7B7B7B' : '#AEAEAE',
  doveGray: darkMode ? '#C4C4C4' : '#737373',

  colors: {
    blue1: darkMode ? '#6ED4E6' : '#B6E2EA',
    blue2: darkMode ? '#56A5B3' : '#6ED4E6',
    blue3: darkMode ? '#165BBB' : '#7DACF0',
    blue4: darkMode ? '#2D47A6' : '#5190EB',
    blue5: darkMode ? '#C4D9F8' : '#2172E5',
    blue6: darkMode ? '#C4D9F8' : '#1A5BB6',
    blue7: darkMode ? '#C4D9F8' : '#144489',
    blue8: darkMode ? '#C4D9F8' : '#0E2F5E',
    blue9: darkMode ? '#C4D9F8' : '#191B1F',

    // grey1: darkMode ? '#191B1F' : '#F7F8FA',
    // grey2: darkMode ? '#2C2F36' : '#EDEEF2',
    // grey3: darkMode ? '#40444F' : '#CED0D9',
    // grey4: darkMode ? '#565A69' : '#888D9B',
    // grey5: darkMode ? '#6C7284' : '#6C7284',
    grey6: darkMode ? '#888D9B' : '#565A69',
    grey7: darkMode ? '#CED0D9' : '#40444F',
    grey8: darkMode ? '#EDEEF2' : '#2C2F36',
    grey9: darkMode ? '#F7F8FA' : '#191B1F',

    grey1: darkMode ? '#212429' : '#FFFFFF',
    grey2: darkMode ? '#2C2F36' : '#F7F8FA',
    grey3: darkMode ? '#40444F' : '#EDEEF2',
    grey4: darkMode ? '#565A69' : '#CED0D9',
    grey5: darkMode ? '#6C7284' : '#888D9B',

    white: '#FFFFFF',
    black: '#000000',

    green1: '#B6E657',
    green2: '#74992B',

    // pink1: darkMode ? '#2F80ED' : '#FF007A',
    // pink2: '#FF8EC4',
    // pink3: '#FFD7EA',

    pink1: darkMode ? '#6ED4E6' : '#D3FF7A',
    pink2: '#74992B',
    pink3: '#B6E657',

    yellow1: darkMode ? '#6ED4E6' : '#6ED4E6',
    yellow2: darkMode ? '#E6914C' : '#E6914C',

    red1: '#FF6871',

    // link: darkMode ? '#2F80ED' : '#FF007A',
    // invertedLink: darkMode ? '#2F80ED' : '#FF007A'
    invertedLink: darkMode ? '#7A1C99' : '#74992B',
    link: darkMode ? '#74992B' : '#7A1C99'
  },

  shadows: {
    small: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    large: '0px 6px 10px rgba(0, 0, 0, 0.15)',
    huge:
      ' 0px 0px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 16px 24px rgba(0, 0, 0, 0.02), 0px 24px 32px rgba(0, 0, 0, 0.02)'
  },

  // media queries
  mediaWidth: mediaWidthTemplates,
  // css snippets
  flexColumnNoWrap: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  flexRowNoWrap: css`
    display: flex;
    flex-flow: row nowrap;
  `
})

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  
  
    html {
    font-family: Lato;  
    font-size: 16px;
    font-variant: none;
    background-color: ${({ theme }) => theme.backgroundColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    overflow-y: scroll;
    width: 100%;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;

    line-height: 1.55;
    /* max-width: 1440px; */
    width: 100%;
    margin: 0px auto;
    font-weight: 400 !important;
    color: ${({ theme }) => theme.textColor};

    
    @media (min-width: 1441px) {
        overflow-x: visible;
    }
  }

  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }

  .title{
    letter-spacing: -0.05em;
    font-family: Lato;
    font-size: 72px;
  }

  h1 {
    font-family: Lato;
    margin-top: 1.75rem ;
    font-size: 1.875rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    font-family: Lato;  }

  h3 {
    font-weight: 400;
    font-family: Lato;  }



  #gatsby-focus-wrapper{
    min-height: 100vh;
    width: 100%;
    position: relative;
  }
  a{
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }
  button{
    color: ${({ theme }) => theme.textColor};
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  strong{
    font-weight: bold;
    color: ${({ theme }) => theme.colors.grey9};
  }

 .ds-dropdown-menu {
    width: 100px;
    max-height: 600px;
    overflow: scroll;

    @media screen and (max-width: 1080px) {
      min-width: 300px !important;
    }
  }
`
