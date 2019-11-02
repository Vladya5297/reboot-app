import React from 'react';
import * as style from './Header.module.css'

// Шапка
const Header = (props) => {
    return (
        // переданные в компонент дети делятся методом slice
        // первый переданный массив - левые кнопки
        // второй - правые
        // третий - по центру
        <div className={style.wrapper}>
            <div className={style.left}>{props.children.slice(0, 1)}</div>
            <div className={style.center}>{props.children.slice(2)}</div>
            <div className={style.right}>{props.children.slice(1, 2)}</div>
        </div>
    );
}

export default Header;