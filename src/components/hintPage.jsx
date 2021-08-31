import React, { useState } from 'react';
import { useSelector } from "react-redux";

function HintPage() {
    const [jsonObj, setJsonObj] = useState(null);
    const key = '7c39d164-4df9-4f8f-ba37-ffb3d78f7eb5';
    const correctWord = useSelector(state => state.correctWordReducer)
    const hintCount = useSelector(state => state.hintCountReducer)

    const getDefinition = (word) => {
        const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + word + "?key=" + key;
        fetch(url)
        .then(response => response.json())
        .then(jsonObject => setJsonObj(jsonObject))
        .catch(error => console.error(error));
    }

    const getRandomKeywords = () => {
        const defStringJSON = jsonObj[0].shortdef; // jsonObj is the "jsonObject" object in getDefinition.
        const defString = JSON.stringify(defStringJSON);
        const defList = defString.split(" ") // bug here. Can't split defString...
        var word1 = defList[Math.floor(Math.random()*defList.length)];
        var word2 = defList[Math.floor(Math.random()*defList.length)];
        var word3 = defList[Math.floor(Math.random()*defList.length)];
        var retString = word1 + " " + word2 + " " + word3;

        return retString
    }

    return (
        <div style={{margin:"10"}}>
            {jsonObj === null ? getDefinition(correctWord) : ""}

            {hintCount >= 1 ?
                <div style={{fontSize: 18, color:"black"}}>
                    <strong>① </strong>
                    this word is a(n) {jsonObj === null ? "" : jsonObj[0].fl}. 
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