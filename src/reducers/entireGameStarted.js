const entireGameStartedReducer = (state = false, action) => {
    switch(action.type) {
        case "START_ENTIRE_GAME":
            return true;
        default:
            return state;
    }
}

export default entireGameStartedReducer;