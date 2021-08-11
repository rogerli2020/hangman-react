import React, { Component } from 'react';

class ScoreBoard extends Component {

    calcScore = () => {

        const currState = this.props.currState
        const correctCharCount = (new Set(currState.correctWord.split(""))).size
        const wrongCharCount = 26 - correctCharCount

        const baseScore = Math.floor(1000 * (wrongCharCount - currState.falseGuesses.length)/(wrongCharCount))
        const reward = Math.floor(500 * (correctCharCount - currState.correctGuesses.length)/correctCharCount)
        const penalty = 100 * currState.hintCount + 200 * currState.falseGuessCount
        const compensation = 25 * currState.changeCount
        const total = baseScore + reward - penalty + compensation

        return [baseScore, reward, penalty, compensation, total]
    }



    render() { 
        return ( 
            <score-board>
                YOUR SCORE <br/>
                [Base Score]: {this.calcScore()[0]}<br/>
                [Reward]: {this.calcScore()[1]}<br/>
                [Compensation]: {this.calcScore()[3]}<br/>
                [Penalty]: -{this.calcScore()[2]}<br/>
                [TOTAL]: {this.calcScore()[4]} <br/>
                <br/>
                [CUM.TOTAL] : {this.props.currState.players[0].score}
            </score-board> 
        );
    }
}
 
export default ScoreBoard;