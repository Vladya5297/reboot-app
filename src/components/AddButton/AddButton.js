import React from 'react';
import * as style from './AddButton.module.css';

const AddButton = (props) => {
    let isActive = !props.stickers.length;
    return (
        <div className={style.wrapper} 
        style={{pointerEvents: isActive ? "auto" : "none"}}
        onClick={isActive ? props.addSticker : undefined}>
            <div className={style.text}>{props.text}
            </div>
            <div className={style.icon}>
                {props.icon}
            </div>
        </div>
    )
}

export default AddButton;