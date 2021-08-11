import React, { Component } from 'react'
import EachRowOfKeys from './eachRowOfKeys';

class Keyboard extends Component {

    // this.props: usedList

    checkEachChar = (eachChar) => {
        const { falseGuesses, correctGuesses } = this.props;
        
        if (falseGuesses.indexOf(eachChar) !== -1 ||
            correctGuesses.indexOf(eachChar) !== -1 ) {
                return 
        } else {
            return
        }
    }

    overlay = () => {
        if (!this.props.isReady) {
        return <keyboard-panel class="overlay"><br/><br/><br/>waiting for the Executor to select a word...</keyboard-panel>}
    }

    listOfChars=[
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['Z','X','C','V','B','N','M']
    ]

    test=['A','B','C','R']
    key=0

    render() { 
        return ( 
            <keyboard-panel>
                {this.overlay()}
                {
                    this.listOfChars.map(
                        eachRow => (
                            <EachRowOfKeys 
                                key={this.key++}
                                rowOfKeys={eachRow}
                                usedList={this.props.usedList}
                                handleCharacterClick={this.props.handleCharacterClick}
                            />
                        )
                    )
                }
            </keyboard-panel>
         );
    }
}
 
export default Keyboard;