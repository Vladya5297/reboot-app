import React from 'react'
import { useDrag } from 'react-dnd'
import * as style from './Sticker.module.css'
import typeProperties from '../../store/typeProperties'

const Sticker = (props) => {
    const [,drag] = useDrag({
        item: {id: props.id, type: props.type},
        begin: () => {
            props.startStickerDragging(props.id, props.type);
        },
        end: (item, monitor) => {
            props.stopStickerDragging();
            const dropResult = monitor.getDropResult();
            if (dropResult && dropResult.type === "Slot") {
                
            }
            else if (dropResult) {
                props.changeStickerType(props.id, dropResult.type);
            }
        }
    });

    const [hover, setHover] = React.useState(false);

    return (
        <div ref={drag}
        style={{
            backgroundColor: typeProperties[props.type].color,
            opacity: props.id === props.stickerDraggingId ? 0.01 : 1
        }}
        className={`${style.wrapper} ${style.stickerFonts}`}
        onClick={() => {props.openStickerEditingWindow(props.id, props.type)}}
        onMouseOver={()=>{!hover && setHover(true)}}
        onMouseLeave={()=>{setHover(false)}}
        >
            <div className={style.delete}
            style={{
                visibility: hover ? "visible" : "hidden"
            }} 
            onClick={(event)=>{
                event.stopPropagation();
                props.deleteSticker(props.id);
                }}/>
            {props.header}
            {props.content && <><br />...</>}
        </div>
    )
}

export default Sticker;