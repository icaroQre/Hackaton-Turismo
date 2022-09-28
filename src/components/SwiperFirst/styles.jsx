import styled from "styled-components";

export const SwiperDiv = styled.div`

    display: none;

    @media (max-width: 999px){
        display: block;
        margin-top: 80px;
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

.fixedHover{
    :hover{
        background-color: blue;
    }
}
`;