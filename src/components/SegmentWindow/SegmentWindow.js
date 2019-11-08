import React from 'react'
import Grid from '../Grid/Grid'
import Sticker from '../Sticker/StickerContainer'
import * as style from './SegmentWindow.module.css'

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
    return (
        <>
            {props.isActive && <div className={style.blur} onClick={props.closeWindow}>
                <div className={style.wrapper}>
                    {props.isActive && <Grid type={props.type} slots={props.stickers.length}>
                        {stickers}
                    </Grid>}
                </div>
            </div>}
        </>
    )
}

export default SegmentWindow;