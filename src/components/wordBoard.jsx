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

    render() {
        return ( 
            <word-board>
                <word-boardtext class={this.props.word===null ?
                    "notext" : ""}>
                        {this.props.word === null ? "a word is being selected..." : 
                        this.getString()}
                </word-boardtext>
            </word-board>
         );
    }
}
 
export default WordBoard;