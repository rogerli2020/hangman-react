import React, { Component } from 'react'

class Tips extends Component {

    render() { 
        return ( 
            <game-overlay onClick={this.props.onClick}>
                TIPS FOR MAXIMIZING YOUR SCORE: <br/>
                <br/>
                1. Use as less hints (not implemented yet) as possible.  <br/>
                2. Try to minimize the number of letters you guess.  <br/>
                3. Once you're sure what the word is, enter it directly in the form. Do not  <br/>
                enter it using the on-screen keyboard.
                <br/>
                <br/>
                CLICK ANYWHERE TO CLOSE
                
            </game-overlay>
         );
    }
}
 
export default Tips;