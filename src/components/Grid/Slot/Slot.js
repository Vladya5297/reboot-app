import React from 'react'
import {useDrop} from 'react-dnd'
import * as style from './Slot.module.css'

const Slot = (props) => {
    const [{isOver}, drop] = useDrop({
        accept: props.type,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
        drop: () => ({position: props.position}),
    });
    return (
        <div ref={drop}
        className={style.slot}
        style={{boxShadow: isOver && "0 0 5px 2px black"}}>
            {props.children}
        </div>
    );
}

export default Slot;