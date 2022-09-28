import styled from "styled-components";
import Foto from "../../components/images/miguelzão.jpg"

export const Conteiner= styled.div`
    width: 30vw;
    height: 85vh;
    background-image: url(${Foto});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    transition: all 0.2s;
    border-radius: 2rem;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 60px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 50px;

    @media (max-width: 999px){
      height: 90vw;
      background-size: cover;
    }
`;

export const t1 = styled.h1`
 @import url('https://fonts.googleapis.com/css2?family=Abyssinica+SIL&display=swap');
   font-family: 'Abyssinica SIL', serif;
   margin-top: 60px;
   font-size: 60px;
   font-weight: bold;
   color: #3B4A85;
    
`;
export const t2 = styled.h1`
   margin-top: 60px;
   font-size: 25px;
   font-weight: 500;
   font-family: 'Maven Pro', sans-serif;
   @media (max-width: 999px){
      font-size: 30px;
    }
    
`;

export const tela = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    @media (max-width: 999px){
      margin-top: 10vw;
      background-size: cover;
    }
`;

export const texto = styled.div`
    flex-wrap: wrap;
    width: 50vw;
    height: 50vw;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 0px;
`;