// @flow
import { createGlobalStyle } from 'styled-components'
import { typography, colors } from 'constants'

export default createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    font-size: ${typography.baseFontSize};
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    appearance: none;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    line-height: 1.4em;
    background-color: ${colors.white};
    color: ${colors.shadeDark};
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    height: 100vh;
    box-sizing: border-box;
    padding: 30px;
    border: 20px solid ${colors.shadeAlpha};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
`
