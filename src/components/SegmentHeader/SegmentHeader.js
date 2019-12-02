import React from 'react';
import classes from './SegmentHeader.module.css'
import HelpIcon from '../HelpIcon/HelpIcon'
import typeProperties from '../../store/typeProperties'

const SegmentHeader = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                {typeProperties[props.type].title}
            </div>
            <HelpIcon type={props.type} />
        </div>
    )
}

export default SegmentHeader;