#!/usr/bin/env node

const CWD = process.cwd()

const fs = require('fs')
const path = require('path')
const glob = require('fast-glob')
const flow = require('flow-bin')
const Table = require('cli-table2')
const chalk = require('chalk')
const { genCheckFlowStatus } = require('flow-annotation-check')
const { execFileSync } = require('child_process')

const pkg = JSON.parse(fs.readFileSync(path.join(CWD, 'package.json')))
const cfg = pkg['flow-coverage-report']

const table = new Table({
  head: ['File', 'Flow enabled?', 'Coverage', 'Covered', 'Uncovered'].map(t => chalk.bold(t)),
  chars: { mid: '', 'left-mid': '', 'mid-mid': '', 'right-mid': '' },
})

async function collectCoverage(files) {
  return Promise.all(
    files.map(async file => {
      try {
        const cov = execFileSync(flow, ['coverage', file, '--json']).toString()
        const jsonCov = JSON.parse(cov)
        const { expressions } = jsonCov
        const locs = expressions.uncovered_count + expressions.covered_count
        const coveragePercentage = (expressions.covered_count / locs) * 100

        const status = await genCheckFlowStatus(flow, file)
        const statisfied = locs === 0 || coveragePercentage > cfg.threshold

        table.push(
          [
            file,
            status.indexOf('no') === 0 ? 'No' : 'Yes',
            locs === 0 ? '100%' : `${Math.round(coveragePercentage)}%`,
            expressions.covered_count,
            expressions.uncovered_count,
          ].map(t => (statisfied ? chalk.green(t) : chalk.red(t)))
        )

        return jsonCov
      } catch (err) {
        console.error(err)
      }
    })
  )
}

glob([...cfg.globIncludePatterns, ...cfg.globExcludePatterns.map(p => `!${p}`)])
  .then(collectCoverage)
  .then(() => console.log(table.toString()))
  .catch(err => console.error(err))
