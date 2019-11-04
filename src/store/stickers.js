/* Редьюсеры принимают в параметрах текущее состояние
и action. Благодаря action.type редьюсеры понимают, что
именно нужно изменить в state. Дополнительные поля в объекте 
action могут быть любыми. Важно: редьюсер должен
возвращать именно новый объект. Чтобы добавить новый
функционал, пишем в новом файле новую функцию-редьюсер
и дописываем её имя в combineReducers */
import { ADD_STICKER, DELETE_STICKER } from './actionTypes'

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
            const newSticker = {
                header: "SampleText",
                content: "Drag me",
                position: 0,
                id: state.currentId + 1,
                type: "NewSticker"
            }
            return {...state,
                currentId: state.currentId + 1, 
                array: [
                    ...state.array,
                    newSticker
                ]
            };
        case DELETE_STICKER:
            return {...state,
                array: [
                    ...state.array.filter(elem=>elem.id !== action.id)
                ]
            };
        default:
            return state;
        }
}