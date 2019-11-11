import React from 'react'
import * as style from './HelpIcon.module.css'
import typeProperties from '../../store/typeProperties'
/**
 * Библиотека для всплывающих продсказок. Там же смотреть гибкие настройки и фичи по дизайну
 * @link https://material-ui.com/ru/components/tooltips/
 * Если нужно закостамайзить tooltip, а его методов не хватает,
 * то смотреть сюда @link https://codesandbox.io/s/3xx46v9015
 */
import Tooltip from '@material-ui/core/Tooltip'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const HelpIcon = (props) => {
    const theme = createMuiTheme({
        overrides: {
            MuiTooltip: {
                tooltip: {
                    fontSize: "1rem",
                    opacity: 1
                }
            }
        }
    });
    return (
        <MuiThemeProvider theme={theme}>
            <Tooltip title={typeProperties[props.type].helptext}>
                <div className={style.icon} />
            </Tooltip>
        </MuiThemeProvider>
    )
}

export default HelpIcon;