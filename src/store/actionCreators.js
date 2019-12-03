import {ADD_STICKER,
    DELETE_STICKER,
    CHANGE_STICKER_TYPE,
    CHANGE_STICKER_POSITION,
    CHANGE_STICKER_TEXT,
    START_STICKER_DRAGGING,
    STOP_STICKER_DRAGGING,
    OPEN_STICKER_EDITING_WINDOW,
    CLOSE_STICKER_EDITING_WINDOW,
    CHANGE_HOVER,
    CHANGE_FIELD,
    CHANGE_FIELD_TEXT,
} from './actionTypes'


export function addSticker(stickerType) {return {type: ADD_STICKER, stickerType}}
export function deleteSticker(id) {return {type: DELETE_STICKER, id}}
export function changeStickerType(id, newType) 
{return {type: CHANGE_STICKER_TYPE, id, newType}
}
export function changeStickerPosition(id, position) 
{return {type: CHANGE_STICKER_POSITION, id, position}
}
export function changeStickerText(id, header, content)
{return {type: CHANGE_STICKER_TEXT, id, header, content}}

export function startStickerDragging(id, stickerType) {return {type: START_STICKER_DRAGGING, id, stickerType}}
export function stopStickerDragging() {return {type: STOP_STICKER_DRAGGING}}

export function openStickerEditingWindow(id, stickerType) {return {type: OPEN_STICKER_EDITING_WINDOW, id, stickerType}}
export function closeStickerEditingWindow() {return {type: CLOSE_STICKER_EDITING_WINDOW}}

export function changeHover(hover) {return {type: CHANGE_HOVER, hover}}

export function changeField(field) {return {type: CHANGE_FIELD, field}}

export function changeFieldText(field, text) {return {type: CHANGE_FIELD_TEXT, field, text}}