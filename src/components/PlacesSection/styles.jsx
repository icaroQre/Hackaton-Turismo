import styled from "styled-components";

export const Container = styled.div`
    background-color: teal;
    max-width: 65vw;
    margin-top: 200px;
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 999px){
              
        margin-top: 200px;
        max-width: 100vw;
    }
`;

export const Title = styled.p`
    color: black;
    font-family: 'Maven Pro', sans-serif;
    font-weight: bold;
    font-size: clamp(1vh + 0.5rem, 1rem + 1.7vh, 4vh);
    margin-top: 40px;
    display: none;
    
    @media(max-width: 999px){
        display: block;
        margin-top: 80px;
        margin-left: 5vw;
    }
`;

export const SwiperDiv = styled.div`

    display: none;

    @media (max-width: 999px){
        display: block;
        margin-top: 80px;
    }
`;

export const Fixed = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 65vw;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 999px){
        display: none;
    }
`;