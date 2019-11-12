import React from 'react'
import Tooltip from 'react-png-tooltip';
import typeProperties from '../../../store/typeProperties'
import * as style from './HelpIcon.module.css'

const HelpIcon = (props) => {
    return (
        <Tooltip tooltip={<div className={style.helpIcon} />} className={style.tooltip}>
            {typeProperties[props.type].helptext}
        </Tooltip>
    )
}

export default HelpIcon;