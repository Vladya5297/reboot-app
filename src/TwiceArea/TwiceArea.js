import React from 'react';
import * as style from './TwiceArea.module.css'

const TwiceArea = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.top}>{props.top}</div>
            <div className={style.bottom}>{props.bottom}</div>
        </div>
    );
}

export default TwiceArea;