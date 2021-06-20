export const Button=(props)=>{
    return(
        <button className={`button ${props.value === '=' ? 'equal' : '' }`}onClick={props.Click}>{props.value}</button>
    );
}