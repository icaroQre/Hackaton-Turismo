import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 90px;
    
    @media (max-width: 999px){
        word-break: inherit;
        margin-left: 0.9vw;
    }
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 10vh;
    border-radius: 50%;
    background-color: whitesmoke;
    color: black;
`;

export const Place = styled.a`

    text-decoration: none;
    color: #263238;
    font-weight: 900;
    font-family: 'Maven Pro', sans-serif;
    margin-top: 15px;
`;