// @flow
/* eslint-disable consistent-return, import/no-extraneous-dependencies */
// eslint-disable-next-line
require('@babel/register')({
  ignore: [/node_modules\/(?!(react-router|react-router-dom|react-router-redux))/],
})

const express = require('express')
const logger = require('./logger')

const argv = require('minimist')(process.argv.slice(2))
const setup = require('./middlewares/frontendMiddleware')

const isDev = process.env.NODE_ENV !== 'production'
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false
const path = require('path')

const app = express()

global.window = {}

if (isDev) {
  logger.notice('Loading in development environment\n')
}

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
;(async function createServer(): void {
  // In production we need to pass these values in instead of relying on webpack
  await setup(app, {
    outputPath: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  })

  // get the intended host and port number, use localhost and port 3000 if not provided
  const customHost = argv.host || process.env.HOST
  const host = customHost || null // Let http.Server use its default IPv6/4 host
  const prettyHost = customHost || 'localhost'

  const port = argv.port || process.env.PORT || 3000

  // Start your app.
  app.listen(port, host, (err): void => {
    if (err) {
      return logger.error(err.message)
    }

    // Connect to ngrok in dev mode
    if (ngrok) {
      ngrok.connect(port, (innerErr, url): void => {
        if (innerErr) {
          return logger.error(innerErr)
        }

        logger.appStarted(port, prettyHost, url)
      })
    } else {
      logger.appStarted(port, prettyHost)
    }
  })
})()
