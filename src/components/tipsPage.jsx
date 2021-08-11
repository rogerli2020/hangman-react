import React, { Component } from 'react'

class Tips extends Component {

    render() { 
        return ( 
            <game-overlay onClick={this.props.onClick}>
                TIPS FOR MAXIMIZING YOUR SCORE: <br/>
                <br/>
                1. Use as less tips as possible.  <br/>
                2. Try to minimize the number of letters you guess.  <br/>
                3. Once you're sure what the word is, hit the "I KNOW WHAT THE WORD IS"  <br/>
                button and enter it. Do not enter it on the main screen or else you  <br/>
                will lose all your reward points.  <br/>
                <br/>
                <br/>
                CLICK ANYWHERE TO CLOSE
                
            </game-overlay>
         );
    }
}
 
export default Tips;