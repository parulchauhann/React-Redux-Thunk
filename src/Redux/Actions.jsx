const FETCH_DATA = "SUCCESS"
const ERROR = "ERROR"

export const showUser = (response) => {
    return{
        type: FETCH_DATA,
        payload : response
    }
}

export const showError = (error) => {
    return{
        type: ERROR,
        payload : error
    }
}