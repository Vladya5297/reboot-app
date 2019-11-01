import React from 'react';
import * as style from './WorkAreaSegment.module.css'

const WorkAreaSegment = (props) => {
    // сюда подключаем библиотеку
    return (
        <div className={style.wrapper}>
            {props.children}
        </div>
    )
}

export default WorkAreaSegment;