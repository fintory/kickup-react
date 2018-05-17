// @flow
import { reducer, initialState } from '../reducer'
import { CREATE_TASK, REMOVE_TASK } from '../actionTypes'

describe('tasks reducer', () => {
  it('returns `initialState` on initial call', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  describe('CREATE_TASK', () => {
    const type = CREATE_TASK

    it('adds `action.payload` to `list`', () => {
      const state = { list: [] }
      const action = { type, payload: { id: '1', name: 'Test' } }

      expect(reducer(state, action)).toHaveProperty('list', [action.payload])
    })

    it("doesn't add `action.payload` to `list` when payload isn't defined", () => {
      const state = { list: [] }
      const action = { type }

      expect(reducer(state, action)).toHaveProperty('list', [])
    })
  })

  describe('REMOVE_TASK', () => {
    it('removes `action.id` from `list`', () => {
      const state = { list: [{ id: '1', name: 'Test' }] }
      const action = { type: REMOVE_TASK, id: '1' }

      expect(reducer(state, action)).toHaveProperty('list', [])
    })
  })
})
