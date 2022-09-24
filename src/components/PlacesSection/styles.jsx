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
    margin-bottom: 40px;
    
    @media(max-width: 999px){
        margin-bottom: 80px;
        margin-left: 5vw;
    }
`;

export const SwiperDiv = styled.div`

    display: none;

    @media (max-width: 999px){
        display: block;
        margin-top: 200px;
    }
`;

export const Fixed = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    @media (max-width: 999px){
        display: none;
    }
`;

export const FixedContainer = styled.div`

    max-width: 65vw;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 999px){
        display: none;
    }
`;