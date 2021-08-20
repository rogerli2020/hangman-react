import { combineReducers } from "redux";

import correctGuessesReducer from "./correctGuesses";
import correctWordReducer from "./correctWord";
import endGameReducer from "./endGame";
import entireGameStartedReducer from "./entireGameStarted";
import falseGuessesReducer from "./falseGuesses";
import falseInputCountReducer from "./falseInputCount";
import hintCountReducer from "./hintCount";
import playersReducer from "./players";
import roundCountReducer from "./roundCount";
import roundStateReducer from "./roundState";
import tipToggleReducer from "./tipToggle";
import wordBoardReducer from "./wordBoard";
import maxRoundCountReducer from "./maxRoundCount"

const allReducers = combineReducers( 
    {
        correctGuessesReducer,
        correctWordReducer,
        endGameReducer,
        entireGameStartedReducer,
        falseGuessesReducer,
        falseInputCountReducer,
        hintCountReducer,
        playersReducer,
        roundCountReducer,
        roundStateReducer,
        tipToggleReducer,
        wordBoardReducer,
        maxRoundCountReducer,
    }
)

export default allReducers