import React from 'react'
import { useDrag } from 'react-dnd'
import * as style from './Sticker.module.css'

const Sticker = (props) => {
    const [{isDragging}, drag] = useDrag({
        item: {type: props.type, id: props.id},
        begin: () => props.showDeleteZone(),
        end: (item, monitor) => {
            props.hideDeleteZone();
            const dropResult = monitor.getDropResult();
            if (dropResult && dropResult.type === "DeleteStickerZone") {
              props.deleteSticker(props.id);
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
            opacity: isDragging ? 0 : 10,
            cursor: 'grabbing'
        }}
        className={style.wrapper}>

        </div>
    )
}

export default Sticker;