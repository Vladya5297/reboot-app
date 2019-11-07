import React from 'react'
import { useDrag } from 'react-dnd'
import * as style from './Sticker.module.css'

const Sticker = (props) => {
    const [{isDragging}, drag] = useDrag({
        item: {type: props.type, id: props.id},
        begin: () => {
            props.showDeleteZone();
            props.addTransparentSticker(props.type);
        },
        end: (item, monitor) => {
            props.hideDeleteZone();
            props.deleteTransparentSticker();
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
            opacity: isDragging ? 0 : 1,
            backgroundColor: props.color,
            visibility: props.transparent ? "hidden" : "visible",
            // backgroundColor: props.transparent ? "green" : props.color
        }}
        className={style.wrapper}>

        </div>
    )
}

export default Sticker;