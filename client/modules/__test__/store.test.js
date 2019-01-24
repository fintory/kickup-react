// @flow
import { store, configureStore } from '../store'

describe('store', () => {
  it('should be set up properly', () => {
    expect(store).toHaveProperty('getState')
    expect(store).toHaveProperty('dispatch')
  })

  it('should call global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', () => {
    /* eslint-disable no-underscore-dangle */
    const compose = jest.fn()
    global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = compose
    configureStore()
    expect(compose).toHaveBeenCalled()
    /* eslint-enable */
  })

  it('has all reducers in store', () => {
    const state = store.getState()

    expect(state).toHaveProperty('router')
    expect(state).toHaveProperty('tasks')
  })
})
