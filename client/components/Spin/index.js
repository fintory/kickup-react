// @flow
import React from 'react'
import { css } from 'aphrodite/no-important'

import styles from './style'

export default function Spin(props: Object): React$Node {
  return (
    <div {...props} className={css(styles.ring)}>
      <span className={css(styles.ring__inner)} />
      <span className={css(styles.ring__inner)} />
    </div>
  )
}
