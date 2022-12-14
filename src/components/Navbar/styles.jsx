import styled from 'styled-components';
import logo from '../images/logo-localize-preto.png'
import escrito from '../images/localize-escrito.png'

export const Header = styled.div`
    height: 12vh;
    min-width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: white;
    z-index: 5;

    @media (min-width: 999px){
        justify-content: space-between;
    }
`;

export const Logo = styled.div`
    height: 8vh;
    width: 8vh;
    border-radius: 100px;
    overflow: hidden;
    background-image: url(${logo});
    background-size: 8vh;
    background-repeat: no-repeat;
    margin-left: 10vw;

    @media(max-width: 999px){
        display: none;
    }
`;

export const NavList = styled.ul`

    list-style: none;
    display: flex ;
    align-items: center;
    justify-content: center;
    margin-right: 10vw;

    li{
        letter-spacing: 2px;
        margin-left: 30px;
    }

    .a{
        text-decoration: none;
        color: #263238;
        font-size: 1.2rem;
        font-family: 'Maven Pro', sans-serif;
        font-weight: 900;
        transition: all 0.5s;

        :hover{
            color: #fed300;
        }
    }

    @media (max-width: 999px){
        display: none;
    }
`;


export const Cadastrar = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;
    background-color: #1F75FE;
    border-radius: 25px;
    padding-left: 10px;
    padding-right: 10px;
    transition: all 0.5s;

    a{ 
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
        font-family: 'Maven Pro', sans-serif;
        font-weight: 900;
    }

    :hover{
        background-color: #fed300;
    }
`;

export const Logo2 = styled.div`
    height: 20vh;
    width: 20vh;
    border-radius: 100px;
    overflow: hidden;
    background-image: url(${escrito});
    background-size: 20vh;
    background-repeat: no-repeat;
    margin-left: 6vw;

    @media (max-width: 999px){
        position: absolute;
        top: 0px;
        left: 0px;
        height: 13vh;
        width: 13vh;
        background-size: 13vh;
    }
`;