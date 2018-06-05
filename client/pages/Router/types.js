// @flow
import type { Store } from 'redux'
import type { State, Action } from 'modules/types'
import type { BrowserHistory } from 'history/createBrowserHistory'

export type Props = {
  store?: Store<State, Action>,
  history: BrowserHistory,
  children: React$Node,
  isSSR?: boolean,
}
