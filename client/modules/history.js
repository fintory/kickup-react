// @flow
import createBrowserHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'

import type { BrowserHistory } from 'history/createBrowserHistory'

const history: BrowserHistory = process.env.SERVER ? createMemoryHistory() : createBrowserHistory()

export default history
