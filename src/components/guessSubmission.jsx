import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField"

class SubmitGuess extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleGuessSubmission(event.target[0].value)
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField 
                    id="standard-basic" 
                    variant="filled" 
                    label="Enter your guess here..." 
                    color="primary" 
                    style={{ margin: 8 }}
                />      
            </form>
        );
    }
}
 
export default SubmitGuess;