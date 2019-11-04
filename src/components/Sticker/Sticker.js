import React from 'react'
import { useDrag } from 'react-dnd'
import * as style from './Sticker.module.css'

const Sticker = (props) => {
    const [{isDragging}, drag] = useDrag({
        item: {type: props.type, id: props.id},    
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult && dropResult.segment === "DeleteStickerZone") {
              props.deleteSticker(props.id);
              props.hideDeleteZone();
            }
        },
        collect: monitor => ({
                isDragging: !!monitor.isDragging(),
        }),
    });

    isDragging && props.showDeleteZone();
    !isDragging && props.hideDeleteZone();

    return (
        <div ref={drag}
        style={{
            opacity: isDragging ? 0 : 1,
            cursor: 'grabbing'
        }}
        className={style.wrapper}>

        </div>
    )
}

export default Sticker;