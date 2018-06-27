import React from 'react'
import { shallow } from 'enzyme'

import Spin from '..'

describe('<Spin />', () => {
  it('renders a `div` component', () => {
    const wrapper = shallow(<Spin />)
    expect(wrapper.find('div')).toHaveLength(1)
  })

  it('has two `span` component', () => {
    const wrapper = shallow(<Spin />)
    expect(wrapper.find('span')).toHaveLength(2)
  })
})
