import React from 'react';
import * as style from './Header.module.css'

const Header = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.left}>{props.left}</div>
            <div className={style.right}>{props.right}</div>
        </div>
    );
}

export default Header;