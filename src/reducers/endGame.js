const endGameReducer = (state=false, action) => {
    switch(action.type) {
        case "CONCLUDE":
            return true;
        default:
            return state;
    }
}

export default endGameReducer;