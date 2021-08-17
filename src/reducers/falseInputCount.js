const falseInputCountReducer = (state=0, action) => {
    switch(action.type) {
        case "UPDATE_FALSE_INPUT_COUNT":
            return state + 1;
        case "RESET_FALSE_INPUT_COUNT":
            return 0;
        default:
            return state;
    }
}

export default falseInputCountReducer;