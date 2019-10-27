import React from 'react';
import * as style from './TwiceArea.module.css'

const TwiceArea = (props) => {
    return (
        <div className={style.wrapper}>

            <div className={style.top}>{props.top}</div>
            <div className={style.bottom}>{props.bottom}</div>
            <div className={style.icon}>{props.icon}
                <img src="http://www.placebacon.net/400/300" />
            </div>

        </div>
    )
}

export default TwiceArea;