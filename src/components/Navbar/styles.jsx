import styled from 'styled-components';
import logo from '../images/logo.png'

export const Header = styled.div`
    height: 12vh;
    min-width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    background-color: white;
    z-index: 5;

    @media (min-width: 999px){
        justify-content: space-between;
    }
`;

export const Logo = styled.div`
    height: 10vh;
    width: 10vh;
    border-radius: 100px;
    overflow: hidden;
    background-image: url(${logo});
    background-size: 10vh;
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

export const Name = styled.p`

    .link{
        color: #101010;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: clamp(1vh + 0.5rem, 1rem + 2vh, 4vh);
        position: absolute;
        left: 10vw;
        top: 5vh;
        text-decoration: none;

        @media (min-width: 999px){
        position: static;
    }
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