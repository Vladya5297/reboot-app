/* Редьюсеры принимают в параметрах текущее состояние
и action. Благодаря action.type редьюсеры понимают, что
именно нужно изменить в state. Дополнительные поля в объекте 
action могут быть любыми. Важно: редьюсер должен
возвращать именно новый объект. Чтобы добавить новый
функционал, пишем в новом файле новую функцию-редьюсер
и дописываем её имя в combineReducers */
import { newSticker } from './itemTypes'
import { ADD_STICKER, 
    DELETE_STICKER,
    CHANGE_STICKER_TYPE,
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
            const sticker = {
                header: "SampleText",
                content: "Drag me",
                position: 0,
                id: state.currentId + 1,
                type: newSticker
            }
            return {...state,
                currentId: state.currentId + 1, 
                array: [
                    ...state.array,
                    sticker
                ]
            };
        case DELETE_STICKER:
            return {...state,
                array: [
                    ...state.array.filter(elem=>elem.id !== action.id)
                ]
            };
        case CHANGE_STICKER_TYPE:
            return {...state,
                array: [
                    ...state.array.map((elem)=>{
                        if (elem.id === action.id) {
                            elem.type = action.newType;
                        }
                        return elem;
                    })
                ]
            };
        default:
            return state;
        }
}