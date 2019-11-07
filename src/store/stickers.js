/* Редьюсеры принимают в параметрах текущее состояние
и action. Благодаря action.type редьюсеры понимают, что
именно нужно изменить в state. Дополнительные поля в объекте 
action могут быть любыми. Важно: редьюсер должен
возвращать именно новый объект. Чтобы добавить новый
функционал, пишем в новом файле новую функцию-редьюсер
и дописываем её имя в combineReducers */
import { newSticker } from './itemTypes'
import {
    ADD_STICKER,
    DELETE_STICKER,
    CHANGE_STICKER_TYPE,
    ADD_TRANSPARENT_STICKER,
    DELETE_TRANSPARENT_STICKER,
    CHANGE_STICKER_POSITION,
} from './actionTypes'


/* Всегда параметром по умалчанию прокидываем начальное состояние,
можно пустое, главное, чтобы редьюсер не возвращал undefined */
const initialState = {
    array: [],
    currentId: 0,
}

/* В блоке switch после всех кейсов нужно в default вернуть исходный state */
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_STICKER:
            {
                const sticker = {
                    header: "SampleText",
                    content: "Drag me",
                    position: 0,
                    id: state.currentId + 1,
                    type: newSticker,
                    transparent: false
                }
                return {
                    ...state,
                    currentId: state.currentId + 1,
                    array: [
                        ...state.array,
                        sticker
                    ]
                }
            }
        case DELETE_STICKER:
            {
                return {
                    ...state,
                    array: [
                        ...state.array.filter(elem => elem.id !== action.id)
                    ]
                }
            }
        case CHANGE_STICKER_TYPE:
            {
                const newPosition = state.array.filter((elem) => elem.type === action.newType).length;
                return {
                    ...state,
                    array: [
                        ...state.array.map((elem) => {
                            if (elem.id === action.id) {
                                elem.type = action.newType;
                                elem.position = newPosition;
                            }
                            return elem;
                        })
                    ]
                }
            }
        case ADD_TRANSPARENT_STICKER:
            {
                const newPosition = state.array.filter((elem) => elem.type === action.newType).length;
                const sticker = {
                    position: newPosition,
                    id: -1,
                    type: action.stickerType,
                    transparent: true
                }
                return {
                    ...state,
                    array: [
                        ...state.array,
                        sticker
                    ]
                }
            }
        case DELETE_TRANSPARENT_STICKER:
            {
                return {
                    ...state,
                    array: [
                        ...state.array.filter(elem => elem.id !== -1)
                    ]
                }
            }
        case CHANGE_STICKER_POSITION:
            {
                const stickerType = state.array.filter((elem) => elem.id === action.id)[0].type;
                let sameTypeArr = state.array.filter((elem) => elem.type === stickerType);
                sameTypeArr = sameTypeArr.map((elem) => {
                    if (elem.position >= action.position) {
                        elem.position += 1;
                    }
                    return elem;
                });
                return {
                    ...state,
                    array: [
                        ...sameTypeArr.map((elem) => {
                            if (elem.id === action.id) {
                                elem.position = (action.position >= sameTypeArr.length)
                                 ? sameTypeArr.length - 1 : action.position;
                            }
                            return elem;
                        })
                    ]
                }
            }
        default:
            return state;
    }
}