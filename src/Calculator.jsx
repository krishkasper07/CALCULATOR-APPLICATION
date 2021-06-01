import Keypad from './keypad';
import Screen from './Screen.jsx';
function Calculator(){
    return (<div className="calc">
        <Screen/>
        <Keypad/>
    </div>);
}


export default Calculator;