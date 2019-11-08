import React from 'react'

const EditWindow = (props) => {
      return (
        <div className={style.window}>
              <div className={style.windowContent}>
                    <div className={style.windowHeader}>
                          <p>Выгода данного продукта</p>
                          <img src="#">
                    </div>
                    <div className={style.windowBody}>
                      <textarea className={style.stickerTittle} placeholder="Заголовок стикера..."></textarea>
                      <textarea className={style.stickerDescription} placeholder="Описание проекта..."></textarea>
                    </div>
                    <div className={style.windowFooter}>
                      <button className={style.cancel}>Отмена</button>
                      <button className={style.accept}>Принять</button>
                    </div>
              </div>
        </div>
      )
}
