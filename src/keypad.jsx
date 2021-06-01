import Button from './Button.jsx';

function Keypad(){
    return (<div className="keypad">
        <Button value="7"/>
        <Button value="8"/>
        <Button value="9"/>
        <Button value="&divide;"/>
        <Button value="4"/>
        <Button value="5"/>
        <Button value="6"/>
        <Button value="*"/>
        <Button value="1"/>
        <Button value="2"/>
        <Button value="3"/>
        <Button value="-"/>
        <Button value="0"/>
        <Button value="."/>
        <Button value="+"/>
        <Button value="="/>
        </div>
    );
}

export default Keypad;