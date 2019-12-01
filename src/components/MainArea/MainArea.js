import React from 'react'
import NewStickerZone from '../NewStickerZone/NewStickerZoneContainer'
import DeleteStickerZone from '../DeleteStickerZone/DeleteStickerZoneContainer'
import * as style from './MainArea.module.css'

const MainArea = (props) => {
  return (
    <div className={style.main}>
      
      <div className={style["work-area-wrapper"]}>
        <div className={style.title}>ВАШ ПРОДУКТ</div>
        <div className={style["work-area"]}>
          {props.children[0]}
        </div>
      </div>

      <NewStickerZone />
      <DeleteStickerZone />

      <div className={style["work-area-wrapper"]}>
        <div className={style.title}>ВАШ КЛИЕНТ</div>
        <div className={style["work-area"]}>
          {props.children[1]}
        </div>
      </div>
      
    </div>
  );
}

export default MainArea;