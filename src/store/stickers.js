/* Редьюсеры принимают в параметрах текущее состояние
и action. Благодаря action.type редьюсеры понимают, что
именно нужно изменить в state. Дополнительные поля в объекте 
action могут быть любыми. Важно: редьюсер должен
возвращать именно новый объект. Чтобы добавить новый
функционал, пишем в новом файле новую функцию-редьюсер
и дописываем её имя в combineReducers */
import { ADD_STICKER } from './actionTypes'

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
                segment: "NewStickers",
                id: state.currentId + 1
            }
            return {...state,
                currentId: state.currentId + 1, 
                array: [
                    ...state.array,
                    newSticker
                ]
            };
        default:
            return state;
        }
}