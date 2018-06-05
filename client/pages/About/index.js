// @flow
import React from 'react'
import Helmet from 'react-helmet'
import { css } from 'aphrodite/no-important'

import { Button } from 'components'

import styles from './style'

export default function About(): React$Node {
  return (
    <div className={css(styles.main)}>
      <Helmet>
        <title>About us</title>
        <meta name="description" content="Helmet application 2" />
      </Helmet>

      <p>About</p>
      <Button to="/">Go back home</Button>
    </div>
  )
}
