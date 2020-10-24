import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import { recieveData } from "../Store/ActionCreators.js";
import Tile from "./Tile.js"
import { ListStyledContainer, StyledLoader, StyledCategoryContainer } from "./StyledComponents.js";

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        fetched: state.fetched,
        results: state.results,
        filter: state.filter,
        searchTerm: state.searchTerm
    }
}

class TileContainer extends React.Component {

    componentDidUpdate() {
        if (this.props.fetched) {
            //Async operations:
            this.props.dispatch((dispatch) => {
                axios.get(`https://itunes.apple.com/search?term=${encodeURI(this.props.searchTerm)}`)
                    .then((resp) => {
                        dispatch(recieveData(resp.data.results));
                    })
            });
        }
    }

    render() {

        let filtered_arrays = [];
        let data = this.props.results;
        let uniqueFilters = [...new Set(data.map((val) => val.hasOwnProperty('kind') ? val.kind : val.wrapperType))];

        for (let filt of uniqueFilters) {
            filtered_arrays.push(data.filter((val) => val.hasOwnProperty('kind') ? val.kind === filt : val.wrapperType === filt));
        }
        //Sort the filtered array according to the length of each inner array:
        filtered_arrays.sort((a,b)=> b.length - a.length);

        let result_arrays = filtered_arrays.map((val, ind) => (
            <StyledCategoryContainer key={ind}>
                <h1>{val[0].kind ? val[0].kind : val[0].wrapperType}</h1>
                <ul>
                    {val.map((item, index) => (
                        <Tile key={index} data={item} animationDelay={`${index}`} />
                    ))}
                </ul>
            </StyledCategoryContainer>

        ));

        if (this.props.isFetching) {
            return <StyledLoader />
        } else {
            return (
                <ListStyledContainer>
                    {result_arrays}
                </ListStyledContainer>

            );
        }
    }
}

export default connect(mapStateToProps)(TileContainer);