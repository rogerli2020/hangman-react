const correctWordReducer = (state="#", action) => {
    switch(action.type) {
        case "SET_CORRECT_WORD":
            return action.newWord;
        default:
            return state;
    }
}

export default correctWordReducer;