const initState = {
    user: [],
    error: ''
}

function Reducer(state = initState, action) {
    switch (action.type) {
        case "SUCCESS":
            return {
                user: action.payload,
                error: ""
            }
        case "ERROR":
            return {
                user: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default Reducer