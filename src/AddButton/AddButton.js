import React from 'react';
import * as style from './AddButton.module.css';

const AddButton = (props) => {
    return (
        <div className={style.wrapper}>
            <span className={style.plus}>{props.icon}</span>
            <span className={style.text}>{props.text}</span>
        </div>
    )
}

export default AddButton;