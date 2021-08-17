const surrenderedReducer =(state=false, action) => {
    switch(action.type) {
        case "SURRENDERED":
            return true;
        default:
            return state;
    }
}

export default surrenderedReducer;