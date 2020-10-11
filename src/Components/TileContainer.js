import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import { recieveData } from "../Store/ActionCreators.js";
import Tile from "./Tile.js"

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        fetched:state.fetched,
        results: state.results,
        searchTerm: state.searchTerm
    }
}

class TileContainer extends React.Component {

    componentDidUpdate() {
        if(this.props.fetched){
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
        const result_list = this.props.results.map((val, index) => <Tile key={index} data={val}/>);

        if (this.props.isFetching) {
            return <div><h1>Loading.......</h1></div>
        } else {
            return (
                <div className="title-container">
                    <ul>
                        {/* <li key="1">Song 1</li>
                        <li key="2">Song 2</li>
                        <li key="3">Song 3</li>
                        <li key="4">Song 4</li>
                        <li key="5">Song 5</li>
                        <li key="6">Song 6</li> */}
                        {result_list}
                    </ul>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(TileContainer);