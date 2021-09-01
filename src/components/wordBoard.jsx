import React, { Component } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Card from '@material-ui/core/Card'

const WordBoard = () => {
    const wordBoardState = useSelector(state => state.wordBoardReducer)
    const correctWord = useSelector(state => state.correctWordReducer)

    const getString = (wordBoardState) => {
        var returnString = ""
        for(var i = 0; i < wordBoardState.length; i++) {
            returnString += wordBoardState[i]
            returnString += " "
        }
        return returnString
    }

    const correctCharCount = (new Set(correctWord.split(""))).size
    const wrongCharCount = 26 - correctCharCount

    return ( 
        <Card style={{
            textAlign: 'center',
            margin: 3,
            height: "98%",
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
          }}>

          <div>
            <word-boardtext class={wordBoardState===null ? "notext" : null}>
                    {wordBoardState===null ? "a word is being selected..." : 
                    getString(wordBoardState)}
            </word-boardtext>

            <Card style={{
                margin: 20,
            }} variant="outlined">
                <div style={{fontWeight: "bold", opacity: 0.6, textAlign:"left"}}>
                    WORD INFORMATION:
                </div>
                <div style={{textAlign: "left", opacity: 0.6}}>
                    <li>  <strong>{correctCharCount}</strong> unique characters are included in this word. </li>
                    <li>  <strong>{Math.floor(1000/wrongCharCount)} </strong> pts. will be deducted for each wrong character guess. </li>
                    <li>  <strong>{Math.floor(500/correctCharCount)}</strong> pts. will be earned for each unguessed correct characters. </li>
                </div>
            </Card>
            </div>
        </Card>
        );
}
 
export default WordBoard;