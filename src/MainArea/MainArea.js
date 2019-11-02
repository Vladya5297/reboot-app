import React from 'react'
import WorkArea from '../WorkArea/WorkArea'
import * as style from './MainArea.module.css'

const MainArea = (props) => {
    return (
    <div className={style.main}>
          <div className={style["work-area-wrapper"]}>
            <div className={style.title}>ПРОДУКТ</div>
            <WorkArea>
                {props.children[0]}
            </WorkArea>
          </div>
          
          <div className={style["work-area-wrapper"]}>
            <div className={style.title}>КЛИЕНТ</div>
            <WorkArea>
                {props.children[1]}
            </WorkArea>
          </div>
        </div>
    );
}

export default MainArea;