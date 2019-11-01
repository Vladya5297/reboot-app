import React from 'react';
import * as style from './SegmentHeader.module.css'
import HelpIcon from '../HelpIcon/HelpIcon'

const SegmentHeader = (props) => {
    return (
        <div className={style.wrapper}>
            {props.title}
            <HelpIcon helpText={props.helpText}>

            </HelpIcon>
        </div>
    )
}

export default SegmentHeader;