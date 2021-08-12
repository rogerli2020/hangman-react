import React, { Component } from 'react'

class WordBoard extends Component {

    getString = () => {
        var returnString = ""
        for(var i = 0; i < this.props.word.length; i++) {
            returnString += this.props.word[i]
            returnString += " "
        }
        return returnString
    }

    getState = () => {
        if (this.props.gameState == "n") return "notext";
        if (this.props.gameState == "e") return "ended";
        if (this.props.gameState == "s") return "surrendered";
        return null;
    }

    render() {
        return ( 
            <word-board class={this.getState()}>
                <word-boardtext class={this.getState()}>
                        {this.props.word === null ? "a word is being selected..." : 
                        this.getString()}
                </word-boardtext>
            </word-board>
         );
    }
}
 
export default WordBoard;