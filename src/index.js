import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/store'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { HashRouter } from 'react-router-dom'

/* оборачиваем весь App в Provider, чтобы 
store был доступен внутри компонентов */
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <DndProvider backend={HTML5Backend}>
                <App />
            </DndProvider>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
