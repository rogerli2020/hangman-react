const roundStateReducer = (state='e', action) => {
    switch(action.type) { // e == "ended", "i" == in progress
        case "UPDATE_ROUND_STATE":
            return action.data
        default:
            return state;
    }
}

export default roundStateReducer;

