/* Создаём store из редьюсеров, импортируем сюда каждый новосозданный
редьюсер и дописываем в combineReducers*/
import { createStore, combineReducers } from 'redux'
import stickers from './stickers'
import deleteZone from './deleteZone'

export default createStore(combineReducers({
    stickers,
    deleteZone,
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());