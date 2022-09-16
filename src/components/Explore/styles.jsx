import styled from "styled-components";

export const Bar = styled.input`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

    border: 0 none;
    outline: 0;
    display: flex;
    align-items: center;
    width: 70vw;
    max-width: 700px;
    height: 8vh;
    max-height: 50px;
    border-radius: 15px;
    font-size: 3.5vh;
    font-family: 'Maven Pro', sans-serif;
    font-weight: Bold;
    padding-left: 6.5px;

    ::placeholder{
        font-family: 'Maven Pro', sans-serif;
        font-weight: 600;
        font-size: 2rem;
        padding: 50px;
    }
`;

export const Btn = styled.button`
    margin-right: 20px;
    position: absolute;
    outline: none;
    border: none;
    text-decoration: none;
    background-color: white;
`;

export const ExploreBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;