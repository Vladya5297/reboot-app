import React from 'react';
import { useDrop } from 'react-dnd'
import Sticker from '../Sticker/StickerContainer'
import * as types from '../../store/itemTypes'
import style from './Segment.module.css'
import Grid from '../Grid/Grid';
import typeProperties from '../../store/typeProperties'

const Segment = (props) => {
    // Собираем все имеющиеся типы стикеров
    let typesArr = [];
    for (let key in types) {
        typesArr.push(types[key]);
    }
    // Исключаем текущий, чтобы не было конфликтов между сегментом и сеткой
    typesArr = typesArr.filter((elem) => elem !== props.type);
    // Подключаем библиотеку
    const [{ isOver }, drop] = useDrop({
        accept: typesArr,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
        drop: () => ({ type: props.type }),
    });
    // Сортируем стикеры по их position
    const stickers = props.stickers
        .sort((a, b) => a.position - b.position)
        .map((elem) => (
            <Sticker
                key={elem.id}
                header={elem.header}
                content={elem.content}
                position={elem.position}
                id={elem.id}
                type={elem.type} />
        ));

    return (
        <div className={style.wrapper} ref={drop} 
        onMouseLeave={()=>props.changeHover("")}
        onMouseOver={()=>{props.hover !== props.type && props.changeHover(props.type)}}
            style={{
                boxShadow:
                    isOver ? "inset 0 0 1px 3px " + typeProperties[props.type].color : "none"
            }}>

            {props.isOnTop && props.children}
            <Grid type={props.type} slots={typeProperties[props.type].slots}>
                {stickers}
            </Grid>
            {!props.isOnTop && props.children}
        </div>
    )
}

export default Segment;