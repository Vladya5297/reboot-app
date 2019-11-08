import {
    OPEN_STICKER_EDITING_WINDOW,
    CLOSE_STICKER_EDITING_WINDOW
} from '../actionTypes'

const initialState = {
    isActive: false,
    id: -1,
    type: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_STICKER_EDITING_WINDOW:
            {
                return ({ type: action.stickerType, isActive: true, id: action.id });
            }
        case CLOSE_STICKER_EDITING_WINDOW:
            {
                return initialState;
            }
        default:
            {
                return state;
            }
    }
}