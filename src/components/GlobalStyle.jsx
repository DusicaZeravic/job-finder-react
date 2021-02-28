import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-family: 'Libre Franklin', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #fafafa;
    } 

    #root {
        position: relative;
        min-height: 100vh;
    }
`

export default GlobalStyle;