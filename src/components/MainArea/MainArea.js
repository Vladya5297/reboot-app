import React from 'react'
import WorkArea from '../WorkArea/WorkArea'
import NewStickerZone from '../NewStickerZone/NewStickerZoneContainer'
import DeleteStickerZone from '../DeleteStickerZone/DeleteStickerZoneContainer'
import * as style from './MainArea.module.css'

import man  from '../../icons/iconsSVG/КлиектИконка.svg'
import light from '../../icons/iconsSVG/ЛампочкаИконка.svg'

const MainArea = (props) => {
    console.log(props.children)
    return (
    <div className={style.main}>
          <div className={style["work-area-wrapper"]}>
            <div className={style.title}>ПРОДУКТ</div>
            <WorkArea icon = {light}>
                {props.children[0]}
            </WorkArea>
          </div>
          
          <NewStickerZone />
          <DeleteStickerZone />

          <div className={style["work-area-wrapper"]}>
            <div className={style.title}>КЛИЕНТ</div>
            <WorkArea icon = {man}>
                {props.children[1]}
            </WorkArea>
          </div>
        </div>
    );
}

export default MainArea;