import React from 'react'
import WorkArea from '../WorkArea/WorkArea'
import * as style from './MainArea.module.css'

const MainArea = (props) => {
    return (
    <div className={style.main}>
          <div className={style["work-area-wrapper"]}>
            <h1>ПРОДУКТ</h1>
            <WorkArea topElemCount="2">
                {props.children.slice(0,props.segmentsNumLeft)}
            </WorkArea>
          </div>
          
          <div className={style["work-area-wrapper"]}>
            <h1>КЛИЕНТ</h1>
            <WorkArea topElemCount="2">
                {props.children.slice(props.segmentsNumLeft)}
            </WorkArea>
          </div>
        </div>
    );
}

export default MainArea;