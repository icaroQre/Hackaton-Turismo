import styled from "styled-components";

import backgroundImg3 from '../images/back3.jpg'

export const Input = styled.input`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

    border: 0 none;
    outline: 0;
    width: 70vw;
    max-width: 700px;
    height: 6vh;
    max-height: 50px;
    border-radius: 15px;
    font-size: clamp(0.5rem, 1rem + 1vh, 2.5vh);
    font-family: 'Maven Pro', sans-serif;
    font-weight: Bold;
    padding: 8px 30px 14px;;

    ::placeholder{
        font-family: 'Maven Pro', sans-serif;
        font-weight: bold;
        font-size: clamp(0.5rem, 1rem + 1vh, 2.5vh);
    }

    @media (max-width: 999px){
        ::placeholder{
            font-size: clamp( 1vh, 3vh);
            }
    }
`;

export const Btn = styled.button`
    margin-right: 20px;
    position: absolute;
    outline: none;
    border: none;
    text-decoration: none;
    background-color: transparent;
`;

export const ExploreBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const DataResult = styled.div`
  margin-top: 2px;
  width: 77vh;
  height: 50px;
  border-radius: 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: hidden;
`;

export const p = styled.p`
    margin-left: 10px;
    &:hover{
    background-color: lightgray;
  }
  transition: all ease 0.4s
`;

export const a = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;
  &:hover{
    background-color: lightgray;
  }
  transition: all ease 0.4s;
`;


export const Background = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 38vh;
    align-items: center;
    justify-content: center;
    background-image: url(${backgroundImg3});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-color: #fed300;
    background-size: 60vw;
    border-bottom: solid #E0E0E0 4px;
    transition: all 0.2s;

    @media (max-width: 999px){
      background-size: 200vw;
    }
`;