// @flow
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { ConnectedRouter } from 'connected-react-router'
import { store } from 'modules/store'
import history from 'modules/history'
import config from 'app/config'

console.info('Application running in', process.env.NODE_ENV, 'mode.') // eslint-disable-line

// Install the offline plugin runtime to initialize the service workers and app
// cache for the application
if (process.env.NODE_ENV === 'production' && config('serviceWorker.enabled')) {
  require('offline-plugin/runtime').install()
}

/*
 * Render the React Pages into the actual DOM
 */

const Root: React$StatelessFunctionalComponent<any> = require('pages/Root').default

const MOUNT_NODE: ?HTMLElement = document.getElementById('root')

if (MOUNT_NODE) {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Root />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  )
} else {
  throw new Error('Could not find MOUNT_NODE')
}
