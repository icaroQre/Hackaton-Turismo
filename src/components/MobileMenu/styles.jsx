import styled, { css } from "styled-components";

export const Menu = styled.div`

    display: none;
    cursor: pointer;

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

    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    position: absolute;
    top: 12vh;
    right: 0;
    width: 50vw;
    min-height: 88vh;
    background-color: whitesmoke;
    margin: 0;
    z-index: 5;
    opacity: 0;
    pointer-events: none;
    transform: translateX(100%);
    transition: 0.5s;

    li {
        margin-left: 0;
        letter-spacing: 3px;
    }

    a{
        text-decoration: none;
        color: 
        #263238;
        font-size: 1.2rem;
        font-family: 'Maven Pro', sans-serif;
    }

    ${({ visible }) => visible && css `
        display: flex ;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0);
        backdrop-filter: blur(80%);
    `}
`;