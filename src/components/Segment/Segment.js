import React from 'react';
import * as style from './Segment.module.css'

const Segment = (props) => {
    // сюда подключаем библиотеку
    return (
        <div className={style.wrapper}>
            {props.children}
        </div>
    )
}

export default Segment;