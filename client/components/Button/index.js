// @flow
import React from 'react'
import omit from 'lodash/omit'
import { Link } from 'react-router-dom'
import Spin from 'components/Spin'

import { Button as StyledButton, Spinner, Content } from './styles'
import type { Props } from './types'

export default function Button(allProps: Props): React$Node {
  let Tag = 'button'
  const { loading, disabled, children, icon: Icon, ...rest } = allProps
  let props = rest

  if (Object.prototype.hasOwnProperty.call(props, 'to')) {
    Tag = Link
    props = omit(props, ['href', 'onClick'])
  } else if (Object.prototype.hasOwnProperty.call(props, 'href')) {
    Tag = 'a'
    props = omit(props, ['to', 'onClick'])
  }

  if (disabled) {
    props = omit(props, ['to', 'href', 'onClick'])
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
