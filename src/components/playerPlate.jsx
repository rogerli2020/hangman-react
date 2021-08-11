import React, { Component } from 'react'

class PlayerPlate extends Component {

    render() { 
        return (
            <React.Fragment>
                <player-plate class='base'>
                <img class="playerAvatar" src={this.props.avatar}></img>
                <player-plate class='playerName'>{this.props.name}</player-plate>
                <player-plate class='score'>SCORE: {this.props.score}</player-plate>
                </player-plate>
            </React.Fragment>
         );
    }
}
 
export default PlayerPlate;