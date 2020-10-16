export const START_FETCHING = "START_FETCHING";
export const RECIEVED_DATA = "RECIEVED_DATA";
export const SET_SEARCHTEXT = "SET_SEARCHTEXT";
export const SET_FILTER = "SET_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";

export const searchText = (text) => {
    return {
        type: SET_SEARCHTEXT,
        searchTerm: text
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

export const setFilterOption = (filterOption) => {
    return {
        type: SET_FILTER,
        filter: filterOption
    }
}

export const removeFilter = (filterOption) => {
    return {
        type:REMOVE_FILTER,
        filter:filterOption
    }
}



