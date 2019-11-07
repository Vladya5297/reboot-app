import {ADD_STICKER,
    DELETE_STICKER,
    CHANGE_STICKER_TYPE,
    CHANGE_STICKER_POSITION,
    ADD_TRANSPARENT_STICKER,
    DELETE_TRANSPARENT_STICKER,
    START_STICKER_DRAGGING,
    STOP_STICKER_DRAGGING,
} from './actionTypes'

export function addSticker() {return {type: ADD_STICKER}}
export function deleteSticker(stickerId) {return {type: DELETE_STICKER, id: stickerId}}
export function changeStickerType(stickerId, stickerType) 
{return {type: CHANGE_STICKER_TYPE, id: stickerId, newType: stickerType}
}
export function changeStickerPosition(stickerId, position) 
{return {type: CHANGE_STICKER_POSITION, id: stickerId, position: position}
}
export function addTransparentSticker(stickerType) {return {type: ADD_TRANSPARENT_STICKER, stickerType: stickerType}}
export function deleteTransparentSticker() {return {type: DELETE_TRANSPARENT_STICKER}}

export function startStickerDragging(id, stickerType) {return {type: START_STICKER_DRAGGING, id, stickerType}}
export function stopStickerDragging() {return {type: STOP_STICKER_DRAGGING}}