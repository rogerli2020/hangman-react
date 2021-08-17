

const defaultPlayerList = [
    {   key: 0,
        name: "Cat",
        avatar: "https://freepngimg.com/thumb/painting/84774-square-art-pixel-rectangle-cat-hd-image-free-png.png",
        score: 0,
        currScore: null,
        surrendered: false,
    }, 
    {   key: 1,
        name: "Dog",
        avatar: "https://freepngimg.com/thumb/technology/86267-flowey-square-angle-dog-undertale-free-photo-png.png",
        score: 0,
        currScore: null,
        surrendered: false,
    }
]

const playersReducer = (state=defaultPlayerList, action) => {
    switch(action.type) {
        case "ADD_SCORE_TO_GUESSER":
            var newArr = [...state];
            newArr[0].score += action.data;
            return newArr;
        case "SWITCH_PLAYERS":
            var player1 = state[0]
            var player2 = state[1]
            return [player2, player1]
        case "SWITCH_PLAYERS_FULL_ROUND":
            var player1 = state[0]
            player1.surrendered = false;
            player1.currScore = null;
            var player2 = state[1]
            player2.surrendered = false;
            player2.currScore = null;
            return [player2, player1]
        case "RESET_PLAYER_DATA":
            var newArr2 = defaultPlayerList
            newArr2[0].name = state[0].name
            newArr2[1].name = state[1].name
            return newArr2;
        case "SET_PLAYER_1_NAME":
            var newArr3 = [...state];
            newArr3[0].name = action.data;
            return newArr3;
        case "SET_PLAYER_2_NAME":
            var newArr4 = [...state];
            newArr4[1].name = action.data;
            return newArr4;
        case "UPDATE_CURRENT_SCORE_CALCULATION":
            var newArr5 = [...state]
            newArr5[0].currScore = action.data;
            return newArr5;
        case "GUESSER_SURRENDERS":
            var newArr6 = [...state]
            newArr6[0].surrendered = true;
            return newArr6;
        
        default:
            return state;
    }
}

export default playersReducer;