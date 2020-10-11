export const START_FETCHING = "START_FETCHING";
export const RECIEVED_DATA = "RECIEVED_DATA";

export const startFetching = () => {
    return {
        type: START_FETCHING
    }
}

export const recieveData = (data, searchTerm)=> {
    return {
        type:RECIEVED_DATA,
        data:data,
        searchTerm: searchTerm
    }
}