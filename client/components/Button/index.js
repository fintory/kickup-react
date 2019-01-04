// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import Spin from 'components/Spin'

import { Button as StyledButton, Spinner, Content } from './styles'
import type { Props } from './types'

export default function Button(allProps: Props): React$Node {
  let Tag = 'button'
  const { loading, disabled, children, icon: Icon, ...props } = allProps

  if (Object.prototype.hasOwnProperty.call(props, 'to')) {
    Tag = Link

    delete props.href
    delete props.onClick
  } else if (Object.prototype.hasOwnProperty.call(props, 'href')) {
    Tag = 'a'

    delete props.to
    delete props.onClick
  }

  if (disabled) {
    delete props.to
    delete props.onClick
    delete props.href
  }

  return (
    <StyledButton as={Tag} disabled={disabled || loading} {...props}>
      {/* Implement the spinner for loading activity */}
      <Spinner loading={loading}>
        <Spin />
      </Spinner>

      {/* Implement the children (content) of the button */}
      <Content loading={loading}>
        {Icon && <Icon />}
        {children}
      </Content>
    </StyledButton>
  )
}

Button.defaultProps = {
  loading: false,
  variant: 'default',
}
