
import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
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
`;

export const Input = styled.input`
    border-radius: 10px;
    padding: 10px 15px;
    font-size: 15px;
    font: "Montserrat";
    font-weight: bold;
    color: #363636;
    outline: none;
    border: none;
    margin-bottom: 20px;
    box-shadow: 1px 3px 4px 2px #ccc;
`;

export const Label = styled.label`
    color: #363636;
    font-family: 'Maven Pro', sans-serif;
    font-weight: bold;
`;

export const Button = styled.button`
    margin-top: 10px;
    padding: 15px 90px;
    font-size: 30px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #FEC200;
    color: white;
    box-shadow: 1px 3px 4px 2px #ccc;
    text-shadow: 1px 1px 1px #ccc;
    transition: all ease 0.05s;

    &:active{
        box-shadow: 0px 0px 0px 0px #ccc, inset 1px 3px 4px 2px #ccc;
        transform: translate(3px,3px);
    }
`;


export const Escrito = styled.span`
    font-weight: bold;
    color: #ACACAC;
`;

export const a = styled.a`
    margin-top: 30px;
    align-self: center;
    text-decoration: none;
`;

export const button_holder = styled.a`
    text-decoration: none;
`;