import styled, { keyframes } from "styled-components";

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
    flex-direction: row;
    justify-content: center;
    // align-items:center;
    position: relative;
    min-width:500px;
    box-shadow: 0px 7px 17px 5px rgba(0,0,0,0.06);
    & {
        .search-icon{
            position: absolute;
            top: 18px;
            left: 14px;
            width: 28px;
        }

        input {
            border: 0px solid transparent;
            border-radius: 5px;
            height: 60px;
            width: 100%;
            padding: 2px 23px 2px 60px;
            outline: 0;
            background-color: white;
            font-size:25px;
        }

        .clear-icon{
            position: absolute;
            top: 24px;   
            right: 10px;
            width: 22px;
            cursor: pointer;
            visibility:${(props) => props.clearIconVisible ? 'visible': 'hidden'}
        }
    }
`;

export const ListStyledContainer = styled.ul`
    // min-width: 80%;
    // display:flex;
    // flex-direction: column;
    // justify-content: center;
    // flex-wrap: wrap;
`;

export const StyledCategoryContainer = styled.li`

	display: grid;
	grid-template-columns: 10px 1fr 10px;

    
    & {
        h1 {
            grid-column: 1 /-1;
            text-align: start;
            font-family:'Noto Sans JP',sans-serif;
        }

        ul {
            grid-column: 1 / -1;
            display:grid;
            grid-template-columns: repeat(30, 1fr);
            grid-gap: 5px;
            overflow-x:scroll;
            overflow-y:hidden;

        }
    }
`;
export const StyledCard = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 2px;
    margin: 10px;

    width:300px;
    height:350px;

    font-family: 'Noto Sans JP', sans-serif;

    box-shadow:0px 0px 0px 0px rgba(0,0,0,0);
    transition: box-shadow 0.5s;


    & span:nth-child(1) button{
        background:transparent;
        border:0px;
    }
   
    &  span:nth-child(2){
        font-size:15px;
        margin-top:14px;
    }

    & div {
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        width:250px;
        margin-top: 10px;
        overflow:hidden;
    }
    & div span:nth-child(1){
        font-size:15px;
        font-weight:bold;
        // overflow:hidden;
        // text-overflow:ellipsis;
        white-space:nowrap;
    }
    & div span:nth-child(2){
        font-size:12px;
        margin-top:5px;
        font-weight:lighter;
        overflow:hidden;
        text-overflow:ellipsis;
    }

    animation: ${fadeIn} ${props => props.animationDelay / 5}s ease-out;

    &:hover{
        box-shadow:0px 25px 50px 4px rgba(0,0,0,0.2);
    }
`;

export const StyledImage = styled.img`
    filter: drop-shadow(1px 12px 10px rgba(0,0,0,0.2));
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


export const StyledModal = styled.div`
    & .main-model {
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        position:fixed;
        background: white;
        width: 80%;
        height: auto;
        min-height:400px;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    &.modal {
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index:500;
        overflow:hidden;
      }
    &.display-block {
        display: block;
      }
    
    &.display-none{
        display:none;
    }

    & .closeButton {
        position: absolute;
        left: 95%;
    }
`;

export const StyledDescription = styled.div`
    display: block;
    overflow: ${props => props.overflow};
    text-overflow: ellipsis;
    width: 500px;
    max-height: 250px;
`;

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

export const Bar = styled.div`
    // background-color: black;
    // border-radius: 50%;
    // width: 10px;
    // height: 10px;
    // margin: 0 5px;

    /* Animation */
    animation: ${BounceAnimation} 0.5s linear infinite;
    animation-delay: ${props => props.delay};
`;

const swishAnimation = (imgUrl)=>keyframes`
    0%{
        opacity:1;
    }

    33%{
        opacity:1;
    }

    83%{
        opacity:0;
    }

    100%{
        opacity:0;  
    }
`;
export const StyledWelcomeLoader = styled.div`
    & img{
        position:absolute;
        animation-name: ${swishAnimation};
        animation-duration: 2s;
        opacity:0;

        &.book{
            animation-delay:2s;    
        }

        &.music{
            animation-delay:4s;
        }


        &.movie{
            animation-delay:6s;
        }
    };
    
`;