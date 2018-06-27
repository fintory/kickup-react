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
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.object,
  }

  componentWillMount() {
    const { store: propsStore, history, isSSR } = this.props
    const { store } = this.context

    this.store = propsStore || store

    if (!isSSR) this.unsubscribeFromHistory = history.listen(this.handleLocationChange)

    this.handleLocationChange(history.location)
  }

  componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory()
  }

  handleLocationChange = (location: Object, action?: Object) => {
    this.store.dispatch({
      type: LOCATION_CHANGE,
      payload: {
        location,
        action,
      },
    })
  }

  unsubscribeFromHistory: () => void

  context: {
    store: Store<State, Action>,
  }

  store: Store<State, Action>

  render(): React$Node {
    // $FlowFixMe
    return <Router {...this.props} />
  }
}

export default ConnectedRouter
