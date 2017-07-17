/**
 * Created by kevhu on 2017/7/12.
 */

//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import { render } from 'react-dom'
import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
//import App from './components/App'
import AntApp from './components/AntApp'

const rootReducer = combineReducers({form: formReducer});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

render(
    <Provider store={store}>
        <AntApp/>
    </Provider>, document.getElementById('root')
)