import React from 'react';
import * as style from './Header.module.css'

// Шапка
const Header = (props) => {
    return (
        // переданные в компонент дети делятся методом slice
        // leftElemCount указывает, сколько дочерних элементов будет спозиционированно слева
        // остальные - справа, последний переданный - по центру 
        <div className={style.wrapper}>
            <div className={style.left}>{props.children.slice(0, props.leftElemCount)}</div>
            <div className={style.center}>{props.children.slice(-1)}</div>
            <div className={style.right}>{props.children.slice(props.leftElemCount, -1)}</div>
        </div>
    );
}

export default Header;