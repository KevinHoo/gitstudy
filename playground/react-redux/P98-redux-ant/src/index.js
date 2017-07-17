/**
 * Created by kevhu on 2017/7/17.
 */
import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

// 1. create store
const store = createStore(()=>{});

// 2. render
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
