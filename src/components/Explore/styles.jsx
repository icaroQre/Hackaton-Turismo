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
  border: 0 none;
  outline: 0;
  width: 70vw;
  max-width: 700px;
  height: 6vh;
  max-height: 50px;
  border-radius: 15px;
  font-size: clamp(0.2rem, 1rem + 1vh, 2vh);
  font-family: 'Maven Pro', sans-serif;
  padding: 0px 30px 0px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: hidden;
  transition: all 0.2s;
  &:hover{
    background-color: lightgray;
  }
  ::placeholder{
        font-family: 'Maven Pro', sans-serif;
        font-size: clamp(0.2rem, 1rem + 1vh, 2vh);
    }

    @media (max-width: 999px){
        ::placeholder{
            font-size: clamp( 1vh, 2vh);
            }
    }
`;

export const p = styled.p`
  margin-left: 10px;
  transition: all ease 0.4s
`;

export const a = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;
  transition: all ease 0.4s;
  margin-bottom: 10px;
`;


export const Background = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
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
    border-radius: 2rem;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 30px;

    @media (max-width: 999px){
      background-size: 200vw;
    }
`;