import { Component } from "react";

class  Button extends Component{
    render(){
    return(
        <div className={`button ${this.props.value === '='  ? 'equal' : '' }${this.props.value === '+'  ? 'equal' : '' }`}
        onClick={this.props.onClick}>
            {this.props.value}   
        </div>
    );}
}

export default Button;