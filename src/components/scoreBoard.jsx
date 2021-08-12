import React, { Component } from 'react';
import Card from '@material-ui/core/Card';


class ScoreBoard extends Component {

    render() { 
        return ( 
            <Card variant="outlined">
                <b> {this.props.currState.players[0].name}'s SCORE: </b>
                <li>[Base Score]: {this.props.scores[0]}</li>
                <li>[Reward]: {this.props.scores[1]}</li>
                <li>[Compensation]: {this.props.scores[3]}</li>
                <li>[Penalty]: -{this.props.scores[2]}</li>
                <li>[TOTAL]: {this.props.scores[4]}</li>
                <br/>
                [CUM.TOTAL] : {this.props.currState.players[0].score}
            </Card> 
        );
    }
}
 
export default ScoreBoard;