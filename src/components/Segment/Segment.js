import React from 'react';
import {useDrop} from 'react-dnd'
import Sticker from '../Sticker/StickerContainer'
import * as types from '../../store/itemTypes'
import * as style from './Segment.module.css'
import Grid from '../Grid/Grid';
import openWideIcon from '../../icons/iconsSVG/OpenWideIcon.svg'

const Segment = (props) => {
    // Собираем все имеющиеся типы стикеров
    let typesArr = [];
    for (let key in types) {
        typesArr.push(types[key]);
    }
    // Исключаем текущий, чтобы не было конфликтов между сегментом и сеткой
    typesArr = typesArr.filter((elem)=>elem !== props.type);
    // Подключаем библиотеку
    const [{isOver}, drop] = useDrop({
        accept: typesArr,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
        drop: () => ({type: props.type}),
      });
    // Сортируем стикеры по их position
const stickers = props.stickers
.sort((a, b)=>a.position-b.position)
.map((elem) => (
    <Sticker
    key={elem.id} 
    header={elem.header}
    content={elem.content}
    position={props.stickers.length}
    id={elem.id}
    type={elem.type} 
    color={props.color}/>
));
// Заголовок позиционируем с помощью отрицательных отступов
// При наведении выводим рамку с цветом сегмента
// Сам стикер помещается в dropzone, чтобы не было бага с иконкой
// Внутри dropzone делаем сетку с указанным числом слотов
// Выводим кнопку "раскрыть на весь экран", если стикеров больше, чем слотов
    return (
        <div className={style.wrapper}>
            <div className={style.title}
                style={{top: props.isOnTop ? "-1.4em" : "auto",
                bottom: props.isOnTop ? "auto" : "-1.4em"}}>
                {props.children}
            </div>
            {isOver && <div 
                className={style.focused} 
                style={{boxShadow: "0 0 5px 2px " + props.color}}
            />}
            <div ref={drop}
            className={style.dropzone}>
                <Grid type={props.type} slots={props.slots}>
                    {stickers}
                </Grid>
            </div>
            {stickers.length > props.slots && <div style={{
                height: "1rem",
                width: "1rem",
                position: "absolute",
                right: "2px",
                top: "2px",
                backgroundImage: "url(" + openWideIcon + ")",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
            }}/>}
        </div>
    )
}

export default Segment;