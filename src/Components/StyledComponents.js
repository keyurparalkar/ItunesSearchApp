import styled from "styled-components";

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

    // &:nth-child(1){
    //     font-size:18px;
    //     font-weight:bold;
    // }

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