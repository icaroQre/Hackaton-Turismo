import styled from "styled-components";

export const SwiperDiv = styled.div`
    margin-top: 40px;
    display: none;

    @media (max-width: 999px){
        display: block;
    }
`;

export const Fixed = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 65vw;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 999px){
        display: none;
    }
`;