// @flow
import React, { useState } from 'react'
import Helmet from 'react-helmet'

import Button from 'components/Button'

import { Wrapper } from './styles'

const Home = (): React$Element<'main'> => {
  const [loading, setLoading] = useState(false)

  const switchLoading = () => setLoading(!loading)

  return (
    <Wrapper>
      <Helmet title="Home" />

      <h2>Home</h2>
      <Button loading={loading} to="/about">
        {'Go to `/about`'}
      </Button>

      <div style={{ fontSize: 16, marginTop: 30 }}>
        <label htmlFor="loading">
          <input type="checkbox" id="loading" checked={loading} onChange={switchLoading} />
          Change button to `loading`
        </label>
      </div>
    </Wrapper>
  )
}

export default Home
