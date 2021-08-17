const roundCountReducer = (state=1, action) => {
    switch(action.type) {
        case "UPDATE_ROUND_COUNT":
            return state + 1;
        default:
            return state;
    }
}

export default roundCountReducer;