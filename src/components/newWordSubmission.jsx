import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField"

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
                <TextField 
                    id="standard-basic" 
                    variant="filled" 
                    label="Enter a word here..." 
                    color="primary" 
                    style={{ margin: 8 }}
                />                
            </form>
        );
    }
}
 
export default SubmitNewWord;