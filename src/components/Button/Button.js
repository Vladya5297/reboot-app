import React from 'react'
import style from './Button.module.css'

const Button = (props) => {
    const classes = [
    style.button,
    props.isAccent ? style.accent : style.regular,
    props.disabled && style.disabled
    ].join(" ");
    return (
        <div onClick={props.clickHandler} 
        className={classes}>
            {props.children}
        </div>
    )
}

export default Button;