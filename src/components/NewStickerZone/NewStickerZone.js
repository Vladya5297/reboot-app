import React from 'react'
import Sticker from '../Sticker/StickerContainer'
import * as style from './NewStickerZone.module.css'

const NewStickerZone = (props)=>{
    return (
        <div className={style.wrapper}>
            {props.sticker.map((elem)=>{
                return (
                    <Sticker id={elem.id} type={elem.type}/>
                );
            })}
        </div>
    );
}

export default NewStickerZone;