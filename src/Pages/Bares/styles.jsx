import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    align-items: center;
    overflow-x: hidden;
    padding-top: 5vh;
    border-radius: 2rem;
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
`;

export const Description = styled.div`

    max-width: 700px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        height: 300px;
        width: 300px;
        border-radius: 2rem;

        img{
            height: 300px;
        }
    }

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 70vw;
    min-width: 200px;
    margin-left: auto;
    margin-right: auto;

    .name{
        color: black;
        font-family: 'Maven Pro', sans-serif;
        font-weight: bold;
        font-size: clamp(1vh + 0.5rem, 1rem + 1.7vh, 4vh);
        margin-bottom: 40px;
        margin-top: 80px;
    
    @media(max-width: 999px){
        margin-bottom: 80px;
    }
    }

    .description{
        color: #263238;;
        font-family: 'Maven Pro', sans-serif;
        font-weight: 500;
        font-size: clamp(1vh + 0.5rem, 1rem + 1.2vh, 2.5vh);
        word-break: inherit;
        margin-bottom: 5vh;
    }

    .price{
        margin-bottom: 5vh;
        color: #263238;
        font-family: 'Maven Pro', sans-serif;
        font-weight: 500;
        font-size: clamp(1vh + 0.5rem, 1rem + 1.2vh, 3vh);
        word-break: keep-all;
    }

`;

export const Image = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    width: 20vh;
    margin-top: 3vh;
    border-radius: 2rem;
    margin-left: 10vw;
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
    max-width: 400px;
    margin-bottom: 5vh;
`;