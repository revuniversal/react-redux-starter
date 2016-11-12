// @flow
import type {State} from '../types'
import rootReducer from '../reducers'
import {createStore} from 'redux'

const configureStore = (initialState:State) => (
  /* eslint-disable no-underscore-dangle */
  createStore(
    rootReducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  /* eslint-enable */
)

export default configureStore