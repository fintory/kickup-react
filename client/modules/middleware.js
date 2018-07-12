// @flow
import thunk from 'redux-thunk'
import routerMiddleware from 'connected-react-router/lib/middleware'
import type { Middleware } from 'redux'

import history from './history'

const router: Middleware<{}, mixed> = routerMiddleware(history)

export default [thunk, router]
