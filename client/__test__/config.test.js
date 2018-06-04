import config, { helmetDefaults } from '../config'

describe('config', () => {
  it('returns a string for `projectName`', () => {
    const projectName = config('projectName')
    expect(typeof projectName).toBe('string')
  })

  it('returns a boolean for `cleanOnBuild`', () => {
    const cleanOnBuild = config('cleanOnBuild')
    expect(typeof cleanOnBuild).toBe('boolean')
  })

  it('returns the configuration for `polyfillIo`', () => {
    const polyfillIo = config('polyfillIo')
    expect(typeof polyfillIo).toBe('object')

    expect(polyfillIo).toHaveProperty('enabled')
    expect(polyfillIo).toHaveProperty('features')
  })

  it('returns `undefined` when not found', () => {
    expect(config('a.random.path')).toBe(undefined)
  })
})

describe('helmetDefaults', () => {
  it('has a `title`', () => {
    expect(helmetDefaults).toHaveProperty('title')
  })

  it('has a `titleTemplate`', () => {
    expect(helmetDefaults).toHaveProperty('titleTemplate')
  })
})
