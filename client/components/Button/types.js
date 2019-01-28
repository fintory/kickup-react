// @flow
import type { LocationShape } from 'react-router-dom'

export type RestProps = {
  to?: string | LocationShape,
  href?: string,
  onClick?: Function,
}

export type Props = RestProps & {
  loading?: ?boolean,
  disabled?: boolean,

  icon?: *,
  children: string | React$Element<*>,
}
