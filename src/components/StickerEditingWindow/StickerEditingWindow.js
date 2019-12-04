import React from 'react'
import classes from './StickerEditingWindow.module.css'
import typeProperties from '../../store/typeProperties'
import HelpIcon from '../HelpIcon/HelpIcon'
import Button from '../Button/Button'

const StickerEditingWindow = (props) => {
    const [header, setHeader] = React.useState(props.sticker.header);
    const [content, setContent] = React.useState(props.sticker.content);
    return (
        <div className={classes.blur} onClick={(event) => {
            event.stopPropagation();
        }}>
            <div className={classes.wrapper}>

                <div className={classes.title}>
                    {typeProperties[props.sticker.type].title}
                    <HelpIcon type={props.sticker.type} />
                </div>

                <div className={classes.textareaContainer}>
                    <strong>Тема стикера</strong>
                    <textarea maxLength="37"
                        className={classes.stickerTittle}
                        placeholder="Кратко сформулируйте тему стикера. Тема будет видна на шаблоне"
                        value={header}
                        onChange={(event) => setHeader(event.target.value)} />
                </div>

                <div className={classes.textareaContainer}>
                    <strong>Описание</strong>
                    <textarea maxLength="337"
                        className={classes.stickerDescription}
                        placeholder="Сформулируйте свои мысли"
                        value={content}
                        onChange={(event) => setContent(event.target.value)} />
                </div>

                <div className={classes.footer}>
                    <Button isAccent={false} clickHandler={props.closeWindow}>Отмена</Button>
                    <Button isAccent={true} clickHandler={() => {
                        props.closeWindow();
                        props.changeStickerText(props.sticker.id, header, content);
                    }}>Сохранить</Button>
                </div>

                <div className={classes.delete}
                    onClick={() => {
                        props.closeWindow();
                        props.deleteSticker(props.sticker.id);
                    }} />
            </div>
        </div>
    )
}

export default StickerEditingWindow;