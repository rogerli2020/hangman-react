import React, { Component } from 'react';

class EachKey extends Component {

    handleClick = () => {
        if (!this.props.used) {
            this.props.handleCharacterClick(this.props.thisChar)
        }
    }

    render() { 

        return ( 
            <each-key 
                class = { this.props.used ? "used" : "" }
                onClick={ this.handleClick }
            >
                {this.props.thisChar}
            </each-key>
         );
    }
}
 
export default EachKey;