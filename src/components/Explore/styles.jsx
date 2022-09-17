import styled from "styled-components";

export const Bar = styled.input`

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