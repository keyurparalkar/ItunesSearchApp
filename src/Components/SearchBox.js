import React from "react";
import {connect} from "react-redux";

import {searchText, startFetching} from "../Store/ActionCreators.js";
import {StyledSearchBox} from "./StyledComponents.js";

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        searchTerm: state.searchTerm
    }
}

class SearchBox extends React.Component{
    constructor(props){
        super(props);

        this.handleSearchText = this.handleSearchText.bind(this);
    }

    handleSearchText(event){
        this.props.dispatch((dispatch)=>{
            dispatch(startFetching());
            dispatch(searchText(event.target.value));
        });
    }
    
    render(){
        return (
            <StyledSearchBox>
                <label>Enter a search term</label>
                <input type="text" onChange={this.handleSearchText}/>
            </StyledSearchBox>
        );
    }
}

export default connect(mapStateToProps)(SearchBox)