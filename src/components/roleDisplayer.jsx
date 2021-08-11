import React, { Component } from 'react'

class RoleDisplayer extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <role-displayer>
                    YOU'RE PLAYING AS THE {this.props.role}.
                </role-displayer>
            </React.Fragment>
         );
    }
}
 
export default RoleDisplayer;