const maxRoundCountReducer =(state=6, action) => {
    switch(action.type) {
        case "CHANGE_MAX_ROUND_COUNT":
            return action.data;
        default:
            return state;
    }
}

export default maxRoundCountReducer;