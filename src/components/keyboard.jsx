import React from 'react'
import EachRowOfKeys from './eachRowOfKeys';
import { useSelector } from "react-redux";

function Keyboard() {

    const correctGuessesList = useSelector(state => state.correctGuessesReducer)
    const falseGuessesList = useSelector(state => state.falseGuessesReducer)
    const roundState = useSelector(state => state.roundStateReducer)
    const usedList = correctGuessesList + falseGuessesList

    function checkEachChar(eachChar) {
        
        if (falseGuessesList.indexOf(eachChar) !== -1 ||
            correctGuessesList.indexOf(eachChar) !== -1 ) {
                return 
        } else {
            return
        }
    }

    function overlay() {
        if (roundState === "n") {
        return (
            <keyboard-panel 
                class="overlay"
            >
                    <br/><br/><br/>
                    waiting for the Executor to select a word...
            </keyboard-panel>
            )
        }
    }

    const listOfChars=[
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['Z','X','C','V','B','N','M']
    ]

    var key=0

    return ( 
        <keyboard-panel>
        {overlay()}
            {
                listOfChars.map(
                    eachRow => (
                        <EachRowOfKeys 
                            key={key++}
                            rowOfKeys={eachRow}
                            usedList={usedList}
                            handleCharacterClick={ () => console.log("clicked!")}
                        />
                    )
                )
            }
        </keyboard-panel>
        );
}
 
export default Keyboard;