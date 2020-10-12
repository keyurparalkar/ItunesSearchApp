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

    padding: 5px;

    border: 1px solid rgba(0,0,0,0.5);
    margin: 2px;

    width:300px;
    height:250px;

`;

export const StyledFilterInput = styled.div`
    display:flex;
    flex-direction:row-reverse;
    justify-content:center;
`;