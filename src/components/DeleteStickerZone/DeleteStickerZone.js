import React from 'react'
import {useDrop} from 'react-dnd'
import * as style from './DeleteStickerZone.module.css'

const DeleteStickerZone = (props) => {
    const [{isOver}, drop] = useDrop({
        accept: "NewSticker",
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
        drop: () => ({segment: "DeleteStickerZone"}),
      });
    return (
    <div ref={drop}
        style={{display: props.isHidden ? "none" : "block"}} 
        className={style.wrapper}></div>
    );
}

export default DeleteStickerZone;