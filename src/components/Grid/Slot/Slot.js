import React from 'react'
import {useDrop} from 'react-dnd'
import * as style from './Slot.module.css'

const Slot = (props) => {
    const [{isOver}, drop] = useDrop({
        accept: props.type,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
        drop: () => ({type: "Slot", position: props.position}),
    });
    
    // создаём переменную-флаг, чтобы проверять момент вхождения в область
    let [dragEnter, setDragEnter] = React.useState(false);
    if (isOver && !dragEnter) {
        setDragEnter(true);
        props.changeStickerPosition(props.id, props.position);
    } else if (!isOver && dragEnter) {
        setDragEnter(false);
    }

    return (
        <div ref={drop}
        className={style.slot}>
            {props.children}
        </div>
    );
}

export default Slot;