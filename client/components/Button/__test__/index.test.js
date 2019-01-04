import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Button from '..'

describe('<Button />', () => {
  it("should render it's children", () => {
    const wrapper = mount(<Button>Button</Button>)
    expect(wrapper.contains('Button')).toEqual(true)
  })

  it('sets `disabled` on `button`', () => {
    const wrapper = mount(<Button disabled>Button</Button>)
    expect(wrapper.find('button').prop('disabled')).toBe(true)
  })

  it('removes all props if `disabled`', () => {
    const wrapper = mount(
      <Button disabled onClick={() => {}}>
        Button
      </Button>
    )
    expect(wrapper.find('button').prop('onClick')).toBe(undefined)
  })

  it('renders as `button` without props', () => {
    const wrapper = mount(<Button>Button</Button>)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders as `Link` with `to` prop', () => {
    const wrapper = mount(
      <Router>
        <Button to="/">Button</Button>
      </Router>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders as `button` with `onClick` prop', () => {
    const wrapper = mount(<Button onClick={() => {}}>Button</Button>)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders as `a` with `href` prop', () => {
    const wrapper = mount(<Button href="/">Button</Button>)
    expect(wrapper).toMatchSnapshot()
  })

  it('simulates click events', () => {
    const onButtonClick = jest.fn()
    const wrapper = mount(<Button onClick={onButtonClick}>Test</Button>)

    wrapper.simulate('click')
    expect(onButtonClick).toHaveBeenCalled()
  })
})
