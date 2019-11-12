import React from 'react'
import Tooltip from 'react-tooltip-lite';
import typeProperties from '../../../store/typeProperties'
import './Tooltip.css'
import * as style from './HelpIcon.module.css'

const HelpIcon = (props) => {
    return (
        <Tooltip content={typeProperties[props.type].helptext}>
            <div className={style.helpIcon} />
        </Tooltip>
    )
}

export default HelpIcon;