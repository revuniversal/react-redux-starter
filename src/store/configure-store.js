// @flow
import type {State} from '../types'
import rootReducer from '../reducers'
import {createStore} from 'redux'

const configureStore = (initialState:State) => {
  return createStore(rootReducer, initialState)
}

export default configureStore