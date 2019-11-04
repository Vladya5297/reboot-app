import React from 'react';
import * as style from './WorkArea.module.css'

const WorkArea = (props) => {
    // topElemCount указывает, сколько дочерних элементов будет помещено в верхний блок
    // остальные - в нижний
    return (
        <div className={style.wrapper}>
            <div className={style.top}>{props.children.slice(0, 2)}</div>
            <div className={style.bottom}>{props.children.slice(2)}</div>
            <div className={style.icon}>
                <img alt="icon" src={props.icon} />
            </div>

        </div>
    )
}

export default WorkArea;