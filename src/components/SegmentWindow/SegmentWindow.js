import React from 'react'
import Grid from '../Grid/Grid'
import Sticker from '../Sticker/StickerContainer'
import * as style from './SegmentWindow.module.css'
import typeProperties from '../../store/typeProperties'

const SegmentWindow = (props) => {
    const stickers = props.stickers
        .sort((a, b) => a.position - b.position)
        .map((elem) => (
            <Sticker
                key={elem.id}
                header={elem.header}
                content={elem.content}
                position={elem.position}
                id={elem.id}
                type={elem.type} />
        ));
    // количество слотов должно быть кратно четырём
    const slots = stickers.length + (4 - stickers.length % 4);
    // создаём объект заголовка 
    const title = <div className={style.title}>
        {props.type && typeProperties[props.type].title}
        <div className={style.closeIcon} onClick={props.closeWindow} />
    </div>
    return (
        <>
            {props.isActive && <div className={style.blur} onClick={(event) => {
                event.stopPropagation();
                props.closeWindow()
            }}>
                <div className={style.wrapper} onClick={(event) => { event.stopPropagation() }}>
                    {title}
                    <div className={style.gridWrapper}>
                        <div className={style.mainStickers}
                            style={{ height: (typeProperties[props.type].slots / 4) * 8 + 'vw' }} />
                        <Grid type={props.type} slots={slots}>
                            {stickers}
                        </Grid>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default SegmentWindow;