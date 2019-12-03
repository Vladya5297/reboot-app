import {
    CHANGE_FIELD
} from '../actionTypes'
import * as fields from '../formFields'

const initialState = fields.client;

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FIELD:
            {
                return action.field;
            }
        default:
            {
                return state;
            }
    }
}