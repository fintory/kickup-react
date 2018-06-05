// @flow
import React from 'react'
import Helmet from 'react-helmet'
import { hot } from 'react-hot-loader'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import { Header } from 'components'

import config from 'app/config'

import Home from '../Home'
import About from '../About'
import NotFound from '../NotFound'

function Root(): React$Element<'div'> {
  return (
    <div>
      <Helmet
        defaultTitle={config('projectName').toString()}
        titleTemplate={`${config('projectName').toString()} — %s`}
      >
        <html key="html" lang="en" amp />
        {config('defaultMetaTags.enabled') && [
          <meta key="keywords" name="keywords" content={config('defaultMetaTags.keywords')} />,
          <meta key="title" name="title" content={config('defaultMetaTags.title')} />,
          <meta key="robots" name="robots" content={config('defaultMetaTags.robots')} />,
          <meta
            key="description"
            name="description"
            content={config('defaultMetaTags.description')}
          />,
          config('defaultMetaTags.openGraphEnabled') && [
            <meta key="ogTitle" property="og:title" content={config('defaultMetaTags.title')} />,
            <meta key="ogType" property="og:type" content={config('defaultMetaTags.type')} />,
            <meta
              key="ogDescription"
              property="og:description"
              content={config('defaultMetaTags.description')}
            />,
            <meta
              key="ogSiteName"
              property="og:site_name"
              content={config('defaultMetaTags.siteName')}
            />,
          ],
        ]}
      </Helmet>

      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default hot(module)(Root)
