// @flow
import React from 'react'
import type { Props } from 'react-helmet'

import conf from '../config.json'

export default function config(path: string): * {
  const paths = path.split('.')
  let current = conf
  let i

  for (i = 0; i < paths.length; i += 1) {
    if (current[paths[i]] === undefined) {
      return undefined
    }
    current = current[paths[i]]
  }

  return current
}

export const helmetDefaults: Props = {
  title: 'Home',
  titleTemplate: `${config('projectName')} – %s`,
  children: [<html key="html" lang="en" amp />],
}
