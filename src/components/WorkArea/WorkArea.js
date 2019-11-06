import React from 'react';
import * as style from './WorkArea.module.css'

const WorkArea = (props) => {
    // topElemCount указывает, сколько дочерних элементов будет помещено в верхний блок
    // остальные - в нижний
    return (
        <div className={style.wrapper}>
            {props.children}
            <div className={style.icon} style={{backgroundImage: "url("+props.icon+")"}}></div>
        </div>
    )
}

export default WorkArea;