// @flow
/* eslint-disable import/no-extraneous-dependencies */
const rimraf = require('rimraf')
const ora = require('ora')
const { exec } = require('child_process')
/* eslint-enable import/no-extraneous-dependencies */

async function wrapPromise(name: string, callback: Function): Promise<*> {
  return new Promise(resolve => {
    const logger = ora(name).start()

    callback(() => {
      logger.succeed()
      resolve()
    })
  })
}

async function removeGitFolder(): Promise<*> {
  return wrapPromise('Remove old `.git` folder', resolve => rimraf('./static', null, resolve))
}

async function installDependencies(): Promise<*> {
  return wrapPromise(resolve =>
    exec('yarn --version', (err, stdout) => {
      if (parseFloat(stdout) < 0.15 || err || process.env.USE_YARN === 'false') {
        exec('npm install', resolve)
      } else {
        exec('yarn install', resolve)
      }
    })
  )
}

async function initializeGitRepository(): Promise<*> {
  return wrapPromise(resolve =>
    exec('git init && git add . && git commit -m "Initial commit"', resolve)
  )
}

async function removeThisFile(): Promise<*> {
  return wrapPromise(resolve => rimraf(`${__dirname}/setup.js`, resolve))
}

;(async function setup(): Promise<*> {
  await removeGitFolder()
  await initializeGitRepository()
  await installDependencies()
  await removeThisFile()
})()
