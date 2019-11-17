import React from 'react'
import { useDrag } from 'react-dnd'
import * as style from './Sticker.module.css'
import { newSticker } from '../../../store/itemTypes'
import typeProperties from '../../../store/typeProperties'

const Sticker = (props) => {
    const [,drag] = useDrag({
        item: {id: props.id, type: props.type},
        begin: () => {
            props.startStickerDragging(props.id, props.type);
        },
        end: (item, monitor) => {
            props.stopStickerDragging();
            const dropResult = monitor.getDropResult();
            if (dropResult && dropResult.type === "DeleteStickerZone") {
              props.deleteSticker(props.id);
            }
            else if (dropResult && dropResult.type === "Slot") {
                
            }
            else if (dropResult) {
                props.changeStickerType(props.id, dropResult.type);
                // if (props.type === newSticker) {
                //     props.openStickerEditingWindow(props.id, props.type);
                // }
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
        </div>
    )
}

export default Sticker;