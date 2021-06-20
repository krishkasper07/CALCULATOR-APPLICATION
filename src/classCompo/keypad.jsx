import Button from './Button.jsx';
import React, { Component } from 'react';
class Keypad extends Component {
    render() { 
        const keys=["7",'8','9','÷','4','5','6','*','1','2','3','-','0','C','+','%','.','(',')','=']
    return (  
         <div className="keypad">
        
        {keys.map(el=> <Button key={el} value={el}onClick={this.props.onClick}>
            </Button>)}
        </div>);
    }
}
 
export default Keypad;