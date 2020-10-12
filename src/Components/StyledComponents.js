import styled from "styled-components";

export const AppContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
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
    padding: 5px;

    border: 1px solid rgba(0,0,0,0.5);
    margin: 2px;

    width:200px;
    height:250px;

`;

