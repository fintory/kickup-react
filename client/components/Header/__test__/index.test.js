import React from 'react'
import { mount } from 'enzyme'

import Header from '..'
import { Wrapper } from '../styles'

describe('<Header />', () => {
  it('should have an logo in a `div`', () => {
    const wrapper = mount(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})
