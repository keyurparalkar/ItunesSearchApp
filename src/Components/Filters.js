import React from "react";
import { connect } from "react-redux";

import { FilterInput } from "./FilterInput.js";
import { setFilterOption, removeFilter } from "../Store/ActionCreators.js";

const mapStateToProps = (state) => {
    return {
        filter: state.filter,
        results: state.results,
        filteredResults: state.filteredResults
    }
}

class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(event) {
        if (event.target.checked) {
            this.props.dispatch(setFilterOption(event.target.value));
        } else {
            this.props.dispatch(removeFilter(event.target.value));
        }
    }

    render() {
        const toggle = this.props.results.length > 0 ? false : true ;
        return (
            <div style={{ display: "flex", flexDirection: "row" }}>
                <FilterInput name="audiobook" onChange={this.handleFilter} disabled={toggle}/>
                <FilterInput name="song" onChange={this.handleFilter} disabled={toggle}/>
                <FilterInput name="feature-movie" onChange={this.handleFilter} disabled={toggle}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Filters);