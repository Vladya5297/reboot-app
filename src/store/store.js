/* Создаём store из редьюсеров, импортируем сюда каждый новосозданный
редьюсер и дописываем в combineReducers*/
import { createStore, combineReducers } from 'redux'
import stickers from './reducers/stickers'
import stickerDragging from './reducers/stickerDragging'
import segmentWindow from './reducers/segmentWindow'

export default createStore(combineReducers({
    stickers,
    stickerDragging,
    segmentWindow,
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());