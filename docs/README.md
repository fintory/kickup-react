# Documentation

## Table of Contents

- [General](general)
  - [**Setup of a project**](general/setup.md)
  - [CLI Commands](general/commands.md)
  - [Code Review](general/code-review.md)
- [Deployment](deployment) *(currently Heroku only)*
  - [Heroku](deployment/heroku.md)
- [Testing](testing)
  - [Unit Testing](testing/unit-testing.md)
  - [Component Testing](testing/component-testing.md)

## Overview

### Development

Run `npm start` to see your app at `localhost:3000`

### Building & Deploying

1. Run `yarn build`, which will compile all the necessary files to the
`static` folder.

2. Upload the contents of the `static` folder to your web server's root folder.

### JS

We bundle all your clientside scripts and chunk them into several files using
code splitting where possible. We then automatically optimize your code when
building for production so you don't have to worry about that.

### SEO

We use [react-helmet](https://github.com/nfl/react-helmet) for managing document head tags. Examples on how to
write head tags can be found [here](https://github.com/nfl/react-helmet#examples).

### Testing

For a thorough explanation of the testing procedure, see the
[testing documentation](./testing/README.md)!

#### Unit testing

Unit tests live in `__test__/` directories right next to the components being tested
and are run with `yarn test`.
