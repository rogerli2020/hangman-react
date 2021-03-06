const hintCountReducer = (state=0, action) => {
    switch(action.type) {
        case "UPDATE_HINT_COUNT":
            return state + 1;
        case "RESET_HINT_COUNT":
            return 0
        case "DEDUCT_HINT_COUNT":
            return (state === 0 ? 0 : state - 1)
        default:
            return state;
    }
}

export default hintCountReducer;