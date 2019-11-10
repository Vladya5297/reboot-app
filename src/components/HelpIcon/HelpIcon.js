import React from 'react'
import questionMarkIcon from '../../icons/iconsSVG/QuestionMarkIcon.svg'
import * as style from './HelpIcon.module.css'
/**
 * Библиотека для всплывающих продсказок. Там же смотреть гибкие настройки и фичи по дизайну
 * @link https://material-ui.com/ru/components/tooltips/
 * Если нужно закостамайзить tooltip, а его методов не хватает,
 * то смотреть сюда @link https://codesandbox.io/s/3xx46v9015
 */
import Tooltip from '@material-ui/core/Tooltip'

const HelpIcon = (props) => {
    console.log(props.helpText);
    return (
            <>
                <Tooltip title={props.helpText}>
                    <img className={style.icon} src={questionMarkIcon} />
                 </Tooltip>
            </>
    )
}

export default HelpIcon;