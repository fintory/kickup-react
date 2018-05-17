# Heroku deployment

## _Suggested:_ Automatic deployment

You can simply create a _staging_ and a _production_ environment on Heroku and then just let the `develop` branch automatically (on each commit & push) deploy the application to _staging_ and let the `master` branch automatically deploy to _production_.

## Easy 5-Step Manual Deployment Process

*Step 1:* Create a _Procfile_ with the following line: `web: npm run start:production`.

*Step 2:* Install the Node.js buildpack for your Heroku app by running the following command: `heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs -a [your app name]`.

*Step 3:* Add this line to your `package.json` file in the scripts area: `"heroku-postbuild": "npm run build",`. This is so Heroku can build your production assets when deploying (more of which you can [read about here](https://devcenter.heroku.com/articles/nodejs-support#heroku-specific-build-steps)).

*Step 4:* Run `heroku config:set NPM_CONFIG_PRODUCTION=false -a [your app name]` so that Heroku can compile the NPM modules included in your _devDependencies_ (since many of these packages are required for the build process).

*Step 5:* Follow the standard Heroku deploy process:

1. `git add .`
2. `git commit -m 'Made changes as per usual'`
3. `git push heroku master`
