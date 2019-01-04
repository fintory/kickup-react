// @flow
declare module 'styled-bootstrap-grid' {
  import type { StyledComponentType, StyledElementType } from 'styled-components'

  declare type Media = {
    xs: (declarations: Array<*>) => string,
    sm: (declarations: Array<*>) => string,
    md: (declarations: Array<*>) => string,
    lg: (declarations: Array<*>) => string,
    xl: (declarations: Array<*>) => string,
  }

  declare module.exports: {
    GridThemeProvider: StyledComponentType<StyledElementType<'div'>>,
    Container: StyledComponentType<StyledElementType<'div'>>,
    Col: StyledComponentType<StyledElementType<'div'>>,
    Row: StyledComponentType<StyledElementType<'div'>>,
    media: Media,
  }
}
