import React from 'react'
import * as style from './StickerEditingWindow.module.css'
import typeProperties from '../../store/typeProperties'
import HelpIcon from '../HelpIcon/HelpIcon'
import Button from '../Button/Button'

const StickerEditingWindow = (props) => {
    const [header, setHeader] = React.useState(props.sticker.header);
    const [content, setContent] = React.useState(props.sticker.content);
    return (
        <div className={style.blur} onClick={(event) => {
            event.stopPropagation();
        }}>
            <div className={style.wrapper} onClick={(event) => { event.stopPropagation() }}>

                <div className={style.title}>
                    {typeProperties[props.type].title}
                    <HelpIcon type={props.sticker.type} />
                </div>

                <div className={style.textareaContainer}>
                    Тема
                    <textarea maxLength="37"
                        className={style.stickerTittle}
                        placeholder="Назовите ваш стикер"
                        value={header}
                        onChange={(event) => setHeader(event.target.value)} />
                </div>

                <div className={style.textareaContainer}>
                    Описание
                    <textarea maxLength="337"
                        className={style.stickerDescription}
                        placeholder="Сформулируйте вашу идею"
                        value={content}
                        onChange={(event) => setContent(event.target.value)} />
                </div>

                <div className={style.footer}>
                    <Button isAccent={false} clickHandler={props.closeWindow}>Отмена</Button>
                    <Button isAccent={true} clickHandler={()=>{props.closeWindow();
                        props.changeStickerText(props.sticker.id, header, content);}}>Принять</Button>
                </div>
            </div>
        </div>
    )
}

export default StickerEditingWindow;