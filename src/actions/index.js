export const updateCorrectGuesses = (c) => {
    return {
        type: "UPDATE_CORRECT_GUESSES",
        data: c
    }
}

export const updateFalseGuesses = (c) => {
    return {
        type: "UPDATE_FALSE_GUESSES",
        data: c
    }
}

export const setWord = (strObj) => {
    return {
        type: "SET_CORRECT_WORD",
        newWord: strObj,
    }
}

export const endGame = () => {
    return {
        type: "CONCLUDE"
    }
}

export const startEntireGame = () => {
    return {
        type: "START_ENTIRE_GAME"
    }
}

export const updateFalseInputCount = () => {
    return {
        type: "UPDATE_FALSE_INPUT_COUNT"
    }
}

export const updateHintCount = () => {
    return {
        type: "UPDATE_HINT_COUNT"
    }
}

export const addScore = (score) => {
    return {
        type: "ADD_SCORE_TO_GUESSER",
        data: score
    }
}

export const switchPlayers = () => {
    return {
        type: "SWITCH_PLAYERS"
    }
}

export const switchPlayersFullRound = () => {
    return {
        type: "SWITCH_PLAYERS_FULL_ROUND"
    }
}

export const resetPlayerData = () => {
    return {
        type: "RESET_PLAYER_DATA"
    }
}

export const setPlayer1Name = (name) => {
    return {
        type: "SET_PLAYER_1_NAME",
        data: name
    }
}

export const setPlayer2Name = (name) => {
    return {
        type: "SET_PLAYER_2_NAME",
        data: name
    }
}

export const updateCurrentScoreCalculation = (arr) => {
    return {
        type: "UPDATE_CURRENT_SCORE_CALCULATION",
        data: arr
    }
}

export const guesserSurrenders = () => {
    return {
        type: "GUESSER_SURRENDERS"
    }
}

export const updateRoundCount = () => {
    return {
        type: "UPDATE_ROUND_COUNT"
    }
}

export const updateRoundState = (c) => {
    return {
        type: "UPDATE_ROUND_STATE",
        data: c
    }
}

export const toggleTips = () => {
    return {
        type: "TOGGLE_TIPS"
    }
}

export const updateWordBoard = (arr) => {
    return {
        type: "UPDATE_WORD_BOARD",
        data: arr
    }
}

export const changeMaxRoundCount = (n) => {
    return {
        type: "CHANGE_MAX_ROUND_COUNT",
        data: n,
    }
}

export const resetCorrectGuesses = () => {
    return {
        type: "RESET_CORRECT_GUESSES"
    }
}

export const resetFalseGuesses = () => {
    return {
        type: "RESET_FALSE_GUESSES"
    }
}

export const resetHintCount = () => {
    return {
        type: "RESET_HINT_COUNT"
    }
}

export const resetFalseInputCount = () => {
    return {
        type: "RESET_FALSE_INPUT_COUNT"
    }
}

export const resetRoundCount = () => {
    return {
        type: "RESET_ROUND_COUNT"
    }
}

export const resetConclude = () => {
    return {
        type: "RESET_CONCLUDE"
    }
}

export const setGotRandom = () => {
    return {
        type: "SET_GOT_RANDOM"
    }
}

export const resetGotRandom = () => {
    return {
        type: "RESET_GOT_RANDOM"
    }
}