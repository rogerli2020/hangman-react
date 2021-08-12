import React, { Component } from 'react'

class RoleDisplayer extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <role-displayer>
                    {this.props.player.name} is playing as the Guesser.
                </role-displayer>
            </React.Fragment>
         );
    }
}
 
export default RoleDisplayer;