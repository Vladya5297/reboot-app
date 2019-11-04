import React from 'react'
import { useDrag } from 'react-dnd'
import * as style from './Sticker.module.css'

const Sticker = (props) => {
    const [{isDragging}, drag] = useDrag({
        item: {type: props.type, id: props.id},    
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