import React from 'react';
import * as style from './AddButton.module.css';

const AddButton = (props) => {
    return (
        <div className={style.wrapper}>
            <span className={style.text}>{props.text}</span>
            <span className={style.icon}>{props.icon}</span>
        </div>
    )
}

export default AddButton;
