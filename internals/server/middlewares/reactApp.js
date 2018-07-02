// @flow
/* eslint-disable global-require, import/no-extraneous-dependencies */
import React from 'react'
import Helmet from 'react-helmet'

import { StaticRouter } from 'react-router-dom'
import { StyleSheetServer } from 'aphrodite/no-important'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import App from '../../../client/pages/Root'
import { store } from '../../../client/modules/store'
import config from '../../utils/config'
import build from '../../utils/template'

const manifest = require('../../../static/manifest.json')

// Production middlewares
module.exports = (req, res): * => {
  const { html, css } = StyleSheetServer.renderStatic((): string => {
    require('../../../client/utils/globalStyles')

    return renderToString(
      <Provider store={store}>
        <StaticRouter location={req.originalUrl} context={{}}>
          <App />
        </StaticRouter>
      </Provider>
    )
  })

  const helmet = Helmet.renderStatic()

  const document = build({
    helmet,
    html,
    head: `
      <style data-aphrodite>${css.content}</style>
      ${config('progressive.enabled') &&
        `<meta name="theme-color" content="${config('progressive.themeColor')}" />`}

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

  res.send(document)
}
