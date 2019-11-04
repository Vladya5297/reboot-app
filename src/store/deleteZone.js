import { 
    SHOW_DELETE_ZONE,
    HIDE_DELETE_ZONE
    } from './actionTypes'

const initialState = {
    isHidden: true,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_DELETE_ZONE:
            return {...state,
                isHidden: false
            };
        case HIDE_DELETE_ZONE:
            return {...state,
                isHidden: true
            };
        default:
            return state;
        }
}