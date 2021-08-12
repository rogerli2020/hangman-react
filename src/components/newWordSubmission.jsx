import React, { Component } from 'react'

class SubmitNewWord extends Component {

    checkValidity = (inp) => {
        if (/[^a-zA-Z]/.test(inp) || inp.length < 3) return false;
        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.checkValidity(event.target[0].value)) {
            window.alert("[NOT ACCEPTED] Please enter a valid English word that is longer than 3 characters.")
        } else {
            this.props.setWord(event.target[0].value)
            event.target[0].value = ""
        }
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