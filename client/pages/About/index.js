// @flow
import React from 'react'
import Helmet from 'react-helmet'
import Button from 'components/Button'

import { Wrapper } from './styles'

export default function About(): React$Node {
  return (
    <Wrapper>
      <Helmet>
        <title>About us</title>
        <meta name="description" content="Helmet application 2" />
      </Helmet>

      <h2>About</h2>
      <Button to="/">Go back home</Button>
    </Wrapper>
  )
}
