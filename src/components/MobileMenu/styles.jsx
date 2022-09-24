import styled, { css } from "styled-components";

export const Menu = styled.div`

    display: none;
    cursor: pointer;
    margin-right: 10vw;

    div{
        width: 30px;
        height: 5px;
        background-color: #263238;
        margin: 5px;
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
    min-height: 88vh;
    background-color: whitesmoke;
    margin: 0;
    z-index: 5;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
    overflow-x: hidden;

    li {
        margin-left: 0;
        letter-spacing: 3px;
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
        width: 50vw;
    `}
`;