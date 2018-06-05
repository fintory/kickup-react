describe('history', () => {
  it('returns a memoryHistory for server-side rendering', () => {
    process.env.SERVER = true
    const history = require('../history').default

    expect(history).toHaveProperty('location')
    expect(history).toHaveProperty('entries')
    expect(history).toHaveProperty('push')
    expect(history).toHaveProperty('go')
  })

  it('returns a browserHistory for non server-side rendering', () => {
    process.env.SERVER = false
    const history = require('../history').default

    expect(history).toHaveProperty('location')
    expect(history).toHaveProperty('entries')
    expect(history).toHaveProperty('push')
    expect(history).toHaveProperty('go')
  })
})
