const wordBoardReducer =(state=null, action) => {
    switch(action.type) {
        case "UPDATE_WORD_BOARD":
            return action.data;
        default:
            return state;
    }
}

export default wordBoardReducer;