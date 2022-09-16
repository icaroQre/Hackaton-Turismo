import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    
    @media (max-width: 999px){
        word-break: break-all;
        margin-left: 1vw;
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
    font-family: 'Montserrat', sans-serif;
    margin-top: 15px;
    
    @media (max-width: 999px){
        font-size: 0.8rem;
    }
`;