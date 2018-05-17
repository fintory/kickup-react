# Command Line Commands

## Circular dependency checker

```sh
yarn check-circular-depdencies
```

Checks for circular dependencies in the applications source code.

## Development

```sh
yarn start
```

Starts the development server running on `http://localhost:3000`

## Server

### Development

```sh
yarn start
```

Starts the development server and makes your application accessible at
`localhost:3000`. Tunnels that server with `ngrok`, which means the website
accessible anywhere! Changes in the application code will be hot-reloaded.

### Host and Port

To change the host and/or port the app is accessible at, pass the `--host` and/or `--port` option to the command
with `--`. E.g. to make the app visible at `my-local-hostname:5000`, run the following:
`npm start -- --host my-local-hostname --port 5000`

## Building

```sh
yarn build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the `build` folder.

Upload the contents of `build` to your web server to
see your work live!

## Testing

See the [testing documentation](../testing/README.md) for detailed information
about our testing setup!

## Testing

```sh
yarn test
```

Tests all components of the project that are needed to be tested. Executes `yarn jest`, `yarn lint` and `yarn flow`.

## Unit testing

```sh
yarn jest
```

Tests your application with the unit tests specified in the `**/__tests__/*.js` files
throughout the application.  
All the `test` commands allow an optional `-- [string]` argument to filter
the tests run by Jest. Useful if you need to run a specific test only.

```sh
# Run only the Button component tests
yarn jest -- Button
```

## Linting

```sh
yarn lint
```

Lints your JavaScript.
