// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import type { Store, StoreEnhancer, Reducer } from 'redux'
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

  const baseReducer: Reducer<State, Action> = connectRouter(history)(rootReducer)
  const composeEnhancers: StoreEnhancer<State, Action, *> =
    // eslint-disable-next-line no-underscore-dangle
    global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  /*
   * Apply the needed middleware and reducers to the store and create the store
   * for later export
   */

  // $FlowFixMe
  return createStore(baseReducer, composeEnhancers(applyMiddleware(...middleware)))
}

export const store: Store<State, Action> = configureStore()
