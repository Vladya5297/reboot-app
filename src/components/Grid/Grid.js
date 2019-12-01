import React from 'react'
import Slot from './Slot/SlotContainer'
import * as style from './Grid.module.css'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Grid = (props) => {
    const slots = [];
    for (let i = 0; i < 6; i++) {
        slots.push(
            <Slot key={i} type={props.type} position={i} isActive={props.isActive}>
                {props.children[i]}
            </Slot>)
    }
    return (
        <SimpleBar style={{ height: "15vw", width: "100%" }}>
            <div className={style.wrapper}>
                {slots}
            </div>
        </SimpleBar>
    );
}

export default Grid;