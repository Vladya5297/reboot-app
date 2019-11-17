import React from 'react';
import * as style from './SegmentHeader.module.css'
import HelpIcon from '../HelpIcon/HelpIcon'
import typeProperties from '../../../store/typeProperties'

const SegmentHeader = (props) => {
    return (
        <div className={style.wrapper}>
            {typeProperties[props.type].title}
            <HelpIcon type={props.type} />
        </div>
    )
}

export default SegmentHeader;