// @flow
import { combineReducers } from 'redux'
import type { CombinedReducer } from 'redux'

import { reducer as tasksReducer } from './tasks'
import type { Action } from './types'

export const rootReducer: CombinedReducer<any, Action> = combineReducers({
  tasks: tasksReducer,
})
