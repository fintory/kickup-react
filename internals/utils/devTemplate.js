// @flow
const build = require('./template').default

module.exports = build({
  html: '',
  helmet: { htmlAttributes: '', bodyAttributes: '' },
  head: '',
  scripts: '',
})
