import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@300&display=swap');
        margin: 0;
        padding: 0;
        text-decoration: 0;
        background-color: white;
        max-width: 100vw;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        overflow-x: hidden;
    }
`;

export default GlobalStyles;