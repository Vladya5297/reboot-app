import {
    MAXIMIZE_SEGMENT,
    MINIMIZE_SEGMENT
} from '../actionTypes'

const initialState = {
    isActive: false,
    type: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case MAXIMIZE_SEGMENT:
            {
                return ({ type: action.segmentType, isActive: true });
            }
        case MINIMIZE_SEGMENT:
            {
                return initialState;
            }
        default:
            {
                return state;
            }
    }
}