import styled from "styled-components";

export const Btn = styled.button`

    color: black;
    font-family: 'Maven Pro', sans-serif;
    font-weight: bold;
    font-size: clamp(0.5vh + 0.5rem, 1rem + 1vh, 2vh);
    margin-bottom: 40px;
    border: none;
    border-radius: 1rem;
    padding: 6px 10px;
    background-color: whitesmoke;
    transition: all 0.5s;
    cursor: pointer;
    position: absolute;
    top: 40px;
    left: 20px;


    :hover{
        background-color: #1F75FE;
    }
`;