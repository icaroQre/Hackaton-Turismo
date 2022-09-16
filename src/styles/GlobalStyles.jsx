import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        text-decoration: 0;
        background-color: white;
        overflow-x: hidden;
        max-width: 100vw;
        font-family: 'Maven Pro', sans-serif;
        font-weight: 500;
    }
`;

export default GlobalStyles;