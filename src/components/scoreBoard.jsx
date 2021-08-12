import React, { Component } from 'react';

class ScoreBoard extends Component {

    render() { 
        return ( 
            <score-board>
                <b>{this.props.currState.players[0].name}'s SCORE:</b> <br/>
                [Base Score]: {this.props.scores[0]}<br/>
                [Reward]: {this.props.scores[1]}<br/>
                [Compensation]: {this.props.scores[3]}<br/>
                [Penalty]: -{this.props.scores[2]}<br/>
                [TOTAL]: {this.props.scores[4]} <br/>
                <br/>
                [CUM.TOTAL] : {this.props.currState.players[0].score}
            </score-board> 
        );
    }
}
 
export default ScoreBoard;