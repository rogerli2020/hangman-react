import React, { Component } from 'react'

class SubmitNewWord extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.setWord(event.target[0].value)
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="enter a new word for the guesser..."/>
                <input type="submit"/>
            </form>
        );
    }
}
 
export default SubmitNewWord;