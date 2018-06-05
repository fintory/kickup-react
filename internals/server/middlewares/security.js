import helmet from 'helmet'

const securityMiddleware = [
  // The xssFilter middleware sets the X-XSS-Protection header to prevent
  // reflected XSS attacks.
  helmet.xssFilter(),

  // the Don’t Sniff Mimetype middleware, noSniff, helps prevent browsers from
  // trying to guess (“sniff”) the MIME type, which can have security
  // implications. It does this by setting the X-Content-Type-Options header
  // to nosniff.
  helmet.noSniff(),

  // Frameguard mitigates clickjacking attacks by setting the X-Frame-Options
  // header.
  helmet.frameguard('deny'),

  // this middleware sets the X-Download-Options to prevent Internet Explorer
  // from executing downloads in your site’s context.
  helmet.ieNoOpen(),
]

export default securityMiddleware
