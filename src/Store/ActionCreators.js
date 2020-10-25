export const START_FETCHING = "START_FETCHING";
export const RECIEVED_DATA = "RECIEVED_DATA";
export const SET_SEARCHTEXT = "SET_SEARCHTEXT";
export const CLEAR_TEXT = "CLEAR_TEXT";

export const searchText = (text) => {
    return {
        type: SET_SEARCHTEXT,
        searchTerm: text
    }
}

export const clearText = ()=>{
    return{
        type:CLEAR_TEXT
    }
}
export const startFetching = () => {
    return {
        type: START_FETCHING
    }
}

export const recieveData = (data) => {
    return {
        type: RECIEVED_DATA,
        data: data
    }
}




