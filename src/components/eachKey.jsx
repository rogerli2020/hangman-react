import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFalseGuesses, 
            updateCorrectGuesses, 
            updateWordBoard, 
            updateRoundState,
            addScore,
            updateCurrentScoreCalculation,
         } from "../actions"

function EachKey(props) {

    const dispatch = useDispatch();
    const correctWord = useSelector(state => state.correctWordReducer);
    const correctGuesses = useSelector(state => state.correctGuessesReducer);
    const falseGuesses = useSelector(state => state.falseGuessesReducer);
    const playerInfo = useSelector(state => state.playersReducer)
    const hintCount = useSelector(state => state.hintCountReducer)
    const falseGuessCount = useSelector(state => state.falseInputCountReducer)

    const handleClick = () => {
        if (!props.used) {
            handleCharacterInput(props.thisChar)
        }
    }

    const calcScore = () => {
        const correctCharCount = (new Set(correctWord.split(""))).size
        const wrongCharCount = 26 - correctCharCount
    
        const baseScore = Math.floor(1000 * (wrongCharCount - falseGuesses.length)/(wrongCharCount))
        const reward = Math.floor(500 * (correctCharCount - correctGuesses.length)/correctCharCount)
        const penalty = -(100 * hintCount + 200 * falseGuessCount)
        const compensation = 25 * 0 // not implemented yet...
        const total = (baseScore + reward + penalty + compensation)
        
        if (!playerInfo[0].surrendered && total >= 0) {
            dispatch(addScore(total))
            dispatch(updateCurrentScoreCalculation([baseScore, reward, penalty, compensation, total]))
        } else {
            dispatch(addScore(0))
            dispatch(updateCurrentScoreCalculation([0, 0, 0, 0, 0]))
        }
      }

    const updateWordBoardState = () => {
        var newCurrentWordState = [];

        for (var i = 0; i < correctWord.length; i++) {
            if (correctGuesses.includes(correctWord[i])) {
                newCurrentWordState += [correctWord[i]];
            }
            else {
                newCurrentWordState += ['_'];
            }
        }
        dispatch(updateWordBoard(newCurrentWordState));
        console.log("Word board updated:", newCurrentWordState)
    }
    
    const handleCharacterInput =  (thisChar) => {
        if (correctWord.includes(thisChar)) {
            dispatch(updateCorrectGuesses(thisChar));
        } else {
            dispatch(updateFalseGuesses(thisChar));
        }
        updateWordBoardState();

        // check if all correct guesses are guessed.
        let endReached = true;
        let i = 0;
        for (i; i < correctWord.length; i++) {
            if (!correctGuesses.includes(correctWord[i])) {
                endReached = false;
            }
        }

        if (endReached || playerInfo[0].surrendered) {
            handleRoundEnd()
        }
    }

    const handleRoundEnd = () => {
        calcScore();
        dispatch(updateRoundState('e'));
    }

    return ( 
        <each-key 
            class = { props.used ? "used" : "" }
            onClick={ handleClick }
        >
            {props.thisChar}
        </each-key>
        );

}
 
export default EachKey;