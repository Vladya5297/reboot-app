import React from 'react';
import {useDrop} from 'react-dnd'
import * as style from './Segment.module.css'

const Segment = (props) => {
    return (
        <div className={style.wrapper}>
            {props.children}
        </div>
    )
}

export default Segment;