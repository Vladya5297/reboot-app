import React from 'react';
import * as style from './WorkArea.module.css'

const WorkArea = (props) => {
    // topElemCount указывает, сколько дочерних элементов будет помещено в верхний блок
    // остальные - в нижний
    console.log(props);
    return (
        <div className={style.wrapper}>
            <div className={style.top}>{props.children.slice(0, 2)}</div>
            <div className={style.bottom}>{props.children.slice(2)}</div>
            <div className={style.icon}>{props.icon}
                <img alt="icon" src="http://www.placebacon.net/400/300" />
            </div>

        </div>
    )
}

export default WorkArea;