import { evaluate } from "mathjs";
function CalculatorReducer(state={expression:''},action){
    switch(action.type){
        // example for 1 is the current exp and action payloadthe button to be clicked example:+
        // then the exp will be 1+
        case "Button_Clicked":
            console.log("buton clicked")
            return{...state,expression:state.expression+action.payload.toString()}

        case "Equal_ButtonClicked":  
        return {...state, expression: evaluate(state.expression)}  

        case "Clear_ButtonClicked":
            return {...state, expression: ''}  
            
        default :
        return state;
    }

}

export default CalculatorReducer;