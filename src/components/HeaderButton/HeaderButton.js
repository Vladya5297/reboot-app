import React from 'react';
import * as style from './HeaderButton.module.css'

// Кнопка шапки
// в параметрах принимает иконку и текст
const HeaderButton = (props) => {
    return (
        <div className={style.wrapper}>
            <span>
                <img className={style.icon} src= {props.icon}/>
            </span>
            <span className={style.text}>{props.text}</span>
        </div>
    );
}

export default HeaderButton;