/* Создаём store из редьюсеров, тут менять ничего не надо */
import { createStore } from 'redux'
import reducers from './reducers'
export default createStore(reducers);