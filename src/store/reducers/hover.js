import {
    CHANGE_HOVER
} from '../actionTypes'

const initialState = "";

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_HOVER:
            {
                return action.hover;
            }
        default:
            {
                return state;
            }
    }
}