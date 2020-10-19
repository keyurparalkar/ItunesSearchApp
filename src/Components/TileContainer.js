import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import { recieveData } from "../Store/ActionCreators.js";
import Tile from "./Tile.js"
import { ListStyledContainer, StyledLoader } from "./StyledComponents.js";

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
        // let filteredList = this.props.results.filter((val) => {
        //     if (val.wrapperType === "audiobook" && this.props.filter.includes("audiobook")) {
        //         return true;
        //     } else if (this.props.filter.includes(val.kind)) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // });

        let filtered_arrays = [];
        let data = this.props.results;
        let uniqueFilters = [...new Set(data.map((val)=> val.hasOwnProperty('kind') ? val.kind : val.wrapperType))];
        
        for(let filt of uniqueFilters){
            filtered_arrays.push(data.filter((val)=> val.hasOwnProperty('kind') ? val.kind===filt: val.wrapperType === filt));
        }
        let result_arrays = filtered_arrays.map((val, ind)=>(
            <>
             <h1>Temp Header {val[0].kind ? val[0].kind : val[0].wrapperType} </h1>
             {val.map((item, index)=>(
                 <Tile key={index} data={item} animationDelay={`${index}`}/>
            ))}
            </>
            
        ));

        // result_arrays = filteredList.map((val, index) =><Tile key={index} data={val} animationDelay={`${index}`}/>);


        // if (filteredList.length === 0) {
        //     result_list = this.props.results.map((val, index) => <Tile key={index} data={val} animationDelay={`${index}`}/>);
        // }

        // console.log(result_arrays);
        if (this.props.isFetching) {
            return <StyledLoader/>
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