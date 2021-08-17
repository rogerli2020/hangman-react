import React, { Component } from 'react'
import ScoreBoard from "./scoreBoard"
import Card from '@material-ui/core/Card';
import SubmitNewWord from "./newWordSubmission"

class ConcludePage extends Component {

    render() { 
        return ( 

            <main-board class="overlay">

                <div>
                <h3>CORRECT WORD: 
                    <Card>
                        {this.props.currState.correctWord}
                    </Card>
                </h3>

                <player-score-cards-container>
                <ScoreBoard 
                    playerInfo={this.props.currState.players[0]} 
                    surrendered={this.props.currState.surrendered}
                />
                <ScoreBoard 
                    playerInfo={this.props.currState.players[1]} 
                    surrendered={this.props.currState.surrendered}
                />
                </player-score-cards-container>

                <h5>
                    {this.props.currState.players[0].name}, enter a new word to continue game:
                </h5>
                    
                <SubmitNewWord/>

                </div>

            </main-board>
         );
    }
}
 
export default ConcludePage;