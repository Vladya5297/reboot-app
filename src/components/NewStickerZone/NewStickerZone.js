import React from 'react'
import Sticker from '../Sticker/Sticker'
import * as style from './NewStickerZone.module.css'

const NewStickerZone = (props)=>{
    return (
        <div className={style.wrapper}>
            {props.sticker.map((elem)=>{
                return (
                    <Sticker />
                );
            })}
        </div>
    );
}

export default NewStickerZone;