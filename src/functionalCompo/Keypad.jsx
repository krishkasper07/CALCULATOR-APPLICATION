import {Button} from './Button';
 export const  Keypad=(props)=>{
    const keys=["7",'8','9','÷','4','5','6','*','1','2','3','-','0','C','+','%','.','(',')','=']
    return(
        <>
        <div className='keypad'>
            {keys.map(el=><Button key={el} value={el} Click={props.click}/>)}
            </div>
        </>
    );
}
