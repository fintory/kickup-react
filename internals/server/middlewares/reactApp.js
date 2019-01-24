// @flow
/* eslint-disable global-require, import/no-extraneous-dependencies */
import React from 'react'
import Helmet from 'react-helmet'
import { minify } from 'html-minifier'

import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import App from '../../../client/pages/Root'
import { store } from '../../../client/modules/store'
import config from '../../utils/config'
import build from '../../utils/template'

const manifest = require('../../../static/manifest.json')

// Production middlewares
export default (req, res): * => {
  // eslint-disable-next-line
  let context = {}
  let html
  const sheet = new ServerStyleSheet()
  const helmet = Helmet.renderStatic()

  try {
    html = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <Provider store={store}>
          <StaticRouter location={req.originalUrl} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </StyleSheetManager>
    )

    if (context.url) res.redirect(302, context.url)
  } catch (error) {
    res.sendStatus(500)
  }

  const document = build({
    helmet,
    html,
    head: `
      ${sheet.getStyleTags()}
      ${
        config('progressive.enabled')
          ? `<meta name="theme-color" content="${config('progressive.themeColor')}" />`
          : ''
      }

      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    `,
    scripts: `
      ${config('polyfillIo.enabled') &&
        `<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=${config(
          'polyfillIo.features'
        ).join(',')}"></script>`}
      <script src="${manifest['vendors.js']}"></script>
      <script src="${manifest['main.js']}"></script>
    `,
  })

  res.set({ 'Cache-Control': 'no-cache' })
  res.send(
    minify(document, {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
    })
  )
}
