import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 90px;
    padding-right: 3vw;
    transition: all 0.5s;

    :hover{
        transform: scale(125%);
    }
    
    @media (max-width: 999px){
        word-break: inherit;
        margin-left: 10vw;
    }
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 10vh;
    border-radius: 2rem;
    background-color: whitesmoke;
    color: black;
    overflow: hidden; 

    img {
        height: 10vh;
    }
`;

export const Place = styled.a`

    text-decoration: none;
    color: #263238;
    font-weight: 900;
    font-family: 'Maven Pro', sans-serif;
    margin-top: 15px;
    font-size: clamp(0.5rem, 1rem + 1vh, 2vh);
`;