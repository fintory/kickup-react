import React from 'react'
import { render } from 'enzyme'

import Spin from '..'

describe('<Spin />', () => {
  it('renders a `div` component', () => {
    const wrapper = render(<Spin />)
    expect(wrapper.is('div')).toBe(true)
  })

  it('has two `span` component', () => {
    const wrapper = render(<Spin />)
    expect(wrapper.find('span')).toHaveLength(2)
  })
})
