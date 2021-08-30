import React, { useState } from 'react'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { useDispatch } from "react-redux";
import { setPlayer1Name, setPlayer2Name, startEntireGame } from "../actions"

function GameStartPage() {
    const [firstNameState, setFirstNameState] = useState(0);
    const [secondNameState, setSecondNameState] = useState(0);
    const dispatch = useDispatch();
     // 0 - none, 1 - error, 2 - accepted.

    const handleSubmit1 = (event) => {
        event.preventDefault()
        const nameEntered = event.target[0].value

        if (nameEntered.length === 0) { setFirstNameState(1) }
        else {
            setFirstNameState(2)
            dispatch(setPlayer1Name(nameEntered));
         }
    }

    const handleSubmit2 = (event) => {
        event.preventDefault()
        const nameEntered = event.target[0].value

        if (nameEntered.length === 0) { setSecondNameState(1) }
        else {
            setSecondNameState(2)
            dispatch(setPlayer2Name(nameEntered));
        }
    }


    const player1InputStyles = [<TextField 
            id="standard-basic" 
            label="Enter Player1's name" 
            color="primary" 
            style={{ margin: 8 }}
        />,
        <TextField 
            error
            id="standard-basic" 
            label="Enter Player1's name" 
            color="primary" 
            style={{ margin: 8 }}
            helperText="Name cannot be blank."
        /> ,
        <TextField
            label="Name Accepted!"
            id="validation-outlined-input"
            style={{ margin: 8 }}
      />
    ]

    const player2InputStyles = [<TextField 
            id="standard-basic" 
            label="Enter Player2's name" 
            color="primary" 
            style={{ margin: 8 }}
        />,
        <TextField 
            error
            id="standard-basic" 
            label="Enter Player1's name" 
            color="primary" 
            style={{ margin: 8 }}
            helperText="Name cannot be blank."
        /> ,
        <TextField
            label="Name Accepted!"
            id="validation-outlined-input"
            style={{ margin: 8 }}

    />
    ]

    const startGame = () => {
        dispatch(startEntireGame());
    }

        return ( 
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
                        zIndex: 5,
                        alignItems: "center",
                        justifyContent: "center",
                        fontStyle: "italic",
                        fontSize: 25,
                        color: "rgb(6, 54, 55)",
                        textAlign: "center",
                    }
                }
            >
                <div>
                    <h1>Hangman</h1>

                    <form id="firstPlayerName" onSubmit={handleSubmit1}>
                        {player1InputStyles[firstNameState]}
                        <Button 
                            variant="outlined"
                            type="submit" 
                            value="Submit" 
                            color="primary"
                            style={{ margin: 8, fontSize: 15}}>
                            SUBMIT
                        </Button>
                    </form>

                    <form id="secondPlayerName" onSubmit={handleSubmit2}>
                        {player2InputStyles[secondNameState]}
                        <Button 
                            variant="outlined"
                            type="submit" 
                            value="Submit" 
                            color="primary"
                            style={{ margin: 8, fontSize: 15}}>
                            SUBMIT
                        </Button>
                    </form>

                    <br/>

                    <Button 
                        id="submit"
                        color="primary"
                        variant="outlined"
                        onClick={startGame}
                        style={{ margin: 20, fontSize: 20, fontWeight: "bold"}}>
                        START GAME
                    </Button>
                </div>
            </div>
         );
}
 
export default GameStartPage;