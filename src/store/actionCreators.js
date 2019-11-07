import {ADD_STICKER,
    SHOW_DELETE_ZONE,
    HIDE_DELETE_ZONE,
    DELETE_STICKER,
    CHANGE_STICKER_TYPE,
    CHANGE_STICKER_POSITION,
    ADD_TRANSPARENT_STICKER,
    DELETE_TRANSPARENT_STICKER,
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

export function showDeleteZone() {return {type: SHOW_DELETE_ZONE}}
export function hideDeleteZone() {return {type: HIDE_DELETE_ZONE}}