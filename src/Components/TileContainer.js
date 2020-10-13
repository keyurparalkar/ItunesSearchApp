import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import { recieveData } from "../Store/ActionCreators.js";
import Tile from "./Tile.js"
import { ListStyledContainer } from "./StyledComponents.js";

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
                axios.get(`https://itunes.apple.com/search?term=${this.props.searchTerm}`)
                    .then((resp) => {
                        dispatch(recieveData(resp.data.results));
                    })
            });
        }
    }

    render() {
        let result_list;
        let filteredList = this.props.results.filter((val) => {
            if (val.wrapperType === "audiobook" && this.props.filter.includes("audiobook")) {
                return true;
            } else if (this.props.filter.includes(val.kind)) {
                return true;
            } else {
                return false;
            }
        });
        result_list = filteredList.map((val, index) => <Tile key={index} data={val} />);


        if (filteredList.length === 0) {
            result_list = this.props.results.map((val, index) => <Tile key={index} data={val} />);
        }


        if (this.props.isFetching) {
            return <div><h1>Loading.......</h1></div>
        } else {
            return (
                <ListStyledContainer>
                    {result_list}
                </ListStyledContainer>

            );
        }
    }
}

export default connect(mapStateToProps)(TileContainer);