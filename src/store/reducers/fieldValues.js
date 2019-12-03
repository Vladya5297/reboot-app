import {
    CHANGE_FIELD_TEXT
} from '../actionTypes'
import * as fields from '../formFields'

const initialState = {
    [fields.client]: "",
    [fields.problems]: "",
    [fields.idea]: "",
    [fields.advantages]: "",
    [fields.model]: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FIELD_TEXT:
            {
                return {
                    ...state,
                    [action.field]: action.text
                };
            }
        default:
            {
                return state;
            }
    }
}