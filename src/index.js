import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { App } from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './Redux/Reducers/reducers'

const store = createStore(reducers, applyMiddleware(logger, thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
