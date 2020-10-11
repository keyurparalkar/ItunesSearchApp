import React from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        results: state.results
    }
}

const TileContainer = ()=> (
    <div className="title-container">
          <ul>
            <li key="1">Song 1</li>
            <li key="2">Song 2</li>
            <li key="3">Song 3</li>
            <li key="4">Song 4</li>
            <li key="5">Song 5</li>
            <li key="6">Song 6</li>
          </ul>
      </div>
);

export default connect(mapStateToProps)(TileContainer);