import Button from './Button2';
function Keypad () {
    
        const keys=["7",'8','9','÷','4','5','6',' *','1','2','3','-','0','C','+','%','.','(',')','=','sin','tan','cos','log']
    return (  
         <div className="keypad">
        
        {keys.map(el=> <Button key={el} value={el}>
            </Button>)}
        </div>);
    
}
 
export default Keypad;