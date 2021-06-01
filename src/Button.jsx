function Button(prop){
    return(
        <button className={`button ${prop.value === '=' ? 'equal' : '' }`}>{prop.value}</button>
    );
}

export default Button;