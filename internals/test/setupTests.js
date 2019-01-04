/* eslint-disable import/no-extraneous-dependencies */
import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JSDOM } from 'jsdom'

enzyme.configure({ adapter: new Adapter() })

// -----------------------------------------------------------------------------

const exposedProperties = ['window', 'navigator', 'document']
const dom = new JSDOM('')

global.document = dom.window.document
global.window = dom.window

Object.keys(dom.window).forEach(property => {
  if (typeof global[property] === 'undefined') {
    if (property === 'localStorage') return
    if (property === 'sessionStorage') return

    exposedProperties.push(property)
    global[property] = dom.window[property]
  }
})

global.navigator = {
  userAgent: 'node.js',
}
