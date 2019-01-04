// @flow
import React from 'react'
import Helmet from 'react-helmet'
import Button from 'components/Button'

import { Wrapper } from './styles'

export default function NotFound(): React$Node {
  return (
    <Wrapper>
      <Helmet title="About" />

      <h2>Not Found</h2>
      <Button to="/">Go back home</Button>
    </Wrapper>
  )
}
