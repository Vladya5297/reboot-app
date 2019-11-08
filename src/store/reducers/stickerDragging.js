import {
    START_STICKER_DRAGGING,
    STOP_STICKER_DRAGGING
} from '../actionTypes'

const initialState = {
    isActive: false,
    id: -1,
    type: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case START_STICKER_DRAGGING:
            {
                return ({ id: action.id, type: action.stickerType, isActive: true });
            }
        case STOP_STICKER_DRAGGING:
            {
                return initialState;
            }
        default:
            {
                return state;
            }
    }
}