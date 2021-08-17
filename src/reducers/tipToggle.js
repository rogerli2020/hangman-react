const tipToggleReducer = (state=true, action) => {
    switch(action.type) {
        case "TOGGLE_TIPS":
            return !state;
        default:
            return !state;
    }
}

export default tipToggleReducer;