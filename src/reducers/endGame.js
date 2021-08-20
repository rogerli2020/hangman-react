const endGameReducer = (state=false, action) => {
    switch(action.type) {
        case "CONCLUDE":
            return true;
        case "RESET_CONCLUDE":
            return false;
        default:
            return state;
    }
}

export default endGameReducer;