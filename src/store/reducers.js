/* Редьюсеры принимают в параметрах текущее состояние
и action. Благодаря action.type редьюсеры понимают, что
именно нужно изменить в state. Дополнительные поля в объекте 
action могут быть любыми. Важно: редьюсер должен
возвращать именно новый объект. Чтобы добавить новый
функционал, пишем в этом файле новую функцию-редьюсер
и дописываем её имя в combineReducers */
import {combineReducers} from 'redux'
import * as type from './actionTypes'

/* Всегда параметром по умалчанию прокидываем начальное состояние,
можно пустое, главное, чтобы редьюсер не возвращал undefined */
const initialState = {
    Benefits: [],
    Advantages: [],
    ProblemSolvings: [],
    Desires: [],
    Solutions: [],
    Tasks: [],
    Problems: [],
}

/* После всех кейсов нужно в default вернуть исходный state */
function stickers(state = initialState, action) {
    switch (action.type) {
        case type.ADD_STICKER:
            const newSticker = {title: "SampleText"}
            return {...state, 
                [action.segment]: [
                    ...state[action.segment],
                    newSticker
                ]
            };
        default:
            return state;
        }
}

export default combineReducers({
    stickers,
});