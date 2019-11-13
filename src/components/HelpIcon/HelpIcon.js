import React from 'react'
import * as style from './HelpIcon.module.css'
import typeProperties from '../../store/typeProperties'
import { connect } from 'react-redux'
/**
 * Библиотека для всплывающих продсказок. Там же смотреть гибкие настройки и фичи по дизайну
 * @link https://material-ui.com/ru/components/tooltips/
 * Если нужно закостамайзить tooltip, а его методов не хватает,
 * то смотреть сюда @link https://codesandbox.io/s/3xx46v9015
 */
import Tooltip from '@material-ui/core/Tooltip'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const mapStateToProps = (state) => ({
    isStickerEditingActive: state.stickerEditingWindow.isActive,
});

const HelpIcon = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

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
            {props.isStickerEditingActive ?
                <Tooltip title={typeProperties[props.type].helptext} placement="right-start">
                    <div className={style.icon}/>
                </Tooltip> :
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <Tooltip
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title={typeProperties[props.type].helptext}
                    >
                        <div className={style.icon} onClick={handleTooltipOpen}></div>

                    </Tooltip>
                </ClickAwayListener>
            }
        </MuiThemeProvider>
    )
}

export default connect(mapStateToProps)(HelpIcon);