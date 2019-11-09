import React from 'react';
import * as style from './SegmentHeader.module.css'
import HelpIcon from '../HelpIcon/HelpIcon'
import typeProperties from '../../store/typeProperties'

const SegmentHeader = (props) => {
    console.log(typeProperties[props.type].helptext)
    return (
        <div className={style.wrapper}>
            {typeProperties[props.type].title}
            <HelpIcon helpText={typeProperties[props.type].helptext} />
        </div>
    )
}

export default SegmentHeader;