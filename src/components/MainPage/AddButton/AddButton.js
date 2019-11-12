import React from 'react';
import * as style from './AddButton.module.css';

const AddButton = (props) => {
    let isActive = !props.stickers.length;
    return (
        <div className={style.wrapper} 
        style={{pointerEvents: isActive ? "auto" : "none"}}
        onClick={isActive ? props.addSticker : undefined}>
            <span className={style.text}> {props.text} </span>
            <span className={style.icon} style={{backgroundImage: "url("+props.icon+")"}}> </span>
        </div>
    )
}

export default AddButton;
