import React from 'react'
import faq from '../../icons/iconsSVG/ВопросикИконка.svg'
import * as style from './HelpIcon.module.css'

const HelpIcon = (props) => {
    return (
            <>
                <a className={style.tooltip} data-title={props.helpText}>
                    <img className={style.icon} src={faq} />
                </a>
            </>
    )
}

export default HelpIcon;