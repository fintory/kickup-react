// @flow
import React from 'react'
import type { HelmetProps } from './types'

import conf from '../config.json'

export default function config(path: string): ?string {
  const paths: Array<string> = path.split('.')
  let current: * = conf
  let i

  for (i = 0; i < paths.length; i += 1) {
    if (current[paths[i]] === undefined) {
      return undefined
    }
    current = current[paths[i]]
  }

  return current
}

const projectName: string = config('projectName') || ''

export const helmetDefaults: HelmetProps = {
  title: 'Home',
  titleTemplate: projectName !== '' ? `${projectName} – %s` : '%s',
  children: [<html key="html" lang="en" amp />],
}
