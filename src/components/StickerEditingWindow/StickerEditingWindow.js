import React from 'react'
import * as style from './StickerEditingWindow.module.css'
import typeProperties from '../../store/typeProperties'

const StickerEditingWindow = (props) => {
    return (
        <>
            {props.isActive && <div className={style.blur} onClick={(event) => {
                event.stopPropagation();
                props.closeWindow()
            }}>
                <div className={style.wrapper} onClick={(event) => { event.stopPropagation() }}>
                    <div className={style.title}>{typeProperties[props.type].title}</div>
                    <div className={style.body}>
                        <textarea className={style.stickerTittle} placeholder="Заголовок стикера..."></textarea>
                        <textarea className={style.stickerDescription} placeholder="Содержание стикера..."></textarea>
                    </div>
                    <div className={style.footer}>
                        <div className={style.cancel} onClick={props.closeWindow}>Отмена</div>
                        <div className={style.accept}>Принять</div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default StickerEditingWindow;