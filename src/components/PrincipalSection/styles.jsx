import styled from "styled-components";
import backgroundImg3 from '../images/back3.jpg'

export const Background = styled.div`

    display: flex;
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

    @media (max-width: 999px){
        background-size: 200vw;
    }
`;