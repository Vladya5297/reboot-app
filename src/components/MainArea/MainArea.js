import React from 'react'
import WorkArea from '../WorkArea/WorkArea'
import NewStickerZone from '../NewStickerZone/NewStickerZoneContainer'
import DeleteStickerZone from '../DeleteStickerZone/DeleteStickerZoneContainer'
import * as style from './MainArea.module.css'

import clientIcon  from '../../icons/iconsSVG/ClientIcon.svg'
import bulbIcon from '../../icons/iconsSVG/BulbIcon.svg'

const MainArea = (props) => {
    return (
    <div className={style.main}>
          <div className={style["work-area-wrapper"]}>
            <div className={style.title}>ВАШ ПРОДУКТ</div>
            <WorkArea icon = {bulbIcon}>
                {props.children[0]}
            </WorkArea>
          </div>
          
          <NewStickerZone />
          <DeleteStickerZone />

          <div className={style["work-area-wrapper"]}>
            <div className={style.title}>ВАШ КЛИЕНТ</div>
            <WorkArea icon = {clientIcon}>
                {props.children[1]}
            </WorkArea>
          </div>
        </div>
    );
}

export default MainArea;