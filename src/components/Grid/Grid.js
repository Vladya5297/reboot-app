import React from 'react'
import Slot from '../Slot/SlotContainer'
import style from './Grid.module.css'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import AddButton from '../AddButton/AddButtonContainer';


const Grid = (props) => {
    const slots = [];
    for (let i = 0; i < props.children.length; i++) {
        slots.push(
            <Slot key={i} type={props.type} position={i} isActive={props.isActive}>
                {props.children[i]}
            </Slot>)
    }
    return (
        <SimpleBar style={{ height: "32vh", width: "100%" }} >
            <div className={style.wrapper}>
                {slots}
                <AddButton type={props.type} />
            </div>
        </SimpleBar>
    );
}

export default Grid;