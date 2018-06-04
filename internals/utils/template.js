// @flow
import type { TemplateOpts } from './types'

export default function template(opts: TemplateOpts): string {
  return `
<!doctype html>
<html ${opts.helmet.htmlAttributes.toString()}>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="shortcut icon" href="/favicon.ico">
  ${opts.head}
</head>
<body ${opts.helmet.bodyAttributes.toString()}>
  <div role="main" id="root">${opts.html}</div>
  ${opts.scripts}
</body>
</html>
  `.trim()
}
