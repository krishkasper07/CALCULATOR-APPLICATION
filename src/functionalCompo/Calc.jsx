import { Screen } from "./Scr";
import { Keypad } from "./Keypad";
import { useState } from "react";
import { evaluate } from "mathjs";
export const Calc=()=>{
    const[expression,setExp]=useState('');

   const buttonHandleClick=(e)=>{
        if(e.target.innerText === '='){
        setExp(evaluate( expression))
        return;
    } if(e.target.innerText === 'C'){
        setExp('')   
        return;
    }

    setExp(expression+e.target.innerText);

    }

    return(
        <div className='calc'>
        <Screen display={expression}/>
        <Keypad click={buttonHandleClick}/>
        </div>
    );
}