import React from 'react'
import classes from './AddButton.module.css'
import typeProperties from '../../store/typeProperties'

const AddButton = (props) => {
    const color = typeProperties[props.type].color;
    const style = {
        backgroundColor: color
    }
    return (
        <div className={classes.wrapper}
        onClick={()=>{
            props.addSticker(props.type);
            console.log(props.currentId);
            props.openStickerEditingWindow(props.currentId + 1, props.type);
        }}
            style={{
                borderColor: color,
                visibility: props.isVisible ? "visible" : "hidden"
            }}>
            <div className={classes.horisontal} style={style} />
            <div className={classes.vertical} style={style} />
        </div>
    )
}

export default AddButton;