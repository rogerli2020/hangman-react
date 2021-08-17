const falseGuessesReducer = (state=[], action) => {
    switch(action.type) {
        case "UPDATE_FALSE_GUESSES":
            return state.concat(action.data);
        case "RESET_FALSE_GUESSES":
            return [];
        default:
            return state
    }
}

export default falseGuessesReducer;