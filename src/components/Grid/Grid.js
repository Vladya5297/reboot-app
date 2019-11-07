import React from 'react'
import Slot from './Slot/SlotContainer'
import * as style from './Grid.module.css'

const Grid = (props) => {
    const slots = [];
    for (let i = 0; i < props.slots; i++) {
        slots.push(
        <Slot key={i} type={props.type} position={i}>
            {props.children[i]}
        </Slot>)
    }
    return (
        <div className={style.wrapper}>
            {slots}
        </div>
    );
}

export default Grid;