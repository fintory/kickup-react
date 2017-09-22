
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import autobind from 'autobind-decorator';
import { css } from 'aphrodite';
import styles from './style.js';

import { Button } from '../../components';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
  }

  @autobind
  switchLoading() {
    this.setState({ loading: !this.state.loading });
  }

  render() {
    return (
      <div className={css(styles.main)}>
        <Helmet title="Home" />

        <p>Home</p>
        <Button loading={this.state.loading} to="/about">{'Go to `/about`'}</Button>

        <div style={{ fontSize: 16, marginTop: 30 }}>
          <input
            type="checkbox"
            id="loading"
            checked={this.state.loading}
            onChange={this.switchLoading}
          />
          <label htmlFor="loading">Change button to `loading`</label>
        </div>
      </div>
    );
  }
}
