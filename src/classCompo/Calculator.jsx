import Keypad from './keypad';
import Screen from './Screen.jsx';
import React, { Component } from 'react';
import {evaluate} from "mathjs";
class Calculator extends Component {
    constructor() {
        super();
        this.state = { 
            expression:""
         };
    }
 
    buttonClicked=(e)=>{
        console.log("Button clicked:",e.target.innerText)

        if(e.target.innerText === '='){
        this.setState({expression: evaluate(this.state.expression)});
        return;
   }

   if(e.target.innerText === 'C'){
    this.setState({expression:""});
    return;
}
    this.setState({expression:this.state.expression+e.target.innerText});
}
    render() { 
        return ( 
            <div className="calc">
                <Screen expression={this.state.expression}/>
                <Keypad onClick={this.buttonClicked}/>
                </div>
         );
    }
}

export default Calculator;