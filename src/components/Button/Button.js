import React from 'react'
import style from './Button.module.css'

const Button = (props) => {
    const classes = `${style.button} ${props.isAccent ? style.accent : style.regular}`; 
    return (
        <div onClick={props.clickHandler} 
        className={classes}
        style={{
            cursor: props.clickHandler ? "pointer" : "default"
        }}>
            {props.children}
        </div>
    )
}

export default Button;