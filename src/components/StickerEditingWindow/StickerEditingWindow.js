import React from 'react'
import * as style from './StickerEditingWindow.module.css'
import typeProperties from '../../store/typeProperties'
import HelpIcon from '../HelpIcon/HelpIcon'

const StickerEditingWindow = (props) => {
    const [header, setHeader] = React.useState(props.sticker.header);
    const [content, setContent] = React.useState(props.sticker.content);
    return (
        <div className={style.blur} onClick={(event) => {
            event.stopPropagation();
            props.closeWindow()
        }}>
            <div className={style.wrapper} onClick={(event) => { event.stopPropagation() }}>
                <div className={style.title}>
                    {typeProperties[props.type].title}
                    <HelpIcon type={props.sticker.type}/>
                    </div>
                <div className={style.body}>
                    <textarea className={style.stickerTittle}
                        placeholder="Заголовок стикера..."
                        value={header}
                        onChange={(event) => setHeader(event.target.value)} />
                    <textarea className={style.stickerDescription}
                        placeholder="Содержание стикера..."
                        value={content}
                        onChange={(event) => setContent(event.target.value)} />
                </div>
                <div className={style.footer}>
                    <div className={style.cancel} onClick={props.closeWindow}>Отмена</div>
                    <div className={style.accept} onClick={()=>{
                        props.closeWindow();
                        props.changeStickerText(props.sticker.id, header, content);
                    }}>Принять</div>
                </div>
            </div>
        </div>
    )
}

export default StickerEditingWindow;