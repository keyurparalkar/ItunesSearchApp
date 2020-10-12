import React from "react";
import {FilterInput} from "./FilterInput.js";

class Filters extends React.Component{
    render(){
        return(
            <div style={{display:"flex", flexDirection:"row"}}>
                <FilterInput name="audiobook"/>
                <FilterInput name="song"/>
                <FilterInput name="feature-movie"/>
            </div>
        );
    }
}

export default Filters;