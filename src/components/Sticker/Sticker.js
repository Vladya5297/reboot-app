import React from 'react'
import { useDrag } from 'react-dnd'
import * as style from './Sticker.module.css'
import typeProperties from '../../store/typeProperties'

const Sticker = (props) => {
    const [,drag] = useDrag({
        item: {id: props.id, type: props.type},
        begin: () => {
            props.startStickerDragging(props.id, props.type);
        },
        end: (item, monitor) => {
            props.stopStickerDragging();
            const dropResult = monitor.getDropResult();
            if (dropResult && dropResult.type === "Slot") {
                
            }
            else if (dropResult) {
                props.changeStickerType(props.id, dropResult.type);
            }
        }
    });

    return (
        <div ref={drag}
        style={{
            backgroundColor: typeProperties[props.type].color,
            opacity: props.id === props.stickerDraggingId ? 0.01 : 1
        }}
        className={`${style.wrapper} ${style.stickerFonts}`}
        onClick={() => {props.openStickerEditingWindow(props.id, props.type)}}
        >
            {props.header}
            {props.content && "..."}
        </div>
    )
}

export default Sticker;