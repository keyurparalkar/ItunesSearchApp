import {START_FETCHING, RECIEVED_DATA, SET_SEARCHTEXT} from "./ActionCreators.js";

const reducer = (state, action) => {
    switch(action.type){
        case START_FETCHING:
            return {...state, isFetching:true};
        case RECIEVED_DATA:
            return {...state, isFetching:false, data:action.data, searchTerm: action.searchTerm}
        case SET_SEARCHTEXT:
            return {...state, searchTerm: action.searchTerm}
        default:
            return state;
    }
}

export default reducer;