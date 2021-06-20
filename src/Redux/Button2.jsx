import { Component } from "react";
import { connect } from "react-redux";

class  Button extends Component{
    render(){
    return(
        <div className={`button ${this.props.value === '='  ? 'equal' : '' }`}
        onClick={()=>this.props.buttonClicked(this.props.value)}>
            {this.props.value}   
        </div>
    );}
}
function mapStateToProps(){
    return{};
}
function mapDispatchToProps(dispatch){
    return{
        buttonClicked: function(value){
              if(value === '='){
                  dispatch({type:'Equal_ButtonClicked'})
            }else if(value === 'C'){
                dispatch({type:'Clear_ButtonClicked'})
            }else{
                ///payload is nothing but the value of button eg:1,2,= ..etc//
                dispatch({type:'Button_Clicked',payload:value})   
            }
            
        }
    }
}

//if we want we can give it has a null args in the connect function in the place of 1arg mapStateToprops if we dont have any returns from it simply ignore ir by seting it to null;
export default connect(mapStateToProps,mapDispatchToProps) (Button);