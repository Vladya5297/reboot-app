import React from 'react'
import { useDrag } from 'react-dnd'
import * as style from './Sticker.module.css'

const Sticker = (props) => {
    const [{isDragging}, drag] = useDrag({
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
            else if (dropResult && dropResult.type === "Slot")
            {

            }
            else if (dropResult) {
                props.changeStickerType(props.id, dropResult.type)
            }
        },
        collect: monitor => ({
                isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div ref={drag}
        style={{
            backgroundColor: props.color,
            opacity: props.id === props.stickerDraggingId ? 0.01 : 1
        }}
        className={`${style.wrapper} ${style.stickerFonts}`}
        >
            {props.header}
        </div>
    )
}

export default Sticker;