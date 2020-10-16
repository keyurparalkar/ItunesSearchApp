import {
    START_FETCHING, 
    RECIEVED_DATA, 
    SET_SEARCHTEXT,
    SET_FILTER,
    REMOVE_FILTER} from "./ActionCreators.js";

const reducer = (state, action) => {
    switch(action.type){
        case START_FETCHING:
            return {...state, isFetching:true, fetched:true};
        case RECIEVED_DATA:
            return {...state, results:action.data, isFetching:false, fetched:false}
        case SET_SEARCHTEXT:
            return {...state, searchTerm: action.searchTerm}
        case SET_FILTER:
            return {...state, filter:[...state.filter, action.filter]}
        case REMOVE_FILTER:
            return {...state, filter:state.filter.filter((val)=>val!==action.filter)}
        default:
            return state;
    }
}

export default reducer;