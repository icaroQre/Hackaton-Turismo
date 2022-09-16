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
    width: 50px;
    height: 50px;
    margin-right: 20px;
    margin-left: 20px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: white;
    box-shadow: 1px 4px 5px #ccc;
`;
