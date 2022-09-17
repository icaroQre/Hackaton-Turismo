
import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin-top: 10vh;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
    gap: 10px;
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
    border-radius: 10px;
    padding: 10px 15px;
    font-size: clamp(0.5rem, 1rem + 1vh, 1.5vh);
    font: "Montserrat";
    font-weight: bold;
    color: #363636;
    outline: none;
    border: solid #E0E0E0 2px;
    margin-bottom: 50px;
    box-shadow: 1px 3px 4px 2px #ccc;
    height: 2vh;
    width: 15vw;

    @media(max-width: 999px){
        height: 2vh;
        width: 40vw;
    }
`;

export const Label = styled.label`
    color: #363636;
    font-family: 'Maven Pro', sans-serif;
    font-weight: bold;
    margin-bottom: 1.8vh;
    font-size: clamp(0.5rem, 1rem + 1vh, 2.8vh);
`;

export const ButtonLogin = styled.button`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(0.5rem, 1rem + 1vh, 3vh);
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #1F75FE;
    color: white;
    box-shadow: 1px 3px 4px 2px #ccc;
    text-shadow: 1px 1px 1px #ccc;
    transition: all ease 0.05s;
    margin-bottom: 1.5vh;
    font-family: 'Maven Pro', sans-serif;
    height: 4vh;
    width: 10vw;

    &:active{
        box-shadow: 0px 0px 0px 0px #ccc, inset 1px 3px 4px 2px #ccc;
        transform: translate(3px,3px);
    }

    @media(max-width: 999px){
        height: 4vh;
        width: 30vw;
    }
`;

export const ButtonSingin = styled.button`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(0.5rem, 1rem + 1vh, 3vh);
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    box-shadow: 1px 3px 4px 2px #ccc;
    text-shadow: 1px 1px 1px #ccc;
    transition: all ease 0.05s;
    margin-bottom: 1.5vh;
    font-family: 'Maven Pro', sans-serif;
    background-color: #fec200;
    height: 6vh;
    width: 10vw;

    &:active{
        box-shadow: 0px 0px 0px 0px #ccc, inset 1px 3px 4px 2px #ccc;
        transform: translate(3px,3px);
    }

    @media(max-width: 999px){
        height: 4vh;
        width: 30vw;
    }
`;


export const Escrito = styled.span`
    font-weight: bold;
    color: #101010;
    font-size: clamp(0.5rem, 1rem + 1vh, 2.5vh);
    font-family: 'Maven Pro', sans-serif;
`;

export const a = styled.a`
    margin-top: 30px;
    align-self: center;
    text-decoration: none;
`;

export const button_holder = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;