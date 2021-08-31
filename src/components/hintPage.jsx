import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { resetHintCount } from '../actions'

function HintPage() {
    const dispatch = useDispatch();
    const [jsonObj, setJsonObj] = useState(null);
    const key = '7c39d164-4df9-4f8f-ba37-ffb3d78f7eb5';
    const correctWord = useSelector(state => state.correctWordReducer)
    const hintCount = useSelector(state => state.hintCountReducer)

    const getDefinition = (word) => {
        const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + word + "?key=" + key;
        try {
            fetch(url)
            .then(response => response.json())
            .then(jsonObject => setJsonObj(jsonObject))
            .catch(error => console.error(error));
        } catch (error) {
            alert("[ERROR] Failed to fetch information from server. Error:", error)
            dispatch(resetHintCount())
        }
    }

    const cleanUp = (arr) => {
        const unhelpfulWords = [
            'a', 
            'an', 
            'of', 
            'the', 
            'or', 
            'and', 
            'about', 
            'as', 
            'to', 
            'with', 
            '', 
            'especially',
            'such',
            'from',
            'not',
            'by',
            'that',
            'in',
            'is',
            'are',
            'often',
            'usually',
            correctWord,
        ]
        var i = 0;
        for (i; i < arr.length; i++) {
            arr[i] = arr[i].replace(/[^0-9a-z]/gi, '')
        };

        i = arr.length - 1;
        for (i; i >= 0; i--) {
            if (unhelpfulWords.includes(arr[i])) {
                arr.splice(i, 1);
            }
        }

        return arr
    }

    const getRandomKeywords = () => {
        try {
            const defString = JSON.stringify(jsonObj[0].shortdef);
            const messyDefList = defString.split(" ");
            const defList = cleanUp(messyDefList);
            var word1 = defList[Math.floor(Math.random()*defList.length)];
            var word2 = defList[Math.floor(Math.random()*defList.length)];
            var word3 = defList[Math.floor(Math.random()*defList.length)];
            var retString = word1 + " " + word2 + " " + word3;

            return retString
        } catch (error) {
            alert("[ERROR] Failed to fetch information from server. Check your internet connectivity.")
            dispatch(resetHintCount());
        }
    }

    const getFL = () => {
        console.log("getFl() triggered...")
        try {
            return jsonObj === null ? "[loading...]" : jsonObj[0].fl;
        } catch (error) {
            alert("[ERROR] Failed to fetch information from server. Check your internet connectivity.")
            dispatch(resetHintCount());
        }
    }

    return (
        <div style={{margin:"10"}}>
            {jsonObj === null ? getDefinition(correctWord) : ""}

            {hintCount >= 1 ?
                <div style={{fontSize: 18, color:"black"}}>
                    <strong>① </strong>
                    this word is a(n) {getFL()}. 
                </div>
                : ""
            }

            {hintCount >= 2 ?
                <div style={{fontSize: 18, color:"black"}}>
                    <strong>② HINT WORDS: </strong>
                    {getRandomKeywords()} 
                </div>
                : ""
            }


            {hintCount >= 3 ?
                <div style={{fontSize: 18, color:"black"}}>
                    <strong>③ HINT WORDS: </strong>
                    {getRandomKeywords()} 
                </div>
                : ""
            }

        </div>
    );
};

export default HintPage;