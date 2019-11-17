import React from 'react'
import Sticker from '../Sticker/StickerContainer'
import * as style from './NewStickerZone.module.css'
import {newSticker} from '../../../store/itemTypes'

const NewStickerZone = (props)=>{
    const stickers = props.sticker.filter(
        (elem)=>{return elem.type === newSticker}
    )[0];
    return (
        <div className={style.wrapper}>
            {stickers && <Sticker 
            header={stickers.header}
            content={stickers.content}
            position={0}
            id={stickers.id} 
            type={stickers.type}/>}
        </div>
    );
}

export default NewStickerZone;