// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router'
import { LOCATION_CHANGE } from 'react-router-redux/lib/reducer'

import type { Store } from 'redux'
import type { State, Action } from 'modules/types'
import type { Props } from './types'

class ConnectedRouter extends Component<Props, void> {
  static contextTypes = {
    store: PropTypes.object,
  }

  componentWillMount() {
    const { store: propsStore, history, isSSR } = this.props
    this.store = propsStore || this.context.store

    if (!isSSR) this.unsubscribeFromHistory = history.listen(this.handleLocationChange)

    this.handleLocationChange(history.location)
  }

  componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory()
  }

  unsubscribeFromHistory: () => void
  context: {
    store: Store<State, Action>,
  }
  store: Store<State, Action>

  handleLocationChange = (location: Object, action?: Object) => {
    this.store.dispatch({
      type: LOCATION_CHANGE,
      payload: {
        location,
        action,
      },
    })
  }

  render(): React$Node {
    // $FlowFixMe
    return <Router {...this.props} />
  }
}

export default ConnectedRouter
