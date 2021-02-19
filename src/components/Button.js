const Button = ({ color, text, onClick }) => {
    return(
        <button 
        className='btn' onClick={onClick} 
        style={{background: color}}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button