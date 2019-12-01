import React from 'react'
import style from './Button.module.css'

const Button = (props) => {
    const classes = `${style.button} ${props.isAccent ? style.accent : style.regular}`; 
    return (
        <button onClick={props.clickHandler} 
        className={classes}
        disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button;