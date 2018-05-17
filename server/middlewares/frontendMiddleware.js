// @flow
/* eslint-disable global-require */
import React from 'react'
import express from 'express'
import path from 'path'

/* eslint-disable import/no-extraneous-dependencies */
import MemoryFS from 'memory-fs'
import webpack from 'webpack'
import compression from 'compression'
import requireFromString from 'require-from-string'
/* eslint-enable import/no-extraneous-dependencies */

// Dev middleware
const addDevMiddlewares = async (app, webpackConfig): Promise<*> => {
  /* eslint-disable import/no-extraneous-dependencies */
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  /* eslint-enable import/no-extraneous-dependencies */

  const compiler = webpack(webpackConfig)
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only',
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404)
      } else {
        res.send(file.toString())
      }
    })
  })
}

// Production middlewares
const addProdMiddlewares = async (app, config): Promise<*> => {
  try {
    const ReactDOMServer = require('react-dom/server')
    // const App = require('../../client/pages/Root')

    const publicPath = '/'
    const outputPath = path.resolve(process.cwd(), 'build')

    const fs = new MemoryFS()
    const serverCompiler = webpack(config)
    serverCompiler.outputFileSystem = fs

    // compression middleware compresses your server responses which makes them
    // smaller (applies also to assets). You can read more about that technique
    // and other good practices on official Express.js docs http://mxs.is/googmy
    app.use(compression())
    app.use(publicPath, express.static(outputPath))

    serverCompiler.run((err, stats) => {
      const contents = fs.readFileSync(
        path.resolve(config.output.path, config.output.filename),
        'utf8'
      )
      const App = requireFromString(contents)

      function handleRender(req, res) {
        const html = ReactDOMServer.renderToString(
          // <MemoryRouter>
          <App />
          // </MemoryRouter>
        )

        res.readFile(path.resolve(outputPath, 'index.html'), 'utf8', (e, data) => {
          if (e) throw e

          // Inserts the rendered React HTML into our main div
          const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`)

          // Sends the response back to the client
          res.send(document)
        })
      }

      app.get('*', handleRender)
    })
  } catch (err) {
    console.error(err)
  }
}

/**
 * Front-end middleware
 */
module.exports = async (app, options): Promise<{}> => {
  const isProd = process.env.NODE_ENV === 'production'

  if (isProd) {
    const webpackConfig = require('../../config/webpack.config.prod.babel')
    await addProdMiddlewares(app, webpackConfig)
  } else {
    const webpackConfig = require('../../config/webpack.config.dev.babel')
    await addDevMiddlewares(app, webpackConfig)
  }

  return app
}
