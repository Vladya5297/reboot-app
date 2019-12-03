/* Создаём store из редьюсеров, импортируем сюда каждый новосозданный
редьюсер и дописываем в combineReducers*/
import { createStore, combineReducers } from 'redux'
import stickers from './reducers/stickers'
import stickerDragging from './reducers/stickerDragging'
import stickerEditingWindow from './reducers/stickerEditingWindow'
import hover from './reducers/hover'
import currentField from './reducers/currentField'
import fieldValues from './reducers/fieldValues'

export default createStore(combineReducers({
    stickers,
    stickerDragging,
    stickerEditingWindow,
    hover,
    currentField,
    fieldValues,
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());