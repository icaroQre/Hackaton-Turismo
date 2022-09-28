import styled from "styled-components";
import logo from '../images/logo.png'

export const Container = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: start;
    border-radius: 2rem;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 100px;
    margin-bottom: 20px;
    background-color:#1F75FE;

    @media (max-width: 999px){  
      display: inline-flex;
      align-items: center;
      justify-content: space-around;
      max-width: 100%;
      width: 90vw;
    }
`;

export const img = styled.image`
    height: 10vh;
    width: 10vh;
    border-radius: 100px;
    overflow: hidden;
    background-image: url(${logo});
    background-size: 10vh;
    margin-left: 15vw;

    @media(max-width: 999px){
        height: 150px;
        width: 150px;
        background-size: 150px;
        margin-left: 5vw;
    }
`;

export const span1 = styled.a`
    margin-left:20px ;
    margin-bottom: 15px;
    font-size: 15px;
    opacity: 0.7;
    height: 5vh;
    width: 20vh;
    color: white;

    @media(max-width: 999px){   
        font-size: 20px;
        display: none;
    }

`;

export const Footer_Info = styled.ul`
    margin-left: 30vh;
    width: 50vw;
    list-style: none;
    display: flex ;
    align-items: center;
    justify-content: center;


    li{
        letter-spacing: 2px;
        margin-left: 30px;
    }

    .a{
        text-decoration: none;
        color: white;
        font-size: 15px;
        font-family: 'Maven Pro', sans-serif;
     
        transition: all 0.5s;

    }
    @media (max-width: 999px){  
        margin-left: 0vh;

        .a{
            margin-inline-start: 40px 40px;
            font-size: 20px;
        }
    }
`;
