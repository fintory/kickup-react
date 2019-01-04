// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Button from 'components/Button'

import { Wrapper } from './styles'
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
      <Wrapper>
        <Helmet title="Home" />

        <h2>Home</h2>
        <Button loading={loading} to="/about">
          {'Go to `/about`'}
        </Button>

        <div style={{ fontSize: 16, marginTop: 30 }}>
          <input type="checkbox" id="loading" checked={loading} onChange={this.switchLoading} />
          {/* eslint-disable-next-line jsx-a11y/label-has-for */}
          <label htmlFor="loading">Change button to `loading`</label>
        </div>
      </Wrapper>
    )
  }
}
