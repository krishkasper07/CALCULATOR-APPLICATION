import Button from './Button.jsx';

function Keypad(){
    return <div className="keypad">
    {["7",'8','9','/','4','5','6','*','1','2','3','-','0','.','+','='].map(el=> <Button value={el}/>)}
          </div>
}

export default Keypad;