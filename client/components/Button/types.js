// @flow
import type { LocationShape } from 'react-router-dom'

export type Props = {
  to?: string | LocationShape,
  href?: string,
  onClick?: Function,
  loading?: ?boolean,
  disabled?: boolean,
  icon?: *,
  children: string | React$Element<*>,
}
