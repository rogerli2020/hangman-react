import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import ScoreBoard from "./scoreBoard"
import Card from '@material-ui/core/Card';
import SubmitNewWord from './newWordSubmission';
import Button from '@material-ui/core/Button';
import { resetPlayerData } from "../actions"


function RoundEndPage() {
    // dictated by 1) round count. 2) round state
    const dispatch = useDispatch();
    const roundNum = useSelector(state => state.roundCountReducer)
    const correctWord = useSelector(state => state.correctWordReducer)
    const playerInfo = useSelector(state => state.playersReducer)
    const gameEnded = useSelector(state => state.endGameReducer)

    const resetGame = () => {
        //UNDER CONSTRUCTION!!
        dispatch(resetPlayerData())
    }

    const printWinner = () => {
        const player1Score = playerInfo[0].score;
        const player2Score = playerInfo[1].score;

        if (player1Score > player2Score) {
            return (
                <div style={{textDecoration: "underline", fontStyle:"noraml", color: "forestgreen"}}>
                    <br/>
                    {playerInfo[0].name} won, Congrats!
                </div>
            )
        } else if (player1Score < player2Score) {
            return (
                <div style={{textDecoration: "underline", fontStyle:"noraml", color: "forestgreen"}}>
                    <br/>
                    {playerInfo[1].name} won, Congrats!
                </div>
            )
        } else {
            return (
                <div style={{textDecoration: "underline", fontStyle:"noraml", color: "forestgreen"}}>
                    <br/>
                    A tie was reached. Congrats to both parties!
                </div>
            )
        }
    }

    return(
        <div 
        style={
            {
                height: "auto",
                width: "auto",
                position: "absolute",
                backgroundColor: "rgba(191, 236, 255, 0.98)",
                display: "flex",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: 4,
                alignItems: "center",
                justifyContent: "center",
                fontStyle: "italic",
                fontSize: 25,
                fontWeight: "bold",
                color: "rgb(6, 54, 55)",
                textAlign: "center",
            }
        }
    >
            <div>
                {roundNum !== 1 ?
                    <div>
                        <div>
                            <h1 style={{fontSize:15, margin:0}}>CORRECT WORD:</h1>
                            <Card>
                                {correctWord}
                            </Card>
                        </div>

                        <div style={{alignItems: 'center', display: "flex"}}>
                            <ScoreBoard playerInfo={playerInfo[0]}/>
                            <ScoreBoard playerInfo={playerInfo[1]}/>
                        </div>
                    </div>
                : null
                }

                {!gameEnded ?
                    <div>
                        <div 
                            style={{fontWeight: "bold", 
                                    fontStyle: "normal", 
                                    fontSize: 18,
                                    marginTop: 15,
                                    marginBottom: 5}}>
                        {playerInfo[0].name}, please enter a word:
                        </div>

                        <div 
                            style={{
                                    fontWeight: "lightre",
                                    fontStyle: "normal", 
                                    fontSize: 15,
                                    opacity: 0.5}}>
                        {playerInfo[1].name}, please look away...
                        </div>

                        <SubmitNewWord/>
                    </div>
                    :
                        <div>
                        {printWinner()}
                        <Button 
                            style={{margin: 10, fontSize: 15}}
                            onClick={resetGame} 
                        > 
                                START A NEW GAME
                        </Button>
                        </div>
                }
            </div>



        </div>
    )
}

export default RoundEndPage;