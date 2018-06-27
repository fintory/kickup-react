// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { css } from 'aphrodite/no-important'

import { Button } from 'components'

import styles from './style'
import type { Props, State } from './types'

export default class Home extends Component<Props, State> {
  state = { loading: false }

  switchLoading = () => {
    const { loading } = this.state

    this.setState({ loading: !loading })
  }

  render(): React$Node {
    const { loading } = this.state

    return (
      <div className={css(styles.main)}>
        <Helmet title="Home" />

        <p>Home</p>
        <Button loading={loading} to="/about">
          {'Go to `/about`'}
        </Button>

        <div style={{ fontSize: 16, marginTop: 30 }}>
          <input type="checkbox" id="loading" checked={loading} onChange={this.switchLoading} />
          {/* eslint-disable-next-line jsx-a11y/label-has-for */}
          <label htmlFor="loading">Change button to `loading`</label>
        </div>
      </div>
    )
  }
}
