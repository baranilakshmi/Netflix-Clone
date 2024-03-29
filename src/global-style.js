import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        outline: none;
    } 
    html,body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        height: 100%;
        color: #333333;
        font-size: 16px;
        margin: 0;
    }

`