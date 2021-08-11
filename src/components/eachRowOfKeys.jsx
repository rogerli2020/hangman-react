import React, { Component } from 'react'
import EachKey from './eachKey';

class EachRowOfKeys extends Component {

    // props: list of chars, list of used chars.
    key=0

    render() { 
        return ( 
            <each-row-of-keys>
                {
                    this.props.rowOfKeys.map(
                        eachChar => (
                            <EachKey 
                                key={this.key++}
                                used={this.props.usedList.includes(eachChar) ? true : false}
                                thisChar={eachChar}
                                handleCharacterClick={this.props.handleCharacterClick}
                            />
                        )
                    )
                }
            </each-row-of-keys>
         );
    }
}
 
export default EachRowOfKeys;