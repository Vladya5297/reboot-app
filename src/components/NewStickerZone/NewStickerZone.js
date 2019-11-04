import React from 'react'
import Sticker from '../Sticker/StickerContainer'
import * as style from './NewStickerZone.module.css'

const NewStickerZone = (props)=>{
    return (
        <div className={style.wrapper}>
            {props.sticker && <Sticker 
            header={props.sticker.header}
            content={props.sticker.content}
            position={0}
            id={props.sticker.id} 
            type={props.sticker.type}/>}
        </div>
    );
}

export default NewStickerZone;