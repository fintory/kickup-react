// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import type { Store } from 'redux'
import { connectRouter } from 'connected-react-router'

import middleware from './middleware'
import { rootReducer } from './reducers'
import history from './history'
import type { State, Action } from './types'

export const configureStore = (): Store<State, Action> => {
  /*
   * If `redux-dev-tools` are available the `compose` function from those is used
   * otherwise the `compose` function from `redux` is used.
   */

  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers: Function = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const baseReducer = connectRouter(history)(rootReducer)

  /*
   * Apply the needed middleware and reducers to the store and create the store
   * for later export
   */

  return createStore(baseReducer, composeEnhancers(applyMiddleware(...middleware)))
}

export const store: Store<State, Action> = configureStore()
