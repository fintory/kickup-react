/* eslint-disable consistent-return, import/no-extraneous-dependencies */

import express from 'express'
import minimist from 'minimist'
import compression from 'compression'

import logger from './logger'
import security from './middlewares/security'
import reactApp from './middlewares/reactApp'
import config from '../utils/config'

const argv = minimist(process.argv.slice(2))

const isDev = process.env.NODE_ENV !== 'production'
const { resolve } = require('path')

if (isDev) logger.notice('Loading in development environment\n')

const app = express()

// compression middleware compresses your server responses which makes them
// smaller (applies also to assets). You can read more about that technique
// and other good practices on official Express.js docs http://mxs.is/googmy
app.use(compression())
app.use('/', express.static(resolve(process.cwd(), 'static'), { index: false }))
app.disable('x-powered-by')

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi)

// In production we need to pass these values in instead of relying on webpack
app.use(security)

app.use('*', reactApp)

// get the intended host and port number, use localhost and port 3000 if not provided
const host = argv.host || process.env.HOST || config('server.defaultHost')
const port = argv.port || process.env.PORT || config('server.defaultPort')

// Start your app.
app.listen(port, host, err => {
  if (err) {
    logger.error(err.message)
  }

  logger.notice(`
    ✓
    Server for "${config('projectName')}" is ready!

    Service Workers: ${config('serviceWorker.enabled')}
    Polyfills: ${config('polyfillIo.enabled')} (${config('polyfillIo.features').join(', ')})
    Server is now listening on Port ${port}
    You can access it in the browser at http://${host}:${port}
    Press Ctrl-C to stop.
  `)
})
