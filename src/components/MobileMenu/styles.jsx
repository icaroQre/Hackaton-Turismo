import styled, { css } from "styled-components";

export const Menu = styled.div`

    display: none;
    cursor: pointer;
    position: absolute;
    right: 10vw;
    top: 5vh;

    div{
        width: 40px;
        height: 8px;
        background-color: #263238;
        margin: 8px;
        border-radius: 25px;
    }

    @media (max-width: 999px){
        display: block;

    }
`;

export const MenuList = styled.ul`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    position: absolute;
    top: calc(12vh + 30px);
    right: 0;
    width: 0;
    min-height: 58vh;
    background-color: whitesmoke;
    margin: 0;
    z-index: 5;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
    overflow-x: hidden;
    padding-bottom: 30vh;

    .menuMobileHover{

        transition: all 0.5s;
        width: 100%;

        :hover{
            background-color: lightgray;
        }
    }

    div {
        margin-left: 0;
        letter-spacing: 1.5px;
        height: 10vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a{
        text-decoration: none;
        color: 
        #263238;
        font-size: clamp(0.5rem, 1rem + 1vh, 2vh);
        font-family: 'Maven Pro', sans-serif;
        font-weight: bold;
    }

    ${({ visible }) => visible && css `
        display: flex ;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        opacity: 1;
        pointer-events: auto;
        width: 45vw;
    `}
`;