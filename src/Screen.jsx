import React, { Component } from 'react';
class Screen extends Component {
    render() { 
        return ( <>
        <div className="screen">
              {this.props.expression}
              </div>
        </> );
    }
}
 
export default Screen;