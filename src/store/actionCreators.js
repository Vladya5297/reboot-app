import {ADD_STICKER,
    SHOW_DELETE_ZONE,
    HIDE_DELETE_ZONE,
    DELETE_STICKER,
} from './actionTypes'

export function addSticker() {return {type: ADD_STICKER}}
export function deleteSticker(stickerId) {return {type: DELETE_STICKER, id: stickerId}}

export function showDeleteZone() {return {type: SHOW_DELETE_ZONE}}
export function hideDeleteZone() {return {type: HIDE_DELETE_ZONE}}