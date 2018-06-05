import config from '../config'

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

  it('returns `false` when not found', () => {
    expect(config('a.random.path')).toBe(false)
  })
})
