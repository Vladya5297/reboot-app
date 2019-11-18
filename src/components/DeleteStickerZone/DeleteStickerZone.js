import React from 'react'
import { useDrop } from 'react-dnd'
import * as types from '../../store/itemTypes'
import * as style from './DeleteStickerZone.module.css'
import trashIcon from '../../icons/iconsSVG/TrashIcon.svg'

const DeleteStickerZone = (props) => {
    // массив, хранящий все типы, потому что удалить можно каждый стикер
    let typesArr = [];
    for (let key in types) {
        typesArr.push(types[key]);
    }
    const [{ isOver }, drop] = useDrop({
        accept: typesArr,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
        drop: () => ({ type: "DeleteStickerZone" }),
    });
    return (
        <div ref={drop}
            style={{
                bottom: props.isVisible ? "5vw" : "-8vw",
                backgroundImage: "url(" + trashIcon + ")",
                opacity: isOver ? 1 : 0.5,
            }}
            className={style.wrapper}></div>
    );
}

export default DeleteStickerZone;