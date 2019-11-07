import React from 'react';
import {useDrop} from 'react-dnd'
import Sticker from '../Sticker/StickerContainer'
import * as types from '../../store/itemTypes'
import * as style from './Segment.module.css'
import Grid from '../Grid/Grid';

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
    transparent={elem.transparent}
    color={props.color}/>
));

const title = <div className={style.title}>
{props.children}
{stickers.length > props.slots && <div className={style.openWide}/>}
</div>
// Заголовок позиционируем с помощью отрицательных отступов
// При наведении выводим рамку с цветом сегмента
// Сам стикер помещается в dropzone, чтобы не было бага с иконкой
// Внутри dropzone делаем сетку с указанным числом слотов
// Выводим кнопку "раскрыть на весь экран", если стикеров больше, чем слотов
    return (
        <div className={style.wrapper}>
            {isOver && <div 
                className={style.focused} 
                style={{boxShadow: "0 0 5px 2px " + props.color}}
            />}
            <div ref={drop}
            className={style.dropzone}>
                {props.isOnTop && title}
                <Grid type={props.type} slots={props.slots}>
                    {stickers}
                </Grid>
                {!props.isOnTop && title}
            </div>
        </div>
    )
}

export default Segment;