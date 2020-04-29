import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux';

import './index.css';
import {App} from './App';
import {rootReducer} from "./store/rootReducer";
import {rootSaga} from "./store/rootSaga";

const saga = createSagaMiddleware()

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
)
saga.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')
);