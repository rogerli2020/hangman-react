import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"



class GameStartPage extends Component {
    state = {    
        firstName: 0, // 0 - none, 1 - error, 2 - accepted.
        secondName: 0,
    }

    handleSubmit1 = (event) => {
        event.preventDefault()
        const nameEntered = event.target[0].value

        if (nameEntered.length === 0) {this.setState( {firstName: 1})}
        else {
            this.setState( {firstName: 2})
            this.props.setName(1, nameEntered)
         }

    }

    handleSubmit2 = (event) => {
        event.preventDefault()
        const nameEntered = event.target[0].value
        console.log(nameEntered)

        if (nameEntered.length === 0) {this.setState( {secondName: 1} )}
        else {
            this.setState( {secondName: 2}) 
            this.props.setName(2, nameEntered)
        }
    }


        player1InputStyles = [<TextField 
            id="standard-basic" 
            variant="filled" 
            label="Player1's name" 
            color="primary" 
            style={{ margin: 8 }}
        />,
        <TextField 
            error
            id="standard-basic" 
            variant="filled" 
            label="Player1's name" 
            color="primary" 
            style={{ margin: 8 }}
            helperText="Name cannot be blank."
        /> ,
        <TextField
            label="Name Accepted!"
            variant="outlined"
            id="validation-outlined-input"
            style={{ margin: 8 }}
      />
    ]

        player2InputStyles = [<TextField 
            id="standard-basic" 
            variant="filled" 
            label="Player2's name" 
            color="primary" 
            style={{ margin: 8 }}
        />,
        <TextField 
            error
            id="standard-basic" 
            variant="filled" 
            label="Player1's name" 
            color="primary" 
            style={{ margin: 8 }}
            helperText="Name cannot be blank."
        /> ,
        <TextField
            label="Name Accepted!"
            variant="outlined"
            id="validation-outlined-input"
            style={{ margin: 8 }}

    />
    ]


    render() { 
        return ( 
            <main-board class="overlay">
                <div>
                    <h1>Let's Play Hangman!!!</h1>

                    <form onSubmit={this.handleSubmit1}>
                        {this.player1InputStyles[this.state.firstName]}
                    </form>

                    <form onSubmit={this.handleSubmit2}>
                        {this.player2InputStyles[this.state.secondName]}
                    </form>

                    <br/>

                    <Button 
                        color="primary"
                        variant="outlined"
                        onClick={this.props.onClick}>
                        START GAME!
                    </Button>
                </div>
            </main-board>
         );
    }
}
 
export default GameStartPage;