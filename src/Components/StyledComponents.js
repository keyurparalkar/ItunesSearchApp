import styled, {keyframes} from "styled-components";

// Animations:

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const fadeIn = keyframes`
    0%{ 
        opacity:0;
    }
    50%{
        opacity:0.5;
    }
    100%{
        opacity:1;
    }
`;

export const AppContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
`;

export const StyledSearchBox = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;

export const ListStyledContainer = styled.ul`
    display:flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

export const StyledCard = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2px;

    // border: 1px solid rgba(0,0,0,0.5);
    border-radius: 20px;
    // box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.15);
    margin: 10px;

    width:250px;
    height:250px;

    font-family: 'Noto Sans JP', sans-serif;

    animation: ${fadeIn} ${props => props.animationDelay/5}s ease-out;
`;

export const StyledImage = styled.img`
    border-radius: 10px;
    filter: drop-shadow(1px 10px 10px rgba(0,0,0,0.2));
`;

export const StyledFilterInput = styled.div`
    display:flex;
    flex-direction:row-reverse;
    justify-content:center;
`;



export const StyledLoader = styled.div`
    border: 16px solid #f3f3f3; 
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spin} 2s linear infinite;
`;