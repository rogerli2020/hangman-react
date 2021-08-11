import React, { Component } from 'react'

class SubmitGuess extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleGuessSubmission(event.target[0].value)
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="enter your guess here..."/>
                <input type="submit"/>
            </form>
        );
    }
}
 
export default SubmitGuess;