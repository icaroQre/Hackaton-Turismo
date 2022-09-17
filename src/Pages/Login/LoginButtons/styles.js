import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 15px 0px;
    gap: 10px;  
`;

export const Button = styled.button`    
    width: 5vh;
    height: 5vh;
    margin: 3vh;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: white;
    box-shadow: 1px 4px 5px #ccc;
`;
