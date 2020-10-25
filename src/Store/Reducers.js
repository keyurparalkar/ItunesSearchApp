import {
    START_FETCHING, 
    RECIEVED_DATA, 
    SET_SEARCHTEXT,
    CLEAR_TEXT
    } from "./ActionCreators.js";

const reducer = (state, action) => {
    switch(action.type){
        case START_FETCHING:
            return {...state, isFetching:true, fetched:true};
        case RECIEVED_DATA:
            return {...state, results:action.data, isFetching:false, fetched:false}
        case SET_SEARCHTEXT:
            return {...state, searchTerm: action.searchTerm}
        case CLEAR_TEXT:
            return {...state, searchTerm:'', results:[]}
        default:
            return state;
    }
}

export default reducer;