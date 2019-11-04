import React from 'react'
import {useDrop} from 'react-dnd'
import * as types from '../../store/itemTypes'
import * as style from './DeleteStickerZone.module.css'

const DeleteStickerZone = (props) => {
    // массив, хранящий все типы, потому что удалить можно каждый стикер
    let typesArr = [];
    for (let key in types) {
        typesArr.push(types[key]);
    }
    const [{isOver}, drop] = useDrop({
        accept: typesArr,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
        drop: () => ({type: "DeleteStickerZone"}),
      });
    return (
    <div ref={drop}
        style={{display: props.isHidden ? "none" : "block"}} 
        className={style.wrapper}></div>
    );
}

export default DeleteStickerZone;