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
                const newPosition = state.array.filter((elem) => elem.type === action.stickerType).length;
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
                // в каком сегменте
                const sticker = state.array.filter((elem) => elem.id === action.id)[0];
                // проверяем, в какую сторону двигают стикер
                const moveRight = !!(sticker.position < action.position);
                // все элементы сегмента
                let sameTypeArr = state.array.filter((elem) => elem.type === sticker.type);
                // создаём окно для пустого стикера
                sameTypeArr = sameTypeArr.map((elem) => {
                    if (elem.id === action.id) {
                        elem.position = moveRight ? action.position + 0.5 : action.position - 0.5;
                    }
                    return elem;
                })
                    .sort((a, b) => a.position - b.position)
                    .map((elem, ind) => {
                        elem.position = ind;
                        return elem;
                    });
                return {
                    ...state,
                    array: [
                        ...state.array.filter((elem) => elem.type !== sticker.type),
                        ...sameTypeArr
                    ]
                }
            }
        default:
            return state;
    }
}