// @flow
import React from 'react'
import Helmet from 'react-helmet'
import { hot } from 'react-hot-loader'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import { Header } from 'components'

import { helmetDefaults } from 'app/config'

import Home from '../Home'
import About from '../About'
import NotFound from '../NotFound'

function Root(): React$Element<'div'> {
  return (
    <div>
      <Helmet {...helmetDefaults}>{helmetDefaults.children}</Helmet>
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
