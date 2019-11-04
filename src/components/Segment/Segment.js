import React from 'react';
import {useDrop} from 'react-dnd'
import {newSticker} from '../../store/itemTypes'
import Sticker from '../Sticker/StickerContainer'
import * as style from './Segment.module.css'

const Segment = (props) => {
    const [{isOver}, drop] = useDrop({
        accept: newSticker,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
        drop: () => ({type: props.type}),
      });
    return (
        <div ref={drop}
        className={style.wrapper}>
            {isOver && <div className={style.focused} />}
            {props.stickers.map((elem) => (
                <Sticker
                key={elem.id} 
                header={elem.header}
                content={elem.content}
                position={props.stickers.length}
                id={elem.id}
                type={elem.type} />
            ))}
        </div>
    )
}

export default Segment;