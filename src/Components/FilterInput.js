import React from "react";
import {StyledFilterInput} from "./StyledComponents.js";

export const FilterInput = (props) => (
    <StyledFilterInput>
        <label>{props.name}</label>
        <input type="checkbox" value={props.name}/>
    </StyledFilterInput>
)