import styled from 'styled-components';

export const Header = styled.div`
    height: 12vh;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    z-index: 5;
`;

export const Logo = styled.div`
    height: 7vh;
    width: 7vh;
    background-color: blue;
    border-radius: 50px;
`;

export const NavList = styled.ul`

    list-style: none;
    display: flex ;
    align-items: center;
    justify-content: center;

    li{
        letter-spacing: 2px;
        margin-left: 32px ;
    }

    a{
        text-decoration: none;
        color: #263238;
        font-size: 1.2rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
    }

    @media (max-width: 999px){
        display: none;
    }
`;

export const Name = styled.p`
    color: #101010;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 25px;

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

    a{ 
        color: white;
    }
`;