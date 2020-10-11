import React from "react";
import {connect} from "react-redux";

import {searchText} from "../Store/ActionCreators.js";

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
        this.props.dispatch(searchText(event.target.value));
    }
    
    render(){
        return (
            <div>
                <label>Enter a search term</label>
                <input type="text" onChange={this.handleSearchText}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SearchBox)