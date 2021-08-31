import React from 'react'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { useSelector, useDispatch } from "react-redux"
import {
    updateRoundState,
    addScore,
    updateFalseInputCount,
    updateCurrentScoreCalculation,
    resetGotRandom,
} from "../actions"

function SubmitGuess() {

    const dispatch = useDispatch()
    const correctWord = useSelector(state => state.correctWordReducer)
    const correctGuesses = useSelector(state => state.correctGuessesReducer);
    const falseGuesses = useSelector(state => state.falseGuessesReducer);
    const playerInfo = useSelector(state => state.playersReducer)
    const hintCount = useSelector(state => state.hintCountReducer)
    const falseGuessCount = useSelector(state => state.falseInputCountReducer)

    const handleSubmit = (event) => {
        event.preventDefault()
        var inp = event.target[0].value;
        inp = inp.toUpperCase();

        if (inp == correctWord) {
          // change game state to "e"
          dispatch(updateRoundState("e"))
          // update score and current score list...
          calcScore()
        } 
        else {
         // update false input count
           dispatch(updateFalseInputCount())
           alert("Your guess was not correct... 200 points deducted.")
        }
    }

    const calcScore = () => {
        const correctCharCount = (new Set(correctWord.split(""))).size
        const wrongCharCount = 26 - correctCharCount
    
        const baseScore = Math.floor(1000 * (wrongCharCount - falseGuesses.length)/(wrongCharCount))
        const reward = Math.floor(500 * (correctCharCount - correctGuesses.length)/correctCharCount)
        const penalty = -(50 * hintCount + 200 * falseGuessCount)
        const compensation = playerInfo[0].gotRandom === true ? 100 : 0
        const total = (baseScore + reward + penalty + compensation)
        
        if (!playerInfo[0].surrendered && total >= 0) {
            dispatch(addScore(total))
            dispatch(updateCurrentScoreCalculation([baseScore, reward, penalty, compensation, total]))
        } else {
            dispatch(addScore(0))
            dispatch(updateCurrentScoreCalculation([0, 0, 0, compensation, compensation]))
        }
        dispatch(resetGotRandom())
      }

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                variant="outlined"
                id="standard-basic" 
                label="Enter your guess here..." 
                color="primary" 
                style={{marginLeft: 7, marginTop: 5}}
            />      
            <Button 
                type="submit" 
                value="Submit" 
                color="primary"
                style={{ margin: 8, fontSize: 15, marginTop: 15}}>
                SUBMIT
            </Button>
        </form>
    );
}
 
export default SubmitGuess;