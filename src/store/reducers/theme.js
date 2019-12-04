import {
    CHANGE_THEME
} from '../actionTypes'

const initialState = "";

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            {
                return action.theme;
            }
        default:
            {
                return state;
            }
    }
}