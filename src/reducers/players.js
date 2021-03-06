

const defaultPlayerList = [
    {   key: 0,
        name: "Player_1",
        avatar: "https://png2.cleanpng.com/dy/85c403f919ad6c9dd1f79a11bfc17f38/L0KzQYm3VsEzN5xwipH0aYP2gLBuTgBqgJZxRdN7dD3mfLr3TfFzfF46eqNvNHHmRIHtUsA4P185TKcBN0S4SYK8Usg4P2g5SaQ5NkKxgLBu/kisspng-pixel-art-clip-art-5b1f4ac40f2077.445674591528777412062.png",
        score: 0,
        currScore: null,
        surrendered: false,
        gotRandom: false,
    }, 
    {   key: 1,
        name: "Player_2",
        avatar: "https://freepngimg.com/thumb/technology/86267-flowey-square-angle-dog-undertale-free-photo-png.png",
        score: 0,
        currScore: null,
        surrendered: false,
        gotRandom: false,
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
            var newArr2 = defaultPlayerList;
            newArr2[0].name = state[0].name;
            newArr2[0].score = 0;
            newArr2[1].name = state[1].name;
            newArr2[1].score = 0;
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
        case "SET_GOT_RANDOM":
             var newArr7 = [...state];
             newArr7[1].gotRandom = true;
             return newArr7;
        case "RESET_GOT_RANDOM":
            var newArr8 = [...state];
            newArr8[0].gotRandom = false;
            newArr8[1].gotRandom = false;
            return newArr8;
        
        default:
            return state;
    }
}

export default playersReducer;