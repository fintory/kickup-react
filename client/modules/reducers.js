// @flow
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import type { CombinedReducer } from 'redux'

import history from './history'
import { reducer as tasksReducer } from './tasks'
import type { Action } from './types'

export const rootReducer: CombinedReducer<any, Action> = combineReducers({
  router: connectRouter(history),
  tasks: tasksReducer,
})
