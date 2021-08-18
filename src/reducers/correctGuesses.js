const correctGuessesReducer = (state=[], action) => {
    switch(action.type) {
        case "UPDATE_CORRECT_GUESSES":
            state = state.concat(action.data);
            return state;
        case "RESET_CORRECT_GUESSES":
            return [];
        default:
            return state;
    }
}

export default correctGuessesReducer;