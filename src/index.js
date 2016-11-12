// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from './store/configure-store'
import AppRouter from './AppRouter'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <AppRouter history={history} />
  </Provider>,
  document.getElementById('root')
)