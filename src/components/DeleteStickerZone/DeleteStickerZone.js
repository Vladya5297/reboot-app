import React from 'react'
import * as style from './DeleteStickerZone.module.css'

const DeleteZone = (props) => {
return (
    <div
    style={{
        display: props.isHidden ? "none" : "block"
    }} 
    className={style.wrapper}></div>
);
}

export default DeleteZone;