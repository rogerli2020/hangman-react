import React, { Component } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Paper from '@material-ui/core/Paper'

const WordBoard = () => {
    const wordBoardState = useSelector(state => state.wordBoardReducer)

    const getString = (wordBoardState) => {
        var returnString = ""
        for(var i = 0; i < wordBoardState.length; i++) {
            returnString += wordBoardState[i]
            returnString += " "
        }
        return returnString
    }

    return ( 
        <Paper style={{
            textAlign: 'center',
            color: "primary",
            margin: 3,
            height: "98%",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}>

            <word-boardtext class={wordBoardState===null ? "notext" : null}>
                    {wordBoardState===null ? "a word is being selected..." : 
                    getString(wordBoardState)}
            </word-boardtext>
        </Paper>
        );
}
 
export default WordBoard;