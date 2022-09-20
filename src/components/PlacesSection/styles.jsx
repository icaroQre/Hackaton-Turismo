import styled from "styled-components";

export const Container = styled.div`

    max-width: 65vw;
    margin-top: 160px;
    margin-bottom: 200px;
    max-width: 65vw;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 999px){
              
        margin-top: 350px;
        max-width: 100vw;
    }
`;

export const Title = styled.p`
    color: black;
    font-family: 'Maven Pro', sans-serif;
    font-weight: bold;
    font-size: clamp(1vh + 0.5rem, 1rem + 1.7vh, 4vh);
    
    @media(max-width: 999px){
        margin-left: 5vw;
    }
`;