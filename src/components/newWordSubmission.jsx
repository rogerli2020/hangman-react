import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useSelector, useDispatch } from "react-redux";
import { setWord,
         switchPlayers, 
         updateRoundState, 
         updateWordBoard,
         switchPlayersFullRound,
         updateRoundCount,
         endGame,
         resetCorrectGuesses,
         resetFalseGuesses,
         resetHintCount,
         resetFalseInputCount,
        } from "../actions"

function SubmitNewWord(){

    const dispatch = useDispatch();
    const roundCount = useSelector(state => state.roundCountReducer)
    const maxRoundCount = useSelector(state => state.maxRoundCountReducer);

    const checkValidity = (inp) => {
        if (/[^a-zA-Z]/.test(inp) || inp.length < 3) return false;
        return true;
    }

    const getWordState = (corrWord) => {
        var newCurrentWordState = [];
        for (var i = 0; i < corrWord.length; i++) {
                newCurrentWordState += ['_'];
            }
        return newCurrentWordState;
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!checkValidity(event.target[0].value)) {
            window.alert("[NOT ACCEPTED] Please enter a valid English word that is longer than 3 characters.")
        } else {
            const wordEntered = event.target[0].value
            dispatch(setWord(wordEntered.toUpperCase()))
            dispatch(updateWordBoard(getWordState(wordEntered)))
            dispatch(updateRoundCount())

            if (roundCount % 2 === 0) {
                dispatch(switchPlayers())
            } else {
                dispatch(switchPlayersFullRound())
            }

            if (roundCount === maxRoundCount) {
                dispatch(endGame())
            }
            resetData()
            dispatch(updateRoundState("i"))
        }
    }

    const resetData = () => {
        // RESET FALSE GUESSES
        dispatch(resetCorrectGuesses())
        // RESET CORRECT GUESSES
        dispatch(resetFalseGuesses())
        // RESET HINT COUNT
        dispatch(resetHintCount())
        // RESET FALSE INPUT COUNT
        dispatch(resetFalseInputCount())
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                id="standard-basic" 
                variant="outlined" 
                label="Enter a word here..." 
                color="primary" 
                style={{ margin: 8 }}
            />
            <Button 
                type="submit" 
                value="Submit" 
                color="primary"
                style={{ marginTop: 20, fontSize: 15 }}>
                SUBMIT
            </Button>                
        </form>
    );
}
 
export default SubmitNewWord;