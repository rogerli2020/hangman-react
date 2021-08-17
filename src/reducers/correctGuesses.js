const correctGuessesReducer = (state=[], action) => {
    switch(action.type) {
        case "UPDATE_CORRECT_GUESSES":
            return state.concat(action.data)
        case "RESET_CORRECT_GUESSES":
            return []
        default:
            return state;
    }
}

export default correctGuessesReducer;