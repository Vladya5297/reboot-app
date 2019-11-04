import React from 'react'
import questionMarkIcon from '../../icons/iconsSVG/QuestionMarkIcon.svg'
import * as style from './HelpIcon.module.css'

const HelpIcon = (props) => {
    return (
            <>
                <a className={style.tooltip} data-title={props.helpText}>
                    <img className={style.icon} src={questionMarkIcon} alt="?" />
                </a>
            </>
    )
}

export default HelpIcon;