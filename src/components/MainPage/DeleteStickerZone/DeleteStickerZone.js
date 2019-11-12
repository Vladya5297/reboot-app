import React from 'react'
<<<<<<< HEAD:src/components/MainPage/DeleteStickerZone/DeleteStickerZone.js
import {useDrop} from 'react-dnd'
import * as types from '../../../store/itemTypes'
=======
import { useDrop } from 'react-dnd'
import * as types from '../../store/itemTypes'
>>>>>>> 61e4c3bc204ebee7369c9d96729ae6e0e2f8a843:src/components/DeleteStickerZone/DeleteStickerZone.js
import * as style from './DeleteStickerZone.module.css'
import trashIcon from '../../../icons/iconsSVG/TrashIcon.svg'

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
                display: props.isVisible ? "block" : "none",
                backgroundImage: "url(" + trashIcon + ")",
                opacity: isOver ? 1 : 0.5,
            }}
            className={style.wrapper}></div>
    );
}

export default DeleteStickerZone;