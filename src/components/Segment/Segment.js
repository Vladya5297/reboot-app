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
        <div className={style.wrapper}>
            <div className={style.title}
                style={{top: props.isOnTop ? "-1.4em" : "auto",
                bottom: props.isOnTop ? "auto" : "-1.4em"}}>
                {props.children}
            </div>
            {isOver && <div className={style.focused} 
                style={{boxShadow: "0 0 5px 2px " + props.color}}/>}

            <div ref={drop}
            className={style.dropzone}>
                {props.stickers.map((elem) => (
                    <Sticker
                    key={elem.id} 
                    header={elem.header}
                    content={elem.content}
                    position={props.stickers.length}
                    id={elem.id}
                    type={elem.type} 
                    color={props.color}/>
                ))}
            </div>
        </div>
    )
}

export default Segment;