// @flow
import React from 'react'
import Helmet from 'react-helmet'
import { css } from 'aphrodite/no-important'

import { Button } from 'components'

import styles from './style'

export default function NotFound(): React$Node {
  return (
    <div className={css(styles.main)}>
      <Helmet title="About" />

      <h2>Not Found</h2>
      <Button to="/">Go back home</Button>
    </div>
  )
}
