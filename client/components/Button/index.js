// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite/no-important'

import Spin from 'components/Spin'

import styles from './style.js'
import type { Props } from './types.js'

export default function Button(allProps: Props): React$Node {
  let Tag = 'button'
  const { loading, ...props } = allProps

  if (Object.prototype.hasOwnProperty.call(props, 'to')) {
    Tag = Link

    delete props.href
    delete props.onClick
  } else if (Object.prototype.hasOwnProperty.call(props, 'href')) {
    Tag = 'a'

    delete props.to
    delete props.onClick
  }

  return (
    <Tag
      disabled={loading}
      className={css(styles.button, !!loading && styles.button__loading)}
      {...props}
    >
      {/* Implement the spinner for loading activity */}
      <span className={css(styles.button__spinner, !!loading && styles['button__spinner--active'])}>
        <Spin />
      </span>

      {/* Implement the children (content) of the button */}
      <span className={css(styles.button__content, !!loading && styles['button__spinner--active'])}>
        {props.children}
      </span>
    </Tag>
  )
}

Button.defaultProps = {
  loading: false,
}
