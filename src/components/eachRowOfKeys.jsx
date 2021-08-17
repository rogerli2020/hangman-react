import React from 'react'
import EachKey from './eachKey';
import { useSelector } from "react-redux"

function EachRowOfKeys(props) {

    // props: list of chars, list of used chars.
    var key=0

    const falseList = useSelector(state => state.falseGuessesReducer);
    const corrList = useSelector(state => state.correctGuessesReducer);
    const usedList = falseList + corrList;

    return ( 
        <each-row-of-keys>
            {
                props.rowOfKeys.map(
                    eachChar => (
                        <EachKey 
                            key={key++}
                            used={usedList.includes(eachChar) ? true : false}
                            thisChar={eachChar}
                        />
                    )
                )
            }
        </each-row-of-keys>
        );
}
 
export default EachRowOfKeys;