// @flow
import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import Head from 'components/Head'
import Header from 'components/Header'

import GlobalStyles from './styles'
import Home from '../Home'
import About from '../About'
import NotFound from '../NotFound'

function Root(): React$Element<*> {
  return (
    <Fragment>
      <GlobalStyles />
      <Head />

      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  )
}

export default hot(module)(Root)
